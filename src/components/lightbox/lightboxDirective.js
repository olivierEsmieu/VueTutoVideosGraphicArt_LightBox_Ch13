import Vue from "vue";
import store from "./lightboxStore.js";

Vue.directive("lightbox", {
  bind(el) {
    //  console.log("binding");
    store.addImage(el.getAttribute("href"));
    el.addEventListener("click", function(e) {
      e.preventDefault();
      store.open(el.getAttribute("href"));
    });
  },
  unbind(el) {
    //console.log("unbinding");
    store.remove(el.getAttribute("href"));
  }
});
