import {s} from 'sanity-typed-schema-builder';

// CORE ====================================================================================================================================
export const fDescription = {name: 'description', type: s.array({of: [s.block()]}), title: 'Description'};
export const fDuration = {name: 'duration', type: s.string(), title: 'Durée'};
export const fExcerpt = {name: 'excerpt', type: s.array({of: [s.block()]}), title: 'Extrait'};
export const fImage = {name: 'image', type: s.image(), title: 'Image'};
export const fLabel = {name: 'label', type: s.string(), title: 'Label'};
export const fPrice = {name: 'price', type: s.string(), title: 'Tarif'};

export const fSlug = ({optional = false, source = 'title', title = 'Identifiant'} = {}) => ({
  name: 'slug',
  type: s.slug({options: {source}}),
  title,
  optional,
});

export const fTitle = {name: 'title', type: s.string(), title: 'Titre'};

// EVENT ===================================================================================================================================
export const sEvent = s.document({
  name: 'event',
  title: 'Événements',
  fields: [fTitle, fSlug()],
});

// NAV =====================================================================================================================================
const navBase: Parameters<typeof s.document>[0] = {
  name: 'nav',
  title: 'Items de Menu',
  fields: [fLabel, fSlug({optional: true, source: 'label', title: 'Fragment'})],
};

export const sNav = s.document({
  ...navBase,
  fields: [
    ...navBase.fields,
    {
      name: 'parent',
      type: s.reference({to: [s.document(navBase)], options: {disableNew: true, filter: '!defined(parent)'}}),
      title: 'Parent',
      optional: true,
    },
  ],
});

// MENU ====================================================================================================================================
export const sMenu = s.document({
  name: 'menu',
  title: 'Menus',
  fields: [
    fLabel,
    fSlug(),
    {
      name: 'items',
      type: s.array({
        of: [
          s.reference({
            to: [sNav],
            options: {
              disableNew: true,
              filter: ({parent}) => ({filter: '!(@._id in $list[]._ref) && !defined(@.parent)', params: {list: parent}}),
            },
          }),
        ],
      }),
      title: 'Items',
    },
  ],
});

// PRODUCT =================================================================================================================================
export const sProduct = s.document({
  name: 'product',
  title: 'Produits',
  fields: [fTitle, fSlug(), fPrice, fImage, fExcerpt, fDescription],
});

// TESTIMONY ===============================================================================================================================
export const sTestimony = s.document({
  name: 'testimony',
  title: 'Témoignages',
  fields: [fTitle, {name: 'author', type: s.string(), title: 'Auteur'}, {name: 'content', type: s.text(), title: 'Contenu'}],
});

// CONFIG ==================================================================================================================================
export const sConfig = s.document({
  name: 'config',
  title: 'Configuration',
  fields: [
    fTitle,
    {name: 'subtitle', type: s.string(), title: 'Sous-titre'},
    {name: 'email', type: s.string(), title: 'Courriel'},
    {name: 'phone', type: s.string(), title: 'Téléphone'},
    {name: 'street', type: s.string(), title: 'Voie'},
    {name: 'zipcode', type: s.number(), title: 'Code postal'},
    {name: 'city', type: s.string(), title: 'Ville'},
    {name: 'url', type: s.url(), title: 'URL'},
    {name: 'fb', type: s.url(), title: 'Facebook'},
    {name: 'instagram', type: s.url(), title: 'Instagram'},
    {name: 'menu', type: s.reference({to: [sMenu], options: {disableNew: true}}), title: 'Menu'},
    fImage,
  ],
});

// KNOWLEDGE ===================================================================================================================================
export const sKnowledge = s.document({
  name: 'knowledge',
  title: 'Savoirs',
  fields: [fTitle, fSlug(), fExcerpt, fImage],
});

export const fKnowledge = {name: 'knowledge', type: s.reference({to: [sKnowledge], options: {disableNew: true}}), title: 'Savoir'};

// ARTICLE =================================================================================================================================
export const sArticle = s.document({
  name: 'article',
  title: 'Articles',
  fields: [fTitle, fSlug(), fKnowledge, fExcerpt, fDescription, fImage],
});

// PLACE ===================================================================================================================================
export const sPlace = s.document({
  name: 'place',
  title: 'Endroits',
  fields: [fTitle, fSlug(), {name: 'coords', type: s.geopoint(), title: 'Coordonnées', optional: true}],
});

export const fPlaces = {
  name: 'places',
  type: s.array({
    of: [
      s.reference({
        to: [sPlace],
        options: {disableNew: true, filter: ({parent}) => ({filter: '!(@._id in $list[]._ref)', params: {list: parent}})},
      }),
    ],
  }),
  title: 'Endroits',
};

// CONSULTATION ============================================================================================================================
export const sConsultation = s.document({
  name: 'consultation',
  title: 'Consultations',
  fields: [fTitle, fSlug(), fKnowledge, fPrice, fDuration, fPlaces, fExcerpt, fDescription, fImage],
});

// TRAINING ================================================================================================================================
export const sTraining = s.document({
  name: 'training',
  title: 'Formations',
  fields: [fTitle, fSlug(), fKnowledge, fPrice, fDuration, fPlaces, fExcerpt, fDescription, fImage],
});

// WORKSHOP ================================================================================================================================
export const sWorkshop = s.document({
  name: 'workshop',
  title: 'Ateliers',
  fields: [fTitle, fSlug(), fKnowledge, fPrice, fDuration, fPlaces, fExcerpt, fDescription, fImage],
});
