import {qConfig, qImageProp, qProductProps, qProducts, zPageData, zProduct} from '$lib/data';
import {sanity} from '$lib/server';
import {error} from '@sveltejs/kit';
import type {z} from 'zod';
import type {PageServerLoad} from './$types';

// VALIDATION ==============================================================================================================================
const query = /* groq */ `{
	"products": ${qProducts}${qProductProps},
	"hero": knowledge->{${qImageProp}, title, "subtitle": ${qConfig}.subtitle},
	"theme": 'general',
	"type": 'product',
}`;

// VALIDATION ==============================================================================================================================
const zQuery = zPageData.omit({hero: true, others: true}).extend({
  products: zProduct.array(),
});

// LOAD ====================================================================================================================================
export const load: PageServerLoad = async () => {
	const debug = false;
  const data = await sanity.fetch<Query>(query);
  const parsed = zQuery.safeParse(data);
  if (debug) console.debug('SHOP PARSING', parsed);
  if (!parsed.success) throw error(500, parsed.error.toString());
  return parsed.data;
};

// TYPE ====================================================================================================================================
type Query = z.infer<typeof zQuery>;
