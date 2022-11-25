// CORE ====================================================================================================================================
export const qImageProp = /* groq */ `'image': image.asset->{url}`;
export const qKnowledgeProp = /* groq */ `'knowledge': knowledge->slug.current`;
export const qSlugProp = /* groq */ `'slug': slug.current`;

// ARTICLE =================================================================================================================================
export const qArticleProps = /* groq */ `{
	description, 
	excerpt,
	${qImageProp},
	${qKnowledgeProp},
	${qSlugProp},
 	title,
	knowledge->slug.current == 'general' => {'uri': '/articles/' + slug.current}, 
	knowledge->slug.current != 'general' => {'uri': '/' + knowledge->slug.current + '/articles/' + slug.current}	
}`;

export const qArticle = /* groq */ `*[_type == "article" && slug.current == $article][0]`;
export const qRefArticle = /* groq */ `*[_type == "article" && references(^._id)][0]`;

// MENU ====================================================================================================================================
export const qMenuProps = /* groq */ `
{
  label,
  ${qSlugProp},
  items[]->{
    label,
    'to': '/' + coalesce(slug.current, ''),
    'children': *[_type == "nav" && references(^._id)]{label, 'to': '/' + ^.slug.current + '/' + slug.current}
  }
}`;

export const qMenu = /* groq */ `*[_type == "menu" && slug.current == $slug][0]${qMenuProps}`;

// PLACE ===================================================================================================================================
export const qPlaceProps = /* groq */ `{
	${qSlugProp},
	title,
}`;

// PRODUCT =================================================================================================================================
export const qProductProps = /* groq */ `{
	description, 
	excerpt, 
	${qImageProp},
	price, 
	${qSlugProp},
	title,
	'uri': '/boutique/' + slug.current, 
}`;

export const qProduct = /* groq */ `*[_type == "product" && slug.current == $product][0]`;
export const qProducts = /* groq */ `*[_type == "product"]`;

// TESTIMONY ===============================================================================================================================
export const qTestimonies = /* groq */ `*[_type == "testimony"]`;

// CONFIG ==================================================================================================================================
export const qConfig = /* groq */ `*[_type == "config"][0]`;
export const qConfigProps = /* groq */ `{
	${qImageProp},
  menu->${qMenuProps},
  subtitle, title,
}`;

// CONSULTATION ============================================================================================================================
export const qConsultationProps = /* groq */ `{
	description, 
	duration, 
	excerpt, 
	${qImageProp},
	${qKnowledgeProp},
	places[]->${qPlaceProps}, 
	price, 
	${qSlugProp},
	title,
	knowledge->slug.current == 'general' => {'uri': '/consultations/' + slug.current}, 
	knowledge->slug.current != 'general' => {'uri': '/' + knowledge->slug.current + '/consultations/' + slug.current}	
}`;

export const qConsultation = /* groq */ `*[_type == "consultation" && slug.current == $consultation][0]`;
export const qRefConsultations = /* groq */ `*[_type == "consultation" && references(^._id)]`;

// EVENT ===================================================================================================================================
export const qEvents = /* groq */ `*[_type == "event"]`;
export const qRefEvents = /* groq */ `*[_type == "event" && references(^._id)]`;

// KNOWLEDGE ===============================================================================================================================
export const qKnowledgeProps = /* groq */ `{
  excerpt,
  ${qImageProp},
  title, 
  ${qSlugProp},
  'uri': '/' + slug.current
}`;

export const qKnowledge = /* groq */ `*[_type == "knowledge" && slug.current == $knowledge][0]`;
export const qOtherKnowledges = /* groq */ `*[_type == "knowledge" && slug.current != $knowledge]`;

// TRAINING ================================================================================================================================
export const qTrainingProps = /* groq */ `{
	description, 
	duration, 
	excerpt, 
	${qImageProp},
	${qKnowledgeProp},
	places[]->${qPlaceProps}, 
	price, 
	${qSlugProp},
	title,
	knowledge->slug.current == 'general' => {'uri': '/formations/' + slug.current}, 
	knowledge->slug.current != 'general' => {'uri': '/' + knowledge->slug.current + '/formations/' + slug.current}	
}`;

export const qTraining = /* groq */ `*[_type == "training" && slug.current == $training][0]`;
export const qRefTrainings = /* groq */ `*[_type == "training" && references(^._id)]`;

// WORKSHOP ================================================================================================================================
export const qWorkshopProps = /* groq */ `{
	description, 
	duration, 
	excerpt, 
	${qImageProp},
	${qKnowledgeProp},
	places[]->${qPlaceProps}, 
	price, 
	${qSlugProp},
	title,
	knowledge->slug.current == 'general' => {'uri': '/ateliers/' + slug.current}, 
	knowledge->slug.current != 'general' => {'uri': '/' + knowledge->slug.current + '/ateliers/' + slug.current}	
}`;

export const qRefWorkshops = /* groq */ `*[_type == "workshop" && references(^._id)]`;
export const qWorkshop = /* groq */ `*[_type == "workshop" && slug.current == $workshop][0]`;