<template>
  <div id="app">
    <div v-if="title == 'color'">
      <a :href="'https://picsum.photos/600/800/?image=' + n" v-lightbox v-for="n in 9" :key="n">
        <img :src="'https://picsum.photos/150/150/?image=' + n">
      </a>
      <lightbox></lightbox>
    </div>

    <section>
      <!-- pour le unbind -->
      <div v-if="title == 'grey'">
        <a :href="'https://picsum.photos/g/600/800/?image=' + n" v-lightbox v-for="n in 9" :key="n">
          <img :src="'https://picsum.photos/g/150/150/?image=' + n">
        </a>
        <lightbox></lightbox>
      </div>
    </section>

    <button @click="title='color'">Color</button>
    <button @click="title='grey'">Grey</button>
  </div>
</template>

<script>
import lightbox from "./components/lightbox/lightbox";
export default {
  data() {
    return {
      title: "color"
    };
  },
  name: "App",
  components: { lightbox }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
