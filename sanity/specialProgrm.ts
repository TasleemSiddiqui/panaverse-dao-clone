export default {
  name: "program",
  type: "document",
  title: "Special Program",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "description",
      type: "string",
      title: "description",
    },
    {
      name: "img",
      type: "image",
      title: "Image",
    },
    {
      title: "Quater",
      name: "quater",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "name" },
            { name: "desc", type: "string", title: "Description" },
            { name: "qNo", type: "number", title: "Quater No" },
          ],
        },
      ],
    },
  ],
};
