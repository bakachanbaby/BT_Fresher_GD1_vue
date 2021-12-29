<template>
  <div class="navbar">
    <!-- Narbar logo -->
    <div class="m-logo-box">
      <div class="m-logo-page"></div>
      <div class="m-text">MISA QLTS</div>
    </div>
    <!-- Narbar content -->
    <div class="m-navbar-box">
      <router-link class="m-menu-item" to="/overview">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-overview"></div>
          <div class="m-menu-item-text">Tổng quan</div>
        </div>
      </router-link>
      <router-link class="m-menu-item" to="/asset">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-asset"></div>
          <div class="m-menu-item-text">Tài sản</div>
        </div>
        <div class="m-menu-item-r">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
      <router-link class="m-menu-item" to="/asset-htdb">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-asset-htdb"></div>
          <div class="m-menu-item-text">Tài sản HT-ĐB</div>
        </div>
        <div class="m-menu-item-r">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
      <router-link class="m-menu-item" to="/tools">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-tools"></div>
          <div class="m-menu-item-text">Công cụ dụng cụ</div>
        </div>
        <div class="m-menu-item-r">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
      <router-link class="m-menu-item" to="/category">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-category"></div>
          <div class="m-menu-item-text">Danh mục</div>
        </div>
      </router-link>
      <router-link class="m-menu-item" to="/search">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-search"></div>
          <div class="m-menu-item-text">Tra cứu</div>
        </div>
        <div class="m-menu-item-r">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
      <router-link class="m-menu-item" to="/report">
        <div class="m-menu-item-l">
          <div class="m-menu-item-icon i-report"></div>
          <div class="m-menu-item-text">Báo cáo</div>
        </div>
        <div class="m-menu-item-r">
          <div class="m-menu-item-downicon"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>