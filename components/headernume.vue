<template>
  <div class="headernume">
    <div class="hometop" :class="isshow?'bgcolor':''">
      <div class="homelogo">
        <h3>晒の冷</h3>
      </div>
      <div class="homenume">
        <ul>
          <li>首页</li>
          <li>分类</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'headernume',
  data(){
    return{
      isshow:false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop);
  },
  methods:{
    scrollToTop() {
      let that = this;
      let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (scrollY > 70) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.headernume {
  .hometop {
    height: 64px;
    position: fixed;
    top: 0;
    line-height: 64px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    .homelogo {
      padding-left: 60px;
    }
    .homenume {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          cursor: pointer;
          padding: 0 18px;
        }
      }
    }
  }
  .bgcolor{
    background-image: linear-gradient(to right, #b813af 0%, #0f9d58 100%);
  }
}
</style>
