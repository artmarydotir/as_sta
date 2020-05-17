<template>
  <select v-model="selected" class="lang-switcher" @change="changeLocale()">
    <option :value="selected" selected>{{ $i18n.locale }}</option>
    <option v-for="locale in $i18n.locales" :key="locale.code">
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
    }
  },
  methods: {
    changeLocale() {
      this.$router.push(this.switchLocalePath(this.selected))
    }
  }
}
</script>
