<template>
  <div class="blogSelected">
    <h1>
      این صفحه ی نمایش یک مقاله است
    </h1>
    <div class="intro">
      <div class="elevate-cover">
        <div class="elevate-cover__textOffset">
          <div class="elevate-cover__left">
            <nuxt-link :to="localePath('index')">
              {{ $t('comeBack') }}
            </nuxt-link>
          </div>
          <div class="elevate-cover__left">
            <span class="blogSelected-year">{{ year }}</span>
            <h1 class="elevate-cover__title">
              {{ title }}
            </h1>
            <p class="elevate-cover__description">{{ description }}</p>
            <hr />
            <ImageResponsive
              :image-u-r-l="hero"
              width="40%"
              height="100px"
              class="elevate-cover__img"
              :alt="'Blog picture'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container small">
      <client-only>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
        />
      </client-only>
      <img :src="hero" alt="" />
    </div>
  </div>
</template>

<script>
import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue';
import ImageResponsive from '~/components/Image.vue';

export default {
  components: { DynamicMarkdown, ImageResponsive },
  async asyncData({ params, app }) {
    console.log(params.slug);
    const fileContent = await import(
      `~/contents/${app.i18n.locale}/blog/${params.slug}.md`
    );
    console.log(fileContent);
    const attr = fileContent.attributes;
    return {
      name: params.slug,
      title: attr.title,
      trans: attr.trans,
      year: attr.year,
      hero: attr.hero,
      id: attr.id,
      cardAlt: attr.cardAlt,
      noMainImage: attr.noMainImage,
      description: attr.description,
      renderFunc: `(${fileContent.vue.render})`,
      staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
      image: {
        main: attr.image && attr.image.main,
        og: attr.image && attr.image.og
      }
    };
  },

  nuxtI18n: {
    seo: false
  },

  computed: {
    ogImage() {
      return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`;
    },
    pageTitle() {
      return this.title;
    },
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      );
    },
    hreflang() {
      if (!this.trans) {
        return '';
      }
      return {
        hid: 'alternate-hreflang-' + this.showLocales[0].iso,
        rel: 'alternate',
        href: `${process.env.baseUrl +
          (this.showLocales[0].code === 'fa' ? '' : '/en')}/blog/${this.trans}`,
        hreflang: this.showLocales[0].code
      };
    }
  },

  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          name: 'description',
          property: 'og:description',
          content: this.description,
          hid: 'description'
        },
        { property: 'og:title', content: this.pageTitle },
        { property: 'og:image', content: this.ogImage },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.ogImage }
      ],
      link: [this.hreflang]
    };
  }
};
</script>
