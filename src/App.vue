<template>
  <div>
    <header-test></header-test>
  </div>
</template>

<script>
import '../public/fonts.css';
import Quote from "./components/Quote.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    "header-test": Header
  }
};
</script>

<style scoped >

.container {
  max-width: 970px;
}


</style>
