<template>
  <div class="iframe_container">
    <div
      class="iframe_border"
      :style="{ backgroundImage: 'url(\'' + posterUrl + '\')' }"
    >
      <div v-show="close" class="button_child" @click="iframeShow">
        <span>
          Play
        </span>
      </div>
      <client-only>
        <div>
          <iframe
            v-show="btnShow"
            ref="myVideoEl"
            class="lazyload"
            :src="isValidUrl"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IframeComponent',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    aparat: {
      required: true,
      default: 'a'
    },
    youtube: {
      type: String,
      default: 'a'
    },
    poster: {
      type: String,
      default: 'a'
    }
  },
  data() {
    return {
      i: false,
      btnShow: false,
      close: true,
      mutateSrc: this.aparat
    };
  },
  computed: {
    isValidUrl() {
      const string = this.aparat;
      let url;
      try {
        url = new URL(string);
        console.log('im valid url');
      } catch (_) {
        alert('Enter valid url for video');
        return false;
      }
      return url;
    },
    posterUrl() {
      const bg = this.poster;
      return require(`../assets/${bg}`);
    }
  },
  methods: {
    showAparat() {
      const aaa = this.$refs.myVideoEl;
      // console.log(aaa.attributes.src);
      const srcif = aaa.attributes.src.nodeValue;
      console.log(srcif);
      this.mutateSrc = `${srcif}?autoplay=1`;
      this.i = true;
      console.log(this.mutateSrc);
    },
    iframeShow() {
      this.btnShow = true;
      this.close = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.iframe_container {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  .iframe_border {
    background-size: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: saturation;
    border: 10px solid rgb(230, 101, 101);
    width: 60%;
    height: 460px;
  }
}
.button_child {
  padding-top: 15%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 120px;
    height: 60px;
    text-align: center;
    display: inline-block;
    background-color: rgb(204, 152, 84);
    padding: 12px;
    color: #fff;
    cursor: pointer;
  }
}
iframe {
  width: 100%;
  height: 440px;
  border: none;
}
</style>
