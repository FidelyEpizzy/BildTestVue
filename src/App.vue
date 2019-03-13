<template>
  <div>
    <header-test></header-test>
    
    <div class="content">
      
     <router-view>
       
     </router-view>
    </div>
    <app-footer class="footer"></app-footer>
    <app-footer-two class="footer"></app-footer-two>
  </div>
</template>

<script>
import "../public/fonts.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AppFooterTwo from "./components/AppFooterTwo.vue";




export default {
  components: {
    headerTest: Header,
    appFooter: Footer,
    appFooterTwo: AppFooterTwo,
    
  },
  
};
</script>

<style scoped>
.container {
  max-width: 970px;
}

.content {
  min-height: calc(100vh - 350px);
}
.footer {
  display: flex;
  align-content: center;
}

</style>
