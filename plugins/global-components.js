import Vue from 'vue';
import video from '~/components/video.vue';
import embedIframe from '~/components/EmbedIframe.vue';

Vue.component('GlobalComponent', video);
Vue.component('EmbedIframe', embedIframe);
