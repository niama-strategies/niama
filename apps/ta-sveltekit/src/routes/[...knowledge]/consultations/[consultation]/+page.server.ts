import {qConfig, qConsultation, qConsultationProps, qImageProp, qKnowledgeProps, zConsultation, zPageData} from '$lib/data';
import {sanity} from '$lib/server';
import {error} from '@sveltejs/kit';
import type {z} from 'zod';
import type {PageServerLoad} from './$types';

// VALIDATION ==============================================================================================================================
const query = /* groq */ `${qConsultation}{
	"consultation": ${qConsultationProps},
	"hero": knowledge->{${qImageProp}, title, "subtitle": ${qConfig}.subtitle},
  "others": *[_type == "knowledge" && slug.current != knowledge._ref]${qKnowledgeProps},
	"theme": knowledge->slug.current,
	"type": 'consultation',
}`;

// VALIDATION ==============================================================================================================================
const zQuery = zPageData.extend({
  consultation: zConsultation,
});

// LOAD ====================================================================================================================================
export const load: PageServerLoad = async ({params: {consultation}}) => {
  const debug = false;
  const data = await sanity.fetch<Query>(query, {consultation});
  const parsed = zQuery.safeParse(data);
  if (debug) console.debug('CONSULTATION PAGE PARSING', parsed);
  if (!parsed.success) throw error(500, parsed.error.toString());
  return parsed.data;
};

// TYPE ====================================================================================================================================
type Query = z.infer<typeof zQuery>;
