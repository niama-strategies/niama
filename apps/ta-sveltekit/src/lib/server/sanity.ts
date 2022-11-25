import sanityClient from '@sanity/client';

export const sanity = sanityClient({
  projectId: '7zo9q7sv',
  dataset: 'production',
  apiVersion: '2022-09-16',
  useCdn: true,
});