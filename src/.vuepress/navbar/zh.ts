import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      // {
      //   text: "Ubuntu",
      //   icon: "pen-to-square",
      //   prefix: "Ubuntu/",
      //   children: [ 
      //     { text: "安装 Ubuntu20.04 服务器", icon: "pen-to-square", link: "1" },
      //     { text: "配置 Ubuntu20.04 服务器", icon: "pen-to-square", link: "2" },
      //   ],
      // },
      {
        text: "Ubuntu",
        link: "Ubuntu/",
      },
      {
        text: "算法",
        link: "Algorithm/"
      }
    ],
  },
]);
