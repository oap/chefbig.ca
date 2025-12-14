export const SITE = {
  website: "https://oap.github.io/", // replace this with your deployed domain
  base: "/chefbig-blog/", // replace this with your repo name
  author: "加拿大大厨师",
  profile: "https://chefbig.ca/",
  desc: "与你分享生活的点滴。",
  title: "加拿大大厨师的博客",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code. Set this empty and default will be "en"
  timezone: "America/Winnipeg", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
