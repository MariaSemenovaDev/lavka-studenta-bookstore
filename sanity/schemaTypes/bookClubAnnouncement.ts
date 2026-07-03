import { defineField, defineType } from "sanity";

export const bookClubAnnouncementType = defineType({
  name: "bookClubAnnouncement",
  title: "Мероприятие",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "isFeatured",
      title: "Show on homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Анонс", value: "announcement" },
          { title: "Новость", value: "news" },
          { title: "Итоги встречи", value: "recap" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      announcementType: "type",
      publishedAt: "publishedAt",
      media: "coverImage",
    },
    prepare({ title, announcementType, publishedAt, media }) {
      const subtitleParts = [announcementType, publishedAt ? new Date(publishedAt).toLocaleDateString("ru-RU") : null].filter(Boolean);

      return {
        title,
        subtitle: subtitleParts.join(" · "),
        media,
      };
    },
  },
});
