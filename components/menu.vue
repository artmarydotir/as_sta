<template>
  <div>
    <nuxt-link v-for="item in menuItem" :key="item.title" :to="item.link">
      {{ item.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItem: [
        {
          title: 'home',
          action: 'mdi-view-dashboard',
          link: '/'
        },
        {
          title: 'articles',
          action: 'mdi-view-dashboard',
          link: '/pro'
        }
      ]
    };
  }
};
</script>
