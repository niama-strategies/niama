import {
  qArticle,
  qConfig,
  qEvents,
  qImageProp,
  qKnowledge,
  qKnowledgeProps,
  qOtherKnowledges,
  qSlugProp,
  qTestimonies
} from '$lib/data/queries';
import {zArticleItem, zEvent, zPageData, zTestimony} from '$lib/data/schemas';
import {sanity} from '$lib/server';
import {error} from '@sveltejs/kit';
import type {z} from 'zod';
import type {PageServerLoad} from './$types';

// PAGE ====================================================================================================================================
export const query = /* groq */ `${qKnowledge}{
	"article": ${qArticle}{excerpt, ${qImageProp}, ${qSlugProp}, title, 'uri': '/articles/' + slug.current},
  "events": ${qEvents}{},
	"hero": {${qImageProp}, ...${qConfig}{subtitle, title}},
  "others": ${qOtherKnowledges}${qKnowledgeProps},
	"testimonies": ${qTestimonies},
  "theme": slug.current,
	"type": 'knowledge',
}`;

// VALIDATIONS =============================================================================================================================
const zQuery = zPageData.extend({
  article: zArticleItem,
  events: zEvent.array(),
  testimonies: zTestimony.array(),
});

// LOAD ====================================================================================================================================
export const load: PageServerLoad = async () => {
  const debug = false;
  const data = await sanity.fetch<Query>(query, {article: 'la-fondatrice', knowledge: 'general'});
  const parsed = zQuery.safeParse(data);
  if (debug) console.debug('GENERAL KNOWLEDGE PAGE PARSING', parsed);
  if (!parsed.success) throw error(500, parsed.error.toString());
  return parsed.data;
};

// TYPE ====================================================================================================================================
type Query = z.infer<typeof zQuery>;
