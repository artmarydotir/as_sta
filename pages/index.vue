<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">newgeneratorv2</h1>
      <h2 class="subtitle">{{ $t('home') }}</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          {{ $t('legalName') }}
        </a>
        <p>سلام من صفحه نخستم. لطفا برای نمایش مارک دان ازینجا برو</p>
        <nuxt-link to="pro">show md</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  mounted() {
    console.log(process.env.BASE_URL)
    console.log(this.$i18n.locale)
    // console.log(String(this.$t('head.location.geo.latitude')))
    // console.log(this.$tc('head.num'))
  },
  head() {
    return {
      title: this.$t('head.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#4285f4' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'subject', content: this.$t('head.name') },
        //  Geo tags
        {
          name: 'ICBM',
          content: `${this.$t('head.location.latitude')}, ${this.$t(
            'head.location.longitude'
          )}`
        },
        {
          name: 'geo.position',
          content: `${this.$t('head.location.latitude')};${this.$t(
            'head.location.longitude'
          )}`
        },
        { name: 'geo.region', content: 'IR-07' },
        { name: 'geo.placename', content: 'Tehran' },
        // og & global meta
        { property: 'og:title', content: this.$t('head.title') },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: this.ogImage },
        {
          name: 'description',
          property: 'og:description',
          content: this.$t('head.description'),
          hid: 'description'
        },
        {
          name: 'twitter:description',
          content: this.$t('head.description')
        },
        { name: 'twitter:image', content: this.ogImage }
      ],
      link: [
        { rel: 'manifest', href: `manifest-${this.$i18n.locale}.json` },
        { rel: 'author', href: 'humans.txt' },
        // TODO: ADD BLOG ARTICLE LINK LATER
        // { rel: 'index', href: 'https://example.com/article/' },
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
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
