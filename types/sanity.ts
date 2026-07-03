import type { PortableTextBlock } from "@portabletext/types";

export type SanityImageAsset = {
  asset?: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
};

export type SanityEvent = {
  _id: string;
  title: string;
  slug: string;
  eventDate: string;
  shortDescription: string;
  description?: PortableTextBlock[];
  coverImage?: SanityImageAsset;
  gallery?: SanityImageAsset[];
  location?: string;
  status?: "upcoming" | "past" | "cancelled";
  isFeatured?: boolean;
  registrationText?: string;
  registrationLink?: string;
  phone?: string;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type SanityRecommendation = {
  _id: string;
  title: string;
  slug: string;
  author?: string;
  category?: string;
  shortDescription: string;
  description?: PortableTextBlock[];
  coverImage?: SanityImageAsset;
  ageGroup?: string;
  isFeatured?: boolean;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type SanityAnnouncement = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  shortDescription: string;
  body?: PortableTextBlock[];
  coverImage?: SanityImageAsset;
  isFeatured?: boolean;
  type?: "announcement" | "news" | "recap";
};
