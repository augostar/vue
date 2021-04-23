<template>
  <div id="fullscreen" ref="fullscreen">
    <button  id="button" @click="handbut">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "Fullscreen",
  props:["text"],
  data(){
      return{
        // text:"全屏"
      }
  },
  methods: {
    handbut() {
       this.$emit("handFullscreen");
    },
  },
};
</script>

<style  scoped>
button{
    width: 80px;
    height: 30px;
    line-height: 30px;
    border: 1px solid transparent;
    border-bottom: 1px solid #000;
    box-shadow: 1px 1px 1px;
    font-size: 12px;
    background: #000;
    color: #fff;
    border-radius: 0;
    margin-top: -3px;
     transition-delay: 5s;
}
</style>