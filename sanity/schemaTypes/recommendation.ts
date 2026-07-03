import { defineField, defineType } from "sanity";

export const recommendationType = defineType({
  name: "recommendation",
  title: "Рекомендация",
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
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Внеклассное чтение", value: "Внеклассное чтение" },
          { title: "Книги для детей", value: "Книги для детей" },
          { title: "Букинистические издания", value: "Букинистические издания" },
          { title: "Методическая литература", value: "Методическая литература" },
          { title: "Учебная книга", value: "Учебная книга" },
          { title: "Выбор магазина", value: "Выбор магазина" },
          { title: "Для книжного клуба", value: "Для книжного клуба" },
        ],
      },
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
      title: "Обложка",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Галерея изображений",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "ageGroup",
      title: "Age group",
      type: "string",
    }),
    defineField({
      name: "isFeatured",
      title: "Show on homepage",
      type: "boolean",
      initialValue: false,
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
      subtitleAuthor: "author",
      subtitleCategory: "category",
      media: "coverImage",
    },
    prepare({ title, subtitleAuthor, subtitleCategory, media }) {
      return {
        title,
        subtitle: subtitleAuthor || subtitleCategory,
        media,
      };
    },
  },
});
