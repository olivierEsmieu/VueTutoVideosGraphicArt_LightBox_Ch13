<template>
  <div @click.stop>
    <div v-if="loading" class="lightbox__loading"></div>
    <transition name="lightbox-fade">
      <img :src="imageSelected" class="lightbox__image" :style="style" :key="src">
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      src: false,
      style: {}
    };
  },
  props: {
    imageSelected: String
  },
  methods: {
    resizeImage(image) {
      let width = image.width;
      let height = image.height;
      if (width > window.innerWidth || height > window.innerHeight) {
        let ratio = width / height;
        let windowRatio = window.innerWidth / window.innerHeight;
        if (ratio > windowRatio) {
          width = window.innerWidth;
          height = width / ratio;
        } else {
          height = window.innerHeight;
          width = height * ratio;
        }
      }
      this.style = {
        width: width + "px",
        height: height + "px",
        top: (window.innerHeight - height) / 2 + "px",
        left: (window.innerWidth - width) / 2 + "px"
      };
    }
  },
  mounted() {
    // console.log('innerwidth',window.innerWidth,'innerheight',window.innerHeight);
    let image = new window.Image();
    image.src = this.imageSelected; // console.log("capture d imageselected", (image.src = this.imageSelected)); // js a alors capturé les dimensions de l'image
    image.onload = _ => {
      //console.log("imageSelected.width", image.width);
      this.loading = false;
      this.resizeImage(image);
    };
    this.resizeEvent = () => {
      //console.log("resize");
      this.resizeImage(image);
    };
    window.addEventListener("resize", this.resizeEvent);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  }
};
</script>