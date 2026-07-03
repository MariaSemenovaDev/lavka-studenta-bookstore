import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
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
      name: "eventDate",
      title: "Event date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Книжная Лавка Студента, ул. Революции 1905 г., д. 21",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "upcoming",
      options: {
        list: [
          { title: "Предстоящее", value: "upcoming" },
          { title: "Прошедшее", value: "past" },
          { title: "Отменено", value: "cancelled" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Show on homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "registrationText",
      title: "Registration text",
      type: "string",
    }),
    defineField({
      name: "registrationLink",
      title: "Registration link",
      type: "url",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "title",
      eventDate: "eventDate",
      status: "status",
      media: "coverImage",
    },
    prepare({ title, eventDate, status, media }) {
      const subtitleParts = [eventDate ? new Date(eventDate).toLocaleString("ru-RU") : null, status].filter(Boolean);

      return {
        title,
        subtitle: subtitleParts.join(" · "),
        media,
      };
    },
  },
});
