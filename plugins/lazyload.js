import Vue from 'vue';
import Lazylazy from 'vue-lazyload';

Vue.use(Lazylazy, {
  lazyComponent: true,
  preLoad: 1.3
});
