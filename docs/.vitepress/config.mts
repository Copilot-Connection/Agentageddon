import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Agentageddon",
  base: "/Agentageddon/",
  description: "#ESPC25 - Agentageddon",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Sections",
        items: [
          { text: "Building an agent", link: "/building/" },
          { text: "Breaking an agent", link: "/breaking/" },
          { text: "Measuring agents", link: "/measuring/" },
        ],
      },
      { text: "Resources", link: "/resources" },
    ],

    sidebar: [
      {
        text: "Labs",
        items: [
          { text: "Building an agent", link: "/building/" },
          { text: "Breaking an agent", link: "/breaking/" },
          { text: "Measuring agents", link: "/measuring/" },
        ],
      },
      {
        text: "Resources",
        items: [{ text: "Resources", link: "/resources" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kevmcdonk/Agentageddon",
      },
    ],
  },
});
