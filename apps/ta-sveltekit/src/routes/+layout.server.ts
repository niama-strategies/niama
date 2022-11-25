import {qArticleProps, qConfig, qImageProp, qMenuProps, zArticle, zConfig, zFooterData, zHeroData} from '$lib/data';
import {sanity} from '$lib/server';
import {actionResult} from '$lib/server/newsletter';
import {error, invalid} from '@sveltejs/kit';
import type {z} from 'zod';
import type {Actions, LayoutServerLoad} from './$types';

// QUERY ===================================================================================================================================
const query = /* groq */ `${qConfig}{
  "footer": {city, email, fb, instagram, phone, street, zipcode},
	"hero": {${qImageProp}, subtitle, title},
	menu->${qMenuProps},
  "organization": *[_type == "article" && slug.current == 'l-association'][0]${qArticleProps},
}`;

// VALIDATION ==============================================================================================================================
const zQuery = zConfig.pick({menu: true}).extend({
  footer: zFooterData,
  hero: zHeroData,
  organization: zArticle,
});

// LOAD ====================================================================================================================================
export const load: LayoutServerLoad = async () => {
  const debug = false;
  const data = await sanity.fetch<Query>(query);
  const parsed = zQuery.safeParse(data);
  if (debug) console.debug('LAYOUT PARSING', parsed);
  if (!parsed.success) throw error(500, parsed.error.toString());
  return parsed.data;
};

// ACTIONS =================================================================================================================================
export const actions: Actions = {
  newsletter: async (event) => {
    const newsletter = await actionResult(event);
    return newsletter.type === 'success' ? {newsletter} : invalid(400, {newsletter});
  },
};

// TYPE ====================================================================================================================================
type Query = z.infer<typeof zQuery>;
