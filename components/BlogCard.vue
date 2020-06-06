<template>
  <div>
    <li class="blog">
      من کامپوننت بلاگ کارتم
      <nuxt-link
        :to="localePath({ name: 'blog-slug', params: { slug: blog.name } })"
      >
        <div v-if="blog.hero">
          <img
            :data-src="require(`~/assets/images/blog/${blog.hero}`)"
            :data-srcset="require(`~/assets/images/blog/${blog.hero}`).srcSet"
            :alt="blog.title"
            class="lazyload"
          />
        </div>
        <div v-if="blog.hero == ''">
          <img
            :data-src="require(`~/assets/images/blog/${blog.default}`)"
            :data-srcset="
              require(`~/assets/images/blog/${blog.default}`).srcSet
            "
            :alt="blog.title"
            class="lazyload"
          />
        </div>
        <h3 class="blog__title">
          {{ blog.title }}
        </h3>
        <p class="blog__description">
          {{ blog.description }}
        </p>
      </nuxt-link>
      <span>
        {{ blog.year }}
      </span>
      <span>
        {{ img }}
      </span>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: this.blog.hero
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // ImageResponsive
  },
  methods: {
    // imagechanger() {
    //   return require(`~/${this.img}`);
    // }
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    blog: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  border: 2px solid red;
  margin: 0 12px;
}
</style>
