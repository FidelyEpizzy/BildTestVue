<template>
  <div>
    <div class="container-fluid" id="appAboutTabsFluid">
      <div class="container" id="appAboutTabsContainer">
        <div class="row">
          <div class="col-md-3 appTabDiv"  @click="valueText='0'" :valueText="valueText" >
            <img :src="appWebsites" class="img-fluid">
          </div>
          <div class="col-md-3 appTabDiv" >
            <img :src="appPhotography" class="img-fluid">
          </div>
          <div class="col-md-3 appTabDiv">
            <img :src="appSeo" class="img-fluid">
          </div>
          <div class="col-md-3 appTabDiv" >
            <img :src="appApplications" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="appAboutTabTextContainer">
      <div class="row">
          <div class="col-12">
        <app-text ></app-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appAboutTabsText from "./appAboutTabsText.vue";
import websites from "@/assets/websites.png";
import photography from "@/assets/photography.png";
import seo from "@/assets/icon3.png";
import applications from "@/assets/icon4.png";

export default {
  data() {
    return {
      appWebsites: websites,
      appPhotography: photography,
      appSeo: seo,
      appApplications: applications,
      valueText:'0'
     
     
    };
  },
    components: {
         appText: appAboutTabsText
    }
};
</script>

<style>
#appAboutTabsFluid {
  background-color: #efefef;
  padding: 0;
}
.appTabDiv {
  display: flex;
  justify-content: center;
  padding-top: 3em;
  padding-bottom: 3em;
}
#appAboutTabsContainer {
  max-width: 970px;
  padding-top: 0;
}
#appAboutTabTextContainer {
    max-width:970px;
}
.appTabDiv:hover {
  background-color: #dadada;
  cursor: pointer;
}
</style>
