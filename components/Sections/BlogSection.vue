<template>
  <section>
    <div class="blogs__top">
      <LangSwitcher />
    </div>
    <ul class="blogs">
      <blog-card v-for="blog in blogs" :key="blog.name" :blog="blog" />
    </ul>
  </section>
</template>
<script>
import BlogCard from '~/components/BlogCard.vue';
import LangSwitcher from '~/components/LangSwitcher';

export default {
  components: { BlogCard, LangSwitcher },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    blogs: {
      type: Array
    }
  }
};
</script>
