<template>
  <select v-model="selected" class="lang-switcher" @change="changeLocale()">
    <option :value="selected" selected>{{ $i18n.locale }}</option>
    <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <option
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
    >
      {{ locale.code }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      selected: ''
    };
  },
  methods: {
    changeLocale() {
      this.$router.push(this.switchLocalePath(this.selected));
    }
  }
};
</script>
