import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    // "",
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    // "intro",
  ],
});
