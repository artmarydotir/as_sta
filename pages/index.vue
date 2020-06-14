<template>
  <div class="container">
    <div>
      <h1 class="title">AASAAM</h1>
      <h2 class="subtitle">{{ $t('home') }}</h2>
      <div class="links">
        <!-- <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >{{ $t('legalName') }}</a>-->
        <p>سلام من صفحه نخستم. لطفا برای نمایش مارک دان ازینجا برو</p>
        <!-- <nuxt-link to="pro" target="blank">show md</nuxt-link> -->
        <a href="/pro" target="_blank">Mark down</a>
      </div>
    </div>
  </div>
</template>

<script>
import faJSon from '~/locales/fa/info';
import enJSon from '~/locales/en/info';
import deJSon from '~/locales/de/info';
import arJSon from '~/locales/ar/info';

export default {
  computed: {
    structuredData() {
      if (this.$i18n.locale === 'en') {
        return enJSon;
      }
      if (this.$i18n.locale === 'ar') {
        return arJSon;
      }
      if (this.$i18n.locale === 'de') {
        return deJSon;
      }
      return faJSon;
    }
  },
  mounted() {
    console.log(this.$i18n.locale);
  },
  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }],
      // title: this.$t('head.title'),
      meta: [{ name: 'twitter:image', content: this.ogImage }],
      link: [
        // TODO: ADD BLOG ARTICLE LINK LATER
        // { rel: 'index', href: 'https://example.com/article/' },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
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
