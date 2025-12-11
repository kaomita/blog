import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Ubuntu",
        link: "Ubuntu/",
      },
      {
        text: "Algorithm",
        link: "Algorithm/"
      }
    ],
  },
]);
