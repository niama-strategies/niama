import {qArticle, qArticleProps, qConfig, qImageProp, qKnowledgeProps, zArticle, zPageData} from '$lib/data';
import {sanity} from '$lib/server';
import {error} from '@sveltejs/kit';
import type {z} from 'zod';
import type {PageServerLoad} from './$types';

// QUERIES =================================================================================================================================
export const query = /* groq */ `${qArticle}{
	"article": ${qArticleProps},
	"hero": knowledge->{${qImageProp}, title, "subtitle": ${qConfig}.subtitle},
	"others": *[_type == "knowledge" && slug.current != knowledge._ref]${qKnowledgeProps},
	"theme": knowledge->slug.current,
	"type": 'article',
}`;


// VALIDATION ==============================================================================================================================
const zQuery = zPageData.extend({
  article: zArticle,
});

// LOAD ====================================================================================================================================
export const load: PageServerLoad = async ({params: {article}}) => {
  const debug = false;
  const data = await sanity.fetch<Query>(query, {article});
  const parsed = zQuery.safeParse(data);
  if (debug) console.debug('ARTICLE PAGE PARSING', parsed);
  if (!parsed.success) throw error(500, parsed.error.toString());
  return parsed.data;
};

// TYPE ====================================================================================================================================
type Query = z.infer<typeof zQuery>;
