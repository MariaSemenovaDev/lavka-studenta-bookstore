import { defineField, defineType } from "sanity";

export const recommendationType = defineType({
  name: "recommendation",
  title: "Рецензия",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название рецензии",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Адрес",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Автор книги",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Раздел",
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
      title: "Короткий анонс",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Текст рецензии",
      type: "blockContent",
    }),
    defineField({
      name: "coverImage",
      title: "Обложка или фото",
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
      title: "Для кого",
      type: "string",
    }),
    defineField({
      name: "isFeatured",
      title: "Показывать на главной",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Дата публикации",
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
      author: "author",
      category: "category",
      media: "coverImage",
    },
    prepare({ title, author, category, media }) {
      return {
        title,
        subtitle: author || category,
        media,
      };
    },
  },
});
