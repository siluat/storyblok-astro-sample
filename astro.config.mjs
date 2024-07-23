import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: "storyblok/BlogPost",
        blogPostList: "storyblok/BlogPostList",
        page: "storyblok/Page",
      },
      apiOptions: {
        region: "us",
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ["*"],
        "flat-color-icons": [
          "template",
          "gallery",
          "approval",
          "document",
          "advertising",
          "currency-exchange",
          "voice-presentation",
          "business-contact",
          "database",
        ],
      },
    }),
  ],
});
