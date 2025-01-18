import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.HEAD || "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "src/images",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "showcase",
        label: "Showcase",
        path: "src/content/showcase",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "story",
            label: "Story",
            isBody: true,
          },
          {
            type: "string",
            name: "href",
            label: "Image Path",
            required: true,
          },
          {
            type: "number",
            name: "width",
            label: "Image Width (px)",
            required: true,
          },
          {
            type: "number",
            name: "height",
            label: "Image Height (px)",
          },
          {
            type: "number",
            name: "rowspan",
            label: "How many rows (in desktop/tablet view)",
            required: true,
          },
          {
            type: "number",
            name: "colspan",
            label: "How many columns (in desktop/tablet view)",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order of items (may be adjusted to fit in the grid)",
            required: true,
          },
        ],
      },
    ],
  },
});
