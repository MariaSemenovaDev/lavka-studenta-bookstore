import { unstable_noStore as noStore } from "next/cache";
import type { QueryParams } from "next-sanity";

import {
  eventBySlugQuery,
  featuredEventsQuery,
  featuredRecommendationsQuery,
  pastEventsQuery,
  recommendationBySlugQuery,
  recommendationsQuery,
  upcomingEventsQuery,
} from "@/sanity/queries";
import { sanityClient } from "@/sanity/client";
import type { SanityEvent, SanityRecommendation } from "@/types/sanity";

async function safeFetch<T>(query: string, params?: QueryParams): Promise<T | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    noStore();
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}

export async function getFeaturedEvents() {
  return (await safeFetch<SanityEvent[]>(featuredEventsQuery)) ?? [];
}

export async function getUpcomingEvents() {
  return (await safeFetch<SanityEvent[]>(upcomingEventsQuery)) ?? [];
}

export async function getPastEvents() {
  return (await safeFetch<SanityEvent[]>(pastEventsQuery)) ?? [];
}

export async function getEventBySlug(slug: string) {
  return await safeFetch<SanityEvent>(eventBySlugQuery, { slug });
}

export async function getFeaturedRecommendations() {
  return (await safeFetch<SanityRecommendation[]>(featuredRecommendationsQuery)) ?? [];
}

export async function getRecommendations() {
  return (await safeFetch<SanityRecommendation[]>(recommendationsQuery)) ?? [];
}

export async function getRecommendationBySlug(slug: string) {
  return await safeFetch<SanityRecommendation>(recommendationBySlugQuery, { slug });
}
