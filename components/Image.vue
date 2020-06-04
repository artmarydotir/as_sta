<template>
  <div>
    <img
      :data-src="imageurl"
      :data-srcset="srcset.srcSet"
      :class="classes"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    imageurl: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    srcset: {
      type: String
    },
    alt: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      default: 'lazyload'
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imagePath() {
      return `~/assets/images/${this.imageurl}`;
    },
    imageSet() {
      return require('~/assets/images/' + this.srcset);
    },
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
