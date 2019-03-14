<template>
  <div class="container-fluid" id="appFooterTwo">
    <div class="container" id="appFooterTwoContainer">
      <div class="row" id="appFooterTwoRow">
        <div class="col-6">
          <p>COPYRIGHT 2013 DISPLAY. ALL RIGHTS RESERVED</p>
        </div>
        <div class="col-6 appFooterNavigation">
          <router-link
            v-for="router in navMenu"
            :to="router.path"
            class="app-menu"
            id
            exact
            :key="router"
          >{{ router.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    navMenu() {
      return this.$store.getters.navMenuGetter;
    }
  }
};
</script>

<style>
#appFooterTwo .app-menu {
  text-decoration: none;
  background-color: #efefef;
  font-size: 0.7rem;
  font-family: "Novecento sans wide Light";
  color: #b5b5b5;
}
#appFooterTwo {
  background-color: #efefef;
  font-size: 0.7rem;
  font-family: "Novecento sans wide Light";
  color: #b5b5b5;
}
#appFooterTwoContainer {
  padding-top: 0;
  max-width: 970px;
}
#appFooterTwoRow {
  align-content: center;
  margin-top: 2em;
  margin-bottom: 0.5em;
}
.appFooterNavigation {
  display: flex;
  justify-content: flex-end;
}
.app-menu a {
  text-decoration: none;
}
</style>
