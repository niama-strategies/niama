import {z} from 'zod';

// SANITY ==================================================================================================================================
export const zSanityCommon = z.object({
  _createdAt: z.string(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.literal('document'),
  _updatedAt: z.string(),
});

export const zSanitySpan = z.object({
  _key: z.string(),
  _type: z.literal('span'),
  marks: z.string().array(),
  text: z.string(),
});

export const zSanityGeopoint = z.object({
  _type: z.literal('geopoint'),
  alt: z.number().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

export const zSanityReference = z.object({
  _ref: z.string(), //z.string().uuid(),
  _type: z.literal('reference'),
});

export const zSanitySlug = z.object({
  _type: z.literal('slug'),
  current: z.string(),
});

export const zSanityImageDimensions = z.object({
  _type: z.literal('sanity.imageDimensions'),
  aspectRatio: z.number(),
  height: z.number(),
  width: z.number(),
});

export const zSanityImagePalette = z.object({_type: z.literal('sanity.imagePalette')});

export const zSanityImageMetadata = z.object({
  blurHash: z.string(),
  dimensions: zSanityImageDimensions,
  hasAlpha: z.boolean(),
  isOpaque: z.boolean(),
  lqip: z.string(),
  palette: zSanityImagePalette,
  _type: z.literal('sanity.imageMetadata'),
});

export const zSanityImageAsset = zSanityCommon.extend({
  _type: z.literal('sanity.imageAsset'),
  assetId: z.string(),
  extension: z.string(),
  metadata: zSanityImageMetadata,
  mimeType: z.string(),
  originalFilename: z.string(),
  path: z.string(),
  sha1hash: z.string(),
  size: z.number(),
  uploadId: z.string(),
  url: z.string(),
});

export const zSanityImage = z.object({
  _type: z.literal('image'),
  asset: zSanityImageAsset.or(zSanityReference),
});

export const zSanityBlock = z.object({
  _key: z.string(),
  _type: z.literal('block'),
  children: zSanitySpan.array(),
  markdefs: z.any().array().optional(),
  style: z.string(),
});

export const zSanityDocument = zSanityCommon.extend({
  slug: zSanitySlug,
  title: z.string(),
});

// TYPES ===================================================================================================================================
export type SanityBlock = z.infer<typeof zSanityBlock>;