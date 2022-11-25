import {qConfig, qImageProp, qKnowledgeProps, qTraining, qTrainingProps, zPageData, zTraining} from '$lib/data';
import {sanity} from '$lib/server';
import {error} from '@sveltejs/kit';
import type {z} from 'zod';
import type {PageServerLoad} from './$types';

// QUERY ===================================================================================================================================
export const query = /* groq */ `${qTraining}{
	"training": ${qTrainingProps},
	"hero": knowledge->{${qImageProp}, title, "subtitle": ${qConfig}.subtitle},
  "others": *[_type == "knowledge" && slug.current != knowledge._ref]${qKnowledgeProps},
	"theme": knowledge->slug.current,
	"type": 'training',
}`;

// VALIDATION ==============================================================================================================================
const zQuery = zPageData.extend({
  training: zTraining,
});

// LOAD ====================================================================================================================================
export const load: PageServerLoad = async ({params: {training}}) => {
  const debug = false;
  const data = await sanity.fetch<Query>(query, {training});
  const parsed = zQuery.safeParse(data);
  if (debug) console.debug('TRAINING PAGE PARSING', parsed);
  if (!parsed.success) throw error(500, parsed.error.toString());
  return parsed.data;
};

// TYPE ====================================================================================================================================
type Query = z.infer<typeof zQuery>;
