import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import { getPastEvents, getRecommendations, getUpcomingEvents } from "@/sanity/fetchers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [recommendations, upcomingEvents, pastEvents] = await Promise.all([
    getRecommendations("cached"),
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/recommendations`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/book-club`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const recommendationPages: MetadataRoute.Sitemap = recommendations
    .filter((recommendation) => recommendation.slug)
    .map((recommendation) => ({
      url: `${SITE_URL}/recommendations/${recommendation.slug}`,
      lastModified: recommendation.publishedAt ? new Date(recommendation.publishedAt) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const eventPages: MetadataRoute.Sitemap = Array.from(
    new Map(
      [...upcomingEvents, ...pastEvents]
        .filter((event) => event.slug)
        .map((event) => [
          event.slug,
          {
            url: `${SITE_URL}/book-club/${event.slug}`,
            lastModified: event.publishedAt ? new Date(event.publishedAt) : new Date(event.eventDate),
            changeFrequency: "monthly" as const,
            priority: 0.7,
          },
        ]),
    ).values(),
  );

  return [...staticPages, ...recommendationPages, ...eventPages];
}
