import { groq } from "next-sanity";

const publishedFilter = 'defined(slug.current) && coalesce(publishedAt, _createdAt) <= now()';

export const featuredEventsQuery = groq`
  *[_type == "event" && isFeatured == true && status == "upcoming" && eventDate >= now() && ${publishedFilter}]
  | order(eventDate asc)[0...4]{
    _id,
    title,
    "slug": slug.current,
    eventDate,
    shortDescription,
    description,
    coverImage,
    gallery,
    location,
    status,
    isFeatured,
    registrationText,
    registrationLink,
    phone,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const upcomingEventsQuery = groq`
  *[_type == "event" && status == "upcoming" && eventDate >= now() && ${publishedFilter}]
  | order(eventDate asc){
    _id,
    title,
    "slug": slug.current,
    eventDate,
    shortDescription,
    description,
    coverImage,
    gallery,
    location,
    status,
    isFeatured,
    registrationText,
    registrationLink,
    phone,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const pastEventsQuery = groq`
  *[_type == "event" && (status == "past" || eventDate < now()) && ${publishedFilter}]
  | order(eventDate desc){
    _id,
    title,
    "slug": slug.current,
    eventDate,
    shortDescription,
    description,
    coverImage,
    gallery,
    location,
    status,
    isFeatured,
    registrationText,
    registrationLink,
    phone,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug && ${publishedFilter}][0]{
    _id,
    title,
    "slug": slug.current,
    eventDate,
    shortDescription,
    description,
    coverImage,
    gallery,
    location,
    status,
    isFeatured,
    registrationText,
    registrationLink,
    phone,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const featuredRecommendationsQuery = groq`
  *[_type == "recommendation" && isFeatured == true && ${publishedFilter}]
  | order(coalesce(publishedAt, _createdAt) desc)[0...6]{
    _id,
    title,
    "slug": slug.current,
    author,
    category,
    shortDescription,
    description,
    coverImage,
    gallery,
    ageGroup,
    isFeatured,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const recommendationsQuery = groq`
  *[_type == "recommendation" && ${publishedFilter}]
  | order(coalesce(publishedAt, _createdAt) desc){
    _id,
    title,
    "slug": slug.current,
    author,
    category,
    shortDescription,
    description,
    coverImage,
    gallery,
    ageGroup,
    isFeatured,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const recommendationBySlugQuery = groq`
  *[_type == "recommendation" && slug.current == $slug && ${publishedFilter}][0]{
    _id,
    title,
    "slug": slug.current,
    author,
    category,
    shortDescription,
    description,
    coverImage,
    gallery,
    ageGroup,
    isFeatured,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

