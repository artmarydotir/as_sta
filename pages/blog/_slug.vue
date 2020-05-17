<template>
  <div class="blogSelected">
    <div class="intro">
      1111111111111111111111111111111111
      <div class="elevate-cover">
        <div class="elevate-cover__textOffset">
          <div class="elevate-cover__left">
            <nuxt-link :to="localePath('index')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 6 4"
                aria-hidden="true"
                style="width: 16px; transform: rotate(180deg);"
              >
                <polygon
                  fill="currentColor"
                  points="0 2.33 4.72 2.33 3.53 3.53 4 4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"
                />
              </svg>
              {{ $t('comeBack') }}
            </nuxt-link>
          </div>
          <div class="elevate-cover__left">
            <span class="blogSelected-year">{{ year }}</span>
            —
            <template v-if="trans">
              <nuxt-link
                v-for="(locale, i) in showLocales"
                :key="i"
                :to="
                  `${
                    locale.code == 'en' ? '' : '/' + locale.code
                  }/blog/${trans}`
                "
              >
                {{ $t('changeLanguagePost') }}
              </nuxt-link>
            </template>
            <span v-else>{{ $t('soonLanguagePost') }}</span>
            <h1 class="elevate-cover__title">
              {{ title }}
            </h1>
            <p class="elevate-cover__description">{{ description }}</p>
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
    </div>
  </div>
</template>

<script lang="js">

import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"


export default {

    components: { DynamicMarkdown},

    async asyncData ({params, app}) {
      const fileContent = await import(`~/contents/${app.i18n.locale}/blog/${params.slug}.md`)
      const attr = fileContent.attributes
      return {
        name: params.slug,
        title: attr.title,
        trans: attr.trans,
        year: attr.year,
        id: attr.id,
        cardAlt: attr.cardAlt,
        noMainImage: attr.noMainImage,
        description: attr.description,
        extraComponent: attr.extraComponent,
        renderFunc: `(${fileContent.vue.render})`,
        staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
        image: {
          main: attr.image && attr.image.main,
          og: attr.image && attr.image.og
        }
      }
    },

    nuxtI18n: {
      seo: false
    },

    computed: {
      ogImage () {
        return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`;
      },
      pageTitle () {
        return this.title + ' – Marina Aisa';
      },
      showLocales () {
        return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
      },
      hreflang () {
        if (!this.trans) {
          return ''
        }
        return {
          hid: 'alternate-hreflang-' + this.showLocales[0].iso,
          rel: 'alternate',
          href: `${process.env.baseUrl + (this.showLocales[0].code === 'en' ? '' : '/es')}/blog/${this.trans}`,
          hreflang: this.showLocales[0].code
        }
      },

      // extraComponentLoader () {
      //   if (!this.extraComponent) {
      //     return null
      //   }
      //   return () => import(`~/components/blog/${this.extraComponent}.vue`)
      // }
    },

    head () {
      return {
        title: this.pageTitle,
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Marina Aisa" },
          { name: "description", property: "og:description", content: this.description, hid: "description" },
          { property: "og:title", content: this.pageTitle },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.description },
          { name: "twitter:image", content: this.ogImage }
        ],
        link: [
          this.hreflang
        ]
      };
    }

}
</script>
