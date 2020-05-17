<template>
  <div>
    heheee
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
    </li>
  </div>
</template>

<script lang="js">
export default {
  props: {
    blog: {
      type: Object,
    }
  }
}
</script>
