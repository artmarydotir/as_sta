<template>
  <div class="iframe_container">
    {{ mutateSrc }}
    <div v-if="aparat" class="button_child" @click="showAparat">
      <span>
        aparat
      </span>
    </div>
    <div
      class="iframe_border"
      :style="{ backgroundImage: 'url(\'' + posterUrl + '\')' }"
    >
      <!-- <div v-if="youtube" class="button_child">
        {{ youtube }}
        <span>
          youtube
        </span>
      </div> -->
      <client-only>
        <div>
          <iframe
            ref="myVideoEl"
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
  // data() {
  //   return {
  //     url: 'https://www.aparat.com/video/video/embed/videohash/wrvNK/vt/frame'
  //   };
  // },
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
      console.log(this.mutateSrc);
    }
  }
};
</script>
<style lang="scss" scoped>
.h_iframe-aparat_embed_frame {
  position: relative;
}
.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}
.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.iframe_container {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  .iframe_border {
    // display: flex;
    // justify-content: space-evenly;
    // align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: saturation;
    border: 10px solid rgb(230, 101, 101);
    width: 70%;
    height: 420px;
  }
}
.button_child {
  color: #fff;
  span {
    width: 30px;
    height: 30px;
    background-color: rgb(204, 152, 84);
    padding: 12px;
    color: #fff;
    cursor: pointer;
  }
}
iframe {
  width: 100%;
  height: 400px;
  border: none;
}
</style>
