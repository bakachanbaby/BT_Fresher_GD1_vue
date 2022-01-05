<template>
  <div class="navbar" :style="{width: show ? '250px' : '80px'}">
    <!-- Narbar logo -->
    <div class="m-logo-box">
      <div class="m-logo-page" @click='show = true'></div>
      <div class="m-text" v-if="show">MISA QLTS</div>
    </div>
    <!-- Narbar content -->
    <div class="m-navbar-box">
      <!-- Item tổng quan -->
      <router-link class="m-menu-item" to="/overview">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-overview"></div>
          <div class="m-menu-item-text" v-if="show">Tổng quan</div>
        </div>
      </router-link>
      <!-- Item tài sản -->
      <router-link class="m-menu-item" to="/asset">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-asset"></div>
          <div class="m-menu-item-text" v-if="show">Tài sản</div>
        </div>
        <div class="m-menu-item-r" v-if="show">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
      <!-- Item tài sản HT-ĐB -->
      <router-link class="m-menu-item" to="/asset-htdb">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-asset-htdb"></div>
          <div class="m-menu-item-text" v-if="show">Tài sản HT-ĐB</div>
        </div>
        <div class="m-menu-item-r" v-if="show">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
      <!-- Item công cụ dụng cụ -->
      <router-link class="m-menu-item" to="/tools">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-tools"></div>
          <div class="m-menu-item-text" v-if="show">Công cụ dụng cụ</div>
        </div>
        <div class="m-menu-item-r" v-if="show">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
      <!-- Item danh mục -->
      <router-link class="m-menu-item" to="/category">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-category"></div>
          <div class="m-menu-item-text" v-if="show">Danh mục</div>
        </div>
      </router-link>
      <!-- Item tra cứu -->
      <router-link class="m-menu-item" to="/search">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-search"></div>
          <div class="m-menu-item-text" v-if="show">Tra cứu</div>
        </div>
        <div class="m-menu-item-r" v-if="show">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
      <!-- Item báo cáo -->
      <router-link class="m-menu-item" to="/report">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-report"></div>
          <div class="m-menu-item-text" v-if="show">Báo cáo</div>
        </div>
        <div class="m-menu-item-r" v-if="show">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
          <!-- Narbar footer -->
      <div class="m-menu-footer">
        <div class="m-menu-dash" :style="{width: show ? '25.5vh' : '9.5vh'}"></div>
      <div class="m-menu-btn-show btn-hide" v-if="show" @click="show = false"></div>
      <div class="m-menu-btn-show btn-show" v-if="!show" @click="show = true"></div>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      show:true,
    }
  },
}
</script>