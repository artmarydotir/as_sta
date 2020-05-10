<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        newgeneratorv2
      </h1>
      <h2 class="subtitle">
        {{ $t('home') }}
      </h2>
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
        <p>
          سلام من صفحه نخستم. لطفا برای نمایش مارک دان ازینجا برو
        </p>
        <nuxt-link to="pro">
          show md
        </nuxt-link>
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
        { name: 'author', content: 'artmary.ir@gmail.com' },
        { name: 'theme-color', content: '#4285f4' },
        { name: 'robots', content: 'index,follow' },
        { name: 'googlebot', content: 'index,follow' },
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
        {
          name: 'description',
          property: 'og:description',
          content: this.$t('head.description'),
          hid: 'description'
        },
        { property: 'og:title', content: this.$t('indexPageHead.title') },
        { property: 'og:image', content: this.ogImage },
        {
          name: 'twitter:description',
          content: this.$t('indexPageHead.description')
        },
        { name: 'twitter:image', content: this.ogImage }
      ],
      link: [
        { rel: 'author', href: 'humans.txt' },
        { rel: 'index', href: 'https://example.com/article/' }
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
