<template>
  <div id="app">
    <TheNarbar/>
    <div id="test">
      <TheHeader/>
      <TheContent/>
    </div>

  </div>
</template>
<script>
//B1: Import component
import TheNarbar from "./components/layout/TheNavbar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";

export default {
  name: "App",
  components: {
    TheNarbar,
    TheHeader,
    TheContent,
  },
};
</script>

<style>
#app {
  display: flex;
}
#test {
  width: 100%;
}
@import url("style/style.css");
</style>
