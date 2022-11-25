import {createConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {sArticle, sConfig, sConsultation, sEvent, sKnowledge, sMenu, sNav, sPlace, sProduct, sTestimony, sTraining, sWorkshop} from './src/lib/data/admin';

export default createConfig({
  name: 'default',
  title: 'traditionsancestrales.fr',

  projectId: '7zo9q7sv',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [
      sEvent.schema(),
      sArticle.schema(),
      sConsultation.schema(),
      sWorkshop.schema(),
      sTraining.schema(),
      sProduct.schema(),
      sTestimony.schema(),
      sKnowledge.schema(),
      sPlace.schema(),
      sConfig.schema(),
      sMenu.schema(),
      sNav.schema(),
    ],
  },
});
