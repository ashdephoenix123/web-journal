import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: "link",
      type: "object",
      title: "Link",
      fields: [
        {
          name: "external",
          type: "url",
          title: "URL",
          hidden: ({ parent, value }) => !value && parent?.internal,
        },
        {
          name: "internal",
          type: "reference",
          to: [{ type: "author" }],
          hidden: ({ parent, value }) => !value && parent?.external,
        },
      ],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      readOnly: ({ currentUser }) => {
        console.log("currentUser", currentUser);
        return !currentUser.roles.find(({ name }) => name === "administrator");
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
