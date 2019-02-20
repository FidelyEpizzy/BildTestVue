<template>
  <div>
    <header-test></header-test>
    <app-title :appHeadlineValue="titleValue[0]"></app-title>
    <div class="content">
     <app-contact></app-contact>
    </div>
    <app-footer class="footer"></app-footer>
    <app-footer-two class="footer"></app-footer-two>
  </div>
</template>

<script>
import "../public/fonts.css";
import Header from "./components/Header.vue";
import AppHeaderTitle from "./components/AppHeaderTitle.vue";
import Footer from "./components/Footer.vue";
import AppFooterTwo from "./components/AppFooterTwo.vue";
import appContact from "./components/appContact.vue";

export default {
  components: {
    headerTest: Header,
    appFooter: Footer,
    appFooterTwo: AppFooterTwo,
    appTitle: AppHeaderTitle,
    appContact: appContact
  },
  data() {
    return {
      titleValue: ["Got a question or inquiry?","Check out what I can do!","About us"]
    };
  }
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
