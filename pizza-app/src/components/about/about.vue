<template>
  <div>
    <div class="row mb-5 ">
    <div class="col-4">
      <div class="list-group mb-3">
        <router-link tag="li" class="nav-link" :to="{name:'contact'}">
          <a class="list-group-item list-group-item-action">联系我们</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'history'}">
          <a class="list-group-item list-group-item-action">历史订单</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'kuaidi'}">
          <a class="list-group-item list-group-item-action">快递信息</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'order'}">
          <a class="list-group-item list-group-item-action">订餐文档</a>
        </router-link>
      </div>
    </div>
    <div class="col-8" >
      <router-view></router-view>
    </div>

    </div>
  </div>
</template>
