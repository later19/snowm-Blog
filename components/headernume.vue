<template>
  <div class="headernume">
    <div class="hometop">
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
  name:'headernume'
};
</script>

<style lang="scss" scoped>
.headernume {
  .hometop {
    position: absolute;
    top: 0;
    height: 80px;
    line-height: 80px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .homelogo {
      padding-left: 60px;
    }
    .homenume {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          cursor: pointer;
          padding: 0 36px;
        }
      }
    }
  }
}
</style>
