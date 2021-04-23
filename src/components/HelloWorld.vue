<template>
  <div class="hello">
    <input type="text" v-model="input" />
    <div id="fullscreen" ref="fullscreen">
      <button ref="a" id="button" @click="handbut">Toggle Fullscreen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      input: "这是一段文字",
    };
  },
  created() {
    this.input = "这不是一段文字";
  },
  methods: {
    handbut() {
      let fullscreen = this.$refs.fullscreen;
      
      if (!document.fullscreenElement) {
        fullscreen.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      // console.log()
      this.input = "这是文字吗";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fullscreen:fullscreen {
  background-color: yellow;
}

input:checked + label span.number::before {
  animation-play-state: running;
}
</style>
