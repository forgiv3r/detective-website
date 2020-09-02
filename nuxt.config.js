export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Jaran | Usługi detektywistyczne",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    './assets/icons/font/flaticon.css',
    "./assets/styles/layout.scss",
    "./assets/styles/animations.scss",
    "./assets/styles/general.scss",
    './assets/styles/icons.css',
    './assets/styles/markup.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/components.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/style-resources"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/apollo", "@nuxtjs/markdownit", '@nuxtjs/axios'],
  axios: {
    baseURL: process.env.NODE_ENV == "development"
    ? "http://localhost:1337/"
    : "https://jaran-backend.herokuapp.com/"
  },
  markdownit: {
    preset: 'default',
    html: true,
    linkify: true,
    breaks: true,
    injected: true, 
    typographer: true
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.NODE_ENV == "development"
            ? "http://localhost:1337/graphql"
            : "https://jaran-backend.herokuapp.com/graphql"
      }
    }
  },
  styleResources: {
    scss: ["~/assets/styles/variables.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};