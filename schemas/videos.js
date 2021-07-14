export default {
  name: "videos",
  title: "Videos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
};
