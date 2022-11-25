import {qConfig, qImageProp, qKnowledgeProps, qWorkshop, qWorkshopProps, zPageData, zWorkshop} from '$lib/data';
import {sanity} from '$lib/server';
import {error} from '@sveltejs/kit';
import type {z} from 'zod';
import type {PageServerLoad} from './$types';

// VALIDATION ==============================================================================================================================
const query = /* groq */ `${qWorkshop}{
	"workshop": ${qWorkshopProps},
	"hero": knowledge->{${qImageProp}, title, "subtitle": ${qConfig}.subtitle},
  "others": *[_type == "knowledge" && slug.current != knowledge._ref]${qKnowledgeProps},
	"theme": knowledge->slug.current,
	"type": 'consultation',
}`;

// VALIDATION ==============================================================================================================================
const zQuery = zPageData.extend({
  workshop: zWorkshop,
});

// LOAD ====================================================================================================================================
export const load: PageServerLoad = async ({params: {workshop}}) => {
  const debug = false;
  const data = await sanity.fetch<Query>(query, {workshop});
  const parsed = zQuery.safeParse(data);
  if (debug) console.debug('WORKSHOP PAGE PARSING', parsed);
  if (!parsed.success) throw error(500, parsed.error.toString());
  return parsed.data;
};

// TYPE ====================================================================================================================================
type Query = z.infer<typeof zQuery>;
