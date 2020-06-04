<template>
  <div>
    <li class="blog">
      من کامپوننت بلاگ کارتم
      <nuxt-link
        :to="localePath({ name: 'blog-slug', params: { slug: blog.name } })"
      >
        <!-- :image-u-r-l="`~assets/images/${blog.hero}.jpg`" -->
        <!-- :data-srcset="require(`${blog.hero}`).srcSet" -->
        <!-- <ImageResponsive
          :imageurl="imagechanger(blog.hero)"
          :srcset="blog.hero"
          :alt="blog.title"
        /> -->
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
      <!-- <img
        :imageurl="imagechanger(`${blog.hero}`)"
        :srcset="require(`~/assets/images/aurora.jpg`).srcSet"
        :alt="blog.title"
        class="lazyload"
      /> -->
      <!-- <img :srcset="require(`~/assets/images/${blog.hero}`).srcSet" /> -->
    </li>
  </div>
</template>

<script>
import ImageResponsive from '~/components/Image.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ImageResponsive
  },
  methods: {
    imagechanger(a) {
      return require(`~/assets/images/${a}`);
    }
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
