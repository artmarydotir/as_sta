<template>
  <div class="page-pro">
    <h1>
      این صفحه ی اتصال لیست مارک دان ها بر اساس زبان میباشد. چون لنگوییج دیفالت
      فارسی است. اینجا لیست کانتنت های فارسی را مشاهده میکنید
    </h1>
    <hr />
    <div>
      <!-- {{ blogs }} -->
      <BlogSection :blogs="blogs" />
    </div>
  </div>
</template>

<script>
import BlogSection from '~/components/Sections/BlogSection';

import blogsEn from '~/contents/en/blogsEn.js';
import blogsFa from '~/contents/fa/blogsFa.js';

export default {
  components: { BlogSection },
  asyncData({ app }) {
    // console.log(app.i18n.locale);
    const blogs = app.i18n.locale === 'fa' ? blogsFa : blogsEn;
    // console.log(blogs);

    async function asyncImport(blogName) {
      const wholeMD = await import(
        `~/contents/${app.i18n.locale}/blog/${blogName}.md`
      );
      console.log(wholeMD.attributes);
      return wholeMD.attributes;
    }

    return Promise.all(blogs.map((blog) => asyncImport(blog))).then((res) => {
      return {
        blogs: res
      };
    });
  },
  mounted() {
    // console.log(blogsFa);
    // console.log(this.$i18n.locale);
  },

  transition: {
    name: 'slide-fade'
  }

  // computed: {
  //   ogImage() {}
  // },

  // head() {
  //   return {
  //     title: this.$t('indexPageHead.title'),
  //     htmlAttrs: {
  //       lang: this.$i18n.locale
  //     },
  //     meta: [
  //       { name: 'author', content: 'Art Mary' },
  //       {
  //         name: 'description',
  //         property: 'og:description',
  //         content: this.$t('indexPageHead.description'),
  //         hid: 'description'
  //       },
  //       { property: 'og:title', content: this.$t('indexPageHead.title') },
  //       { property: 'og:image', content: this.ogImage },
  //       {
  //         name: 'twitter:description',
  //         content: this.$t('indexPageHead.description')
  //       },
  //       { name: 'twitter:image', content: this.ogImage }
  //     ]
  //   };
  // }
};
</script>
<style lang="scss">
.page-pro {
  text-align: center;
}
ul {
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  align-items: center;
  li {
    background-color: aquamarine;
  }
}
</style>
