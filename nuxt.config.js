import path from 'path';
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import FMMode from 'frontmatter-markdown-loader/mode';
import { I18N } from './locales/i18n-config';

function getMdPath(lang, type) {
  let initLang = lang;
  if (lang === 'fa') {
    initLang = '';
  }
  return fs
    .readdirSync(path.resolve(__dirname, 'contents', `${lang}/${type}`))
    .filter((filename) => path.extname(filename) === '.md')
    .map((filename) => `${initLang}/${type}/${path.parse(filename).name}`);
}

const md = new MarkdownIt({
  html: true,
  typographer: true
});

export default {
  mode: 'universal',
  router: {
    base: '/'
  },
  /*
   ** Headers of the page
   */
  head: {
    link: [
      { rel: 'author', href: 'humans.txt' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicons/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-36.png',
        sizes: '36x36'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-48.png',
        sizes: '48x48'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-72.png',
        sizes: '72x72'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-144.png',
        sizes: '144x144'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-192.png',
        sizes: '192x192'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-256.png',
        sizes: '256x256'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-512.png',
        sizes: '512x512'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon.png'
      }
    ]
  },
  // head: {
  //   title: this.$i18n('head.title'),
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: process.env.npm_package_description || ''
  //     }
  //   ],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  env: {
    baseUrl: process.env.BASE_URL || ''
  },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', '~/assets/css/base/_fonts.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/jsonld',
    // '~/plugins/lazyload',
    '~/plugins/lazysizes.client.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    'nuxt-responsive-loader',
    ['nuxt-i18n', I18N]
  ],
  responsiveLoader: {
    name: 'images/[name]-[width].[ext]',
    sizes: [320],
    adapter: require('responsive-loader/sharp'),
    placeholder: true,
    quality: 45 // choose a lower value if you want to reduce filesize further
  },
  webfontloader: {
    custom: {
      families: ['aasaam-Noto'],
      urls: ['/fonts/font-face.css']
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'contents'),
          options: {
            mode: [FMMode.VUE_COMPONENT, FMMode.VUE_RENDER_FUNCTIONS],
            vue: {
              root: 'markdown-body'
            },
            markdown(body) {
              return md.render(body);
            }
          }
        },
        {
          test: /\.(gif|svg)$/,
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      );
      config.node = {
        fs: 'empty'
      };
    }
  },
  generate: {
    routes: ['/en', '404']
      .concat(getMdPath('fa', 'blog'))
      .concat(getMdPath('fa', 'blog/guide'))
      .concat(getMdPath('en', 'blog'))
  }
};
