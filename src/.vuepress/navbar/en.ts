import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Ubuntu",
        icon: "pen-to-square",
        prefix: "Ubuntu/",
        children: [
          { text: "Install Ubuntu20.04 Server", icon: "pen-to-square", link: "1" },
          { text: "Configuer Ubuntu20.04 Server", icon: "pen-to-square", link: "2" },
        ],
      },
    ],
  },
]);
