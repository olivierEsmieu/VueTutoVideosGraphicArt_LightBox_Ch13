class LightboxStore {
  constructor() {
    this.state = {
      images: [],
      index: false
    };
  }
  addImage(url) {
    return this.state.images.push(url) - 1;
  }
  remove(url) {
    this.state.images = this.state.images.filter(image => image !== url);
  }
  open(url) {
    this.state.index = this.state.images.findIndex(image => image === url);
  }
  close() {
    this.state.index = false;
  }
  next() {
    this.state.index++; //[a,b] 1 => 2
    if (this.state.index >= this.state.images.length) {
      // [a,b] 2 >= 2
      this.state.index = 0;
    }
  }
  prev() {
    this.state.index--; //[a,b] 1 => 2
    if (this.state.index < 0) {
      // [a,b] 2 >= 2
      this.state.index = this.state.images.length - 1;
    }
  }
}
export default new LightboxStore();
