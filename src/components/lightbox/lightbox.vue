<style src="./lightbox.scss" lang="scss"></style>
<template>
  <div class="lightbox" v-if="image" @click="close">
    <transition :name="transition">
      <lightbox-image :imageSelected="image" :key="image"></lightbox-image>
    </transition>
    <div class="lightbox__close" @click="close"></div>
    <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev"></div>
    <div class="lightbox__btn lightbox__next" @click.stop.prevent="next"></div>
  </div>
</template>

<script>
import "./lightboxDirective.js";
import store from "./lightboxStore.js";
import lightboxImage from "./lightboxImage";
export default {
  data() {
    return {
      state: store.state,
      direction: "next"
    };
  },
  computed: {
    image() {
      if (this.state.index !== false) {
        return this.state.images[this.state.index];
      }
    },
    transition() {
      return "lightbox-" + this.direction;
    }
  },
  components: {
    lightboxImage
  },
  methods: {
    close() {
      store.close();
    },
    next() {
      this.direction = "next";
      store.next();
    },
    prev() {
      this.direction = "prev";
      store.prev();
    }
  }
  /*
  mounted() {
    window.addEventListener("closeImage", () => {
      this.state.index = false;
    });
  }
  */
};
</script>
