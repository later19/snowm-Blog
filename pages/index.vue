<template>
  <div class="container">
    <div>
      <div class="homevideo">
        <div class="mogle"></div>
        <!-- <video muted autoplay loop src="../static/001.webm"></video> -->
      </div>
    </div>
    <weather />
    <div class="cartoon">
      <div>{{str2}}</div>
      <div class="links">
        <a href="#container-main" ><img class="zhankai" src="~/static/zhankai .png">开始阅读</a>
        <a href="https://github.com/later19"  target="_blank"><img class="github" src="~/static/github.png">Git Hub</a>
      </div>
    </div>
      <div id="container-main">
        <div class="musiclist">
          <music />
      </div>
    </div>
  </div>
</template>
<script>
import music from '~/components/music';
export default {
  components:{
    music
  },
  data(){
    return{
      str: '人类一直在探索，大数据时代来临之时使用何种工具用于改变用户利用数据的方式。',
      i: 0,
      timer: 0,
      str2: '',
      videoUpload: {
        progress: false,
        progressPercent: 0,
        successPercent: 0,
        music: {
          title: '',
          author: '',
          url: '',
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        }
      },
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
        this.str2=this.str2.substr(0, this.str2.length - 1);
        clearTimeout(this.timer);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
  .homevideo {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../static/1.jpg')center center/cover no-repeat;
    .mogle{
      height: 100%;
      width: 100%;
      background-color: rgba(#be11a7,  0.5);
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 25px;
    color: #fabe00;
    .links{
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      a{
        font-size: 19px;
        display: inline-block;
        padding: 9px 32px;
        margin: 50px 35px;
        border-radius: 23px;
        border: 1px solid #fff;
        color: #fff;
        text-decoration: none;
        .zhankai{
          width: 11px;
          padding-right: 8px;
          vertical-align: middle;
          margin-top: -4px;
        }
        .github{
            width: 18px;
            padding-right: 8px;
            vertical-align: middle;
            margin-top: -4px;
        }
      }
      a:hover{
        background-color: salmon;
        transition: .7s ease-out;
      }
    }
  }
  #container-main{
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    min-height: 360px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .musiclist{
      // padding-top: 60px;
    }
  }
}
</style>
