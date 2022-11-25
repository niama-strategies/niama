import {qConfig, qConsultationProps, qImageProp, qKnowledge, qKnowledgeProps, qOtherKnowledges, qRefArticle, qRefConsultations, qRefEvents, qRefTrainings, qRefWorkshops, qSlugProp, qTrainingProps, qWorkshopProps, zArticleItem, zConsultation, zEvent, zPageData, zTraining, zWorkshop} from '$lib/data';
import {sanity} from '$lib/server';
import {error} from '@sveltejs/kit';
import type {z} from 'zod';
import type {PageServerLoad} from './$types';

// QUERY ===================================================================================================================================
export const query = /* groq */ `${qKnowledge}{
	"article": ${qRefArticle}{excerpt, ${qImageProp}, ${qSlugProp}, title, 'uri': '/' + knowledge->slug.current + '/articles/' + slug.current},
  "consultations": ${qRefConsultations}${qConsultationProps},
  "events": ${qRefEvents},
	"hero": {${qImageProp}, title, "subtitle": ${qConfig}.subtitle},	
	"others": ${qOtherKnowledges}${qKnowledgeProps},
	"theme": slug.current,
	"type": 'knowledge',
  "trainings": ${qRefTrainings}${qTrainingProps},
	"workshops": ${qRefWorkshops}${qWorkshopProps},
}`;

// VALIDATION ==============================================================================================================================
const zQuery = zPageData.extend({
  article: zArticleItem,
  consultations: zConsultation.array(),
  events: zEvent.array(),
  trainings: zTraining.array(),
  workshops: zWorkshop.array(),
});

// LOAD ====================================================================================================================================
export const load: PageServerLoad = async ({params: {knowledge}}) => {
  const debug = false;
  const data = await sanity.fetch<Query>(query, {knowledge});
  const parsed = zQuery.safeParse(data);
  if (debug) console.log('KNOWLEDGE PAGE PARSING', parsed, data);
  if (!parsed.success) throw error(500, parsed.error.toString());
  return parsed.data;
};

// TYPE ====================================================================================================================================
type Query = z.infer<typeof zQuery>;
