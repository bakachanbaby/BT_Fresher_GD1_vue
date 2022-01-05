<template>
  <div id="app">
    <!-- Phần navbar -->
    <TheNavbar/>
    <div id="body">
      <!-- Phần header -->
      <TheHeader/>
      <!-- Phần content -->
      <TheContent/>
    </div>

  </div>
</template>
<script>
//B1: Import component
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheHeader,
    TheContent,
  },
};
</script>

<style>
#app {
  display: flex;
}
#body {
  width: 100%;
}
@import url("style/style.css");
</style>
