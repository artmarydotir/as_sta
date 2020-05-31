<template>
  <div>
    <li class="blog">
      <nuxt-link
        :to="localePath({ name: 'blog-slug', params: { slug: blog.name } })"
      >
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
    </li>
  </div>
</template>

<script lang="js">
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    blog: {
      type: Object,
    }
  }
}
</script>
<style lang="scss" scoped>
li {
  border: 2px solid red;
  margin: 0 12px;
}
</style>
