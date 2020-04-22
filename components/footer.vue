<template>
  <div class="footer">
      <div class="footer-main"> 
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name:'footer',
  data(){
    return{
      isshow:false
    };
  },
  mounted() {
  },
  methods:{
  }
};
</script>

<style lang="scss" scoped>
.footer {   
    width: 100%;
    .footer-main{
        width: 1200px;
        margin: 0 auto;
    }

}
</style>
