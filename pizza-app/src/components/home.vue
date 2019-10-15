<template>
  <div  class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎来到pizza</h1>
        <h2>这里有你喜欢的pizza</h2>
        <button @click="tiao" class="btn btn-success">跳转</button>
      </div>
    </div>

  </div>

</template>
<script>
  export default{
   methods:{
     tiao(){
//       this.$router.go(-1)
       //跳转上一页
//       this.$router.replace('/ad')
//       调到指定的地址
//       this.$router.replace({name:'ad'})
//       调到指定的地址用路由名字
//       this.$router.push('/ad')
       this.$router.push({name:'ad'})
       //通过push跳转
     }
   }
  }
</script>
<style>
  #home{
    background: url("../../src/assets/2.png");
    height: 85vh;
    padding: 10%;
  }
  h1,h2{
    margin: 6%;
  }
  .background{
    background: #ccc;
    margin:0 auto;
    max-width: 70vw;
    opacity: 0.8;
    padding: 20px 0;
  }
</style>
