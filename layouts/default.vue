<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: this.$t('head.title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
        ...i18nSeo.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#4285f4' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'subject', content: this.$t('head.name') },
        { name: 'keywords', content: ['HTML', 'css'] },
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
        // og & twitter & global meta
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.$t('head.title') },
        { property: 'og:image', content: this.ogImage },
        { property: 'og:image:alt', content: this.$t('head.description') },
        { property: 'og:url', content: 'https://aasaam.com' },
        {
          name: 'description',
          property: 'og:description',
          content: this.$t('head.description'),
          hid: 'description'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: '@aasaaminfo'
        },
        {
          name: 'twitter:url',
          content: 'https://aasaam.com'
        },
        {
          name: 'twitter:title',
          content: this.$t('head.title')
        },
        {
          name: 'twitter:description',
          content: this.$t('head.description')
        },
        { name: 'twitter:image', content: this.ogImage },
        ...i18nSeo.meta
      ],
      link: [
        { rel: 'manifest', href: `manifest-${this.$i18n.locale}.json` },
        ...i18nSeo.link
      ]
    }
  }
}
</script>
