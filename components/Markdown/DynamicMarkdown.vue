<script lang="js">

export default {
  props: {
    renderFunc: {
      type: String,
      default: ''
    },
    staticRenderFuncs: {
      type: String,
      required: true,
    }
  },
    created () {
      // eslint-disable-next-line no-eval
      this.templateRender = eval(this.renderFunc)
      // eslint-disable-next-line no-eval
      this.$options.staticRenderFns = eval(this.staticRenderFuncs)
    },
    /* note:
      static Render Functions are used to optimize the render process by
      essentially caching parts of the DOM tree that are static and therefore
      can’t change. When you call the render function that was generated along with them,
      it will call these functions to get those static parts.
      So there’s no sensible way to call or update them during runtime,
      they have to be present on the component as a prop with that name
      and will be called by the render function when needed.
      */
    render (createElement) {
      return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
    }
}
</script>
