<template>
  <div id="app" ref="app">
    <Fullscreen @handFullscreen="handFullscreen" :text="text" />
    <router-view></router-view>
  </div>
</template>

<script>
import Fullscreen from "./components/Fullscreen.vue";

export default {
  name: "app",
  components: {
    Fullscreen,
  },
  data() {
    return {
      text: "全屏",
    };
  },
  methods: {
    handFullscreen() {
      let fullscreen = this.$refs.app;
      if (!document.fullscreenElement) {
        fullscreen.requestFullscreen();
        this.text = "退出全屏";
      } else {
        document.exitFullscreen();
        this.text = "全屏";
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app:fullscreen {
  background-color: yellow;
}
html {
  box-sizing: border-box
}
*, *::before, *::after {
  box-sizing: inherit
}
</style>


