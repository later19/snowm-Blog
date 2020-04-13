<template>
  <div class="container">
    <div class="homevideo">
      <video muted autoplay loop src="../static/001.webm"></video>
    </div>
    <headernume />
    <weather />
    <div class="cartoon"> {{str2}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      str: '上古结绳而治,后世圣人易之以书契。千年来，数据始终影响着人们的生活。人类一直在探索，大数据时代来临之时使用何种工具用于改变用户利用数据的方式。',
      i: 0,
      timer: 0,
      str2: '',
    };
  },
  mounted() {
    this.typing();
  },
  methods: {
    typing() {
      if (this.i <= this.str.length) {
        this.str2 = this.str.slice(0, this.i++) + '|';
        this.timer = setTimeout(() => {
          this.typing();
        }, 200);
      } else {
        clearTimeout(this.timer);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .homevideo {
    height: 100%;
    width: 100%;
    video {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      // height: auto;
    }
  }
  .weather{
    position: absolute;
    top:100px;
    left: 36px;
    z-index: 99;
  }
  .cartoon{
    height: 50px;
  }
}
</style>
