// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // app:{
  //   head:{
  //     title:"Мій блог | Nuxt",
  //     meta:[
  //       {
  //         name:"description",content:"Цей блог створений за допомогою Nuxtjs"
  //       },
  //       {
  //         name:"keywords",content:"Nuxt 3, блог, SEO, Open Graph"
  //       },
  //       {
  //         name:"author",content:"Oleh Hodlevskyj"
  //       },
  //       {
  //         charset:"utf-8"
  //       },
  //       {
  //         name:"viewport",content:"width=device-width, initial-scale=1"
  //       }
  //     ]
  //   }
  // }
  app: {
    head: {
      meta: [
        { property: "og:title", content: "Мій блог | Nuxt 3" },
        {
          property: "og:description",
          content: "Це блог, створений на Nuxt 3.",
        },
        { property: "og:image", content: "https://blog.com/default-image.jpg" },
        { property: "og:url", content: "https://blog.com/" },
        { property: "og:type", content: "website" },

        { name: "twitter:card", content: "main_image" },
        { name: "twitter:title", content: "Мій блог | Nuxt 3" },
        {
          name: "twitter:description",
          content: "Це блог, створений на Nuxt 3, для демонстрації SEO.",
        },
        {
          name: "twitter:image",
          content: "https://blog.com/examplePosts-image.jpg",
        },

        //автор статті
        {
          property: "article:author",
          content: "https://twitter.com/author_profile",
        },
      ],
    },
  },
});
