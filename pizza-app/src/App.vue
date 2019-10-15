<template>
  <div id="app">
    <div class="container"><head1></head1></div>
    <div class="container">
      <router-view></router-view>
    </div>


<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-4">
      <router-view name="history"></router-view>
    </div>
    <div class="col-sm-12 col-md-4">
      <router-view name="order"></router-view>
    </div>
    <div class="col-sm-12 col-md-4">
      <router-view name="kuaidi"></router-view>
    </div>
  </div>
</div>
  </div>
</template>

<script>

  import header from './components/header.vue'

  export default{
    components:
    {
      'head1':header
    }

  }
</script>

<style>

</style>
