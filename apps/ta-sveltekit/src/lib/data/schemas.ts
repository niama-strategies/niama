import {fill, type Opt} from '@niama/core';
import {z} from 'zod';
import {zSanityBlock, zSanityImageAsset} from './schemas.sanity';

// PARSERS =================================================================================================================================
export const parseFormDataValue = <S extends string>(v?: S | 'undefined' | ''): Opt<S> =>
  v === 'undefined' || v === '' || !v ? undefined : v;

export const refineFormDataValue = (v: string): boolean => !['undefined', ''].includes(v);

// UTILS ===================================================================================================================================
export const fillString = fill(z.string());

// ENUMS ===================================================================================================================================
export const formTypes = ['fail', 'success', 'unnormalized', 'unsanitized'] as const;
export const zFormType = z.enum(formTypes);
export const FORM_TYPE = zFormType.enum;

// FORMS ===================================================================================================================================
export const zForm = z.object({data: z.any(), type: zFormType, values: z.any()});

// IMAGE ===================================================================================================================================
export const zImage = zSanityImageAsset.pick({url: true});

// ITEM ====================================================================================================================================
export const zItem = z.object({
  ...fillString('slug', 'title', 'uri'),
  excerpt: zSanityBlock.array(),
  image: zImage,
});

export const zEntry = zItem.extend({knowledge: z.string(), description: zSanityBlock.array()});

// ARTICLE =================================================================================================================================
export const zArticle = zEntry.extend({});
export const zArticleItem = zItem.extend({});

// CONTACT =====================================================================================================================================
export const zContactDto = z.object(fill(z.string().transform(parseFormDataValue))('email', 'forename', 'surname'));

export const zContact = z.object({
  email: z.string().email(),
  ...fill(z.string())('forename', 'surname'),
});

export const zContactForm = zForm.extend({values: zContactDto.optional()});

// NAV =====================================================================================================================================
const zChildlessNav = z.object(fillString('label', 'to'));
export const zNav = zChildlessNav.extend({children: zChildlessNav.array()});

// NEWSLETTER ==============================================================================================================================
export const zNewsletterDto = z.object(fill(z.string().transform(parseFormDataValue))('email', 'forename', 'surname'));

export const zNewsletter = z.object({
  email: z.string().email(),
  ...fill(z.string())('forename', 'surname'),
});

export const zNewsletterForm = zForm.extend({values: zNewsletterDto.optional()});

// MENU ====================================================================================================================================
export const zMenu = z.object({...fillString('label', 'slug'), items: zNav.array()});

// PLACE ===================================================================================================================================
export const zPlace = z.object({...fillString('slug', 'title')});

// TESTIMONY ===============================================================================================================================
export const zTestimony = z.object(fillString('author', 'content', 'title'));

// CONFIG ==================================================================================================================================
export const zConfig = z.object({
  ...fillString('city', 'fb', 'email', 'instagram', 'phone', 'street', 'subtitle', 'title', 'url'),
  image: zImage,
  menu: zMenu,
  zipcode: z.number(),
});

// CONSULTATION ============================================================================================================================
export const zConsultation = zEntry.extend({...fillString('duration', 'price'), places: zPlace.array()});

// EVENT ===================================================================================================================================
export const zEvent = z.object({...fillString('slug', 'title')});

// KNOWLEDGE ===============================================================================================================================
export const zKnowledge = zItem;

// FOOTER ==================================================================================================================================
export const zFooterData = zConfig.pick({city: true, email: true, fb: true, instagram: true, phone: true, street: true, zipcode: true});

// HERO ====================================================================================================================================
export const zHeroData = z.object({
  ...fillString('subtitle', 'title'),
  image: zImage,
});

// PAGE ====================================================================================================================================
export const zPageData = z.object({
  hero: zHeroData,
  others: zKnowledge.array(),
  theme: z.string(),
  type: z.enum(['article', 'consultation', 'knowledge', 'product', 'training']),
});

// PRODUCT =================================================================================================================================
export const zProduct = zEntry.omit({knowledge: true}).extend({price: z.string()});

// TRAINING ================================================================================================================================
export const zTraining = zEntry.extend({...fillString('duration', 'price'), places: zPlace.array()});

// WORKSHOP ================================================================================================================================
export const zWorkshop = zEntry.extend({...fillString('duration', 'price'), places: zPlace.array()});

// TYPES ===================================================================================================================================
export type Article = z.infer<typeof zArticle>;
export type Config = z.infer<typeof zConfig>;
export type Consultation = z.infer<typeof zConsultation>;
export type Contact = z.infer<typeof zContact>;
export type ContactForm = z.infer<typeof zContactForm>;
export type Event = z.infer<typeof zEvent>;
export type FooterData = z.infer<typeof zFooterData>;
export type FormType = z.infer<typeof zFormType>;
export type HeroData = z.infer<typeof zHeroData>;
export type Image = z.infer<typeof zImage>;
export type Knowledge = z.infer<typeof zKnowledge>;
export type Menu = z.infer<typeof zMenu>;
export type Nav = z.infer<typeof zNav>;
export type Newsletter = z.infer<typeof zNewsletter>;
export type NewsletterForm = z.infer<typeof zNewsletterForm>;
export type Place = z.infer<typeof zPlace>;
export type Product = z.infer<typeof zProduct>;
export type Testimony = z.infer<typeof zTestimony>;
export type Training = z.infer<typeof zTraining>;
export type Workshop = z.infer<typeof zWorkshop>;
