<template>
  <div>
    <header-test></header-test>
    <div class="content"></div>

    <app-footer class="footer"></app-footer>
  </div>
</template>

<script>
import "../public/fonts.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    headerTest: Header,
    appFooter: Footer
  }
};
</script>

<style scoped >
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height:120px;
}
.container {
  max-width: 970px;
}
</style>
