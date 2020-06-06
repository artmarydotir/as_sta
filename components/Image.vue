<template>
  <!-- this component is not ready do not use this-->
  <div>
    <img
      :src="imageRequired"
      :srcset="imageRequired.srcSet"
      class="lazyload"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    // eslint-disable-next-line vue/require-prop-types
    imageurl: {
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    srcset: {
      type: String
    },
    alt: {
      type: String,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    classes: {
      type: String
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imageRequired() {
      return require(`~/assets/images/blog/${this.imageurl}`);
    },
    // imageSet() {
    //   return require('~/assets/images/' + this.srcset);
    // },
    // imageRequired() {

    //   return require('images/blog/aurora.jpg');
    //   return require(`~assets/images/${this.imageURL}`);
    // },
    isRounded() {
      return this.rounded ? 'image-placeholder--rounded' : '';
    }
  }
};
</script>

<style scoped lang="scss">
.image-placeholder {
  overflow: hidden;
  line-height: 0;

  &--rounded {
    border-radius: 100%;
  }
}

img {
  transition: all ease 0.3s;
  opacity: 0;

  &[lazy='loading'] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy='loaded'] {
    opacity: 1;
  }
}
</style>
