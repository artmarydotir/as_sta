<template>
  <footer>
    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="footer__copyright">
          © {{ year }} — <span v-html="$t('footer.credits')" />
        </div>
        <a href="#top" class="footer__top-page">
          ^
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>
