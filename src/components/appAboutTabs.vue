<template>
  <div>
    <div class="container-fluid" id="appAboutTabsFluid">
      <div class="container" id="appAboutTabsContainer">
        <div class="row">
          <div
            class="col-md-3 appTabDiv"
            @click="selectTab(1)"
            :class="{TabActive :currentTab == 1}"
          >
            <img :src="appWebsites" class="img-fluid">
          </div>
          <div class="col-md-3 appTabDiv" @click="selectTab(2)" :class="{TabActive :currentTab == 2}">
            <img :src="appPhotography" class="img-fluid">
          </div>
          <div class="col-md-3 appTabDiv" @click="selectTab(3)" :class="{TabActive :currentTab == 3}">
            <img :src="appSeo" class="img-fluid">
          </div>
          <div class="col-md-3 appTabDiv" @click="selectTab(4)" :class="{TabActive :currentTab == 4}">
            <img :src="appApplications" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="appAboutTabTextContainer">
      <div class="row">
        <div class="col-12">
          <div v-if="currentTab == 1">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aut aliquid ratione doloremque placeat, ipsam soluta expedita. Ad porro a dicta impedit aliquid eius dolorem facilis, minima ipsum natus quis aut nobis nihil necessitatibus saepe quisquam vero, ipsam dolores perspiciatis at culpa facere. Distinctio, illum voluptates? Placeat soluta aut tempora aliquam, culpa distinctio ab facere nemo esse unde, ipsum atque?</p>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam debitis provident nulla illo assumenda.</li>
            </ul>
          </div>
          <div v-if="currentTab == 2">
            <p>Lorem ipsum dolor sit amet consectetur, dolor sit amet consectetur, adipisicing elit. Porro aut aliquid ratione doloremque placeat ,adipisicing elit. Porro aut aliquid ratione doloremque placeat, ipsam soluta expedita. Ad porro a dicta impedit aliquid eius dolorem facilis, minima ipsum natus quis aut nobis nihil necessitatibus saepe quisquam vero, ipsam dolores perspiciatis at culpa facere. Distinctio, illum voluptates? Placeat soluta aut tempora aliquam, culpa distinctio ab facere nemo esse unde, ipsum atque?</p>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam debitis provident nulla illo assumenda.</li>
            </ul>
          </div>
          <div v-if="currentTab == 3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aut aliquid ratione doloremque placeat, ipsam soluta expedita. Ad porro a dicta impedit aliquid eius dolorem facilis, minima ipsum natus quis aut nobis nihil necessitatibus saepe quisquam vero, ipsam dolores perspiciatis at culpa facere. Distinctio, illum voluptates? Placeat soluta aut tempora aliquam, culpa distinctio ab facere nemo esse unde, ipsum atque?</p>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam debitis provident nulla illo assumenda.</li>
            </ul>
          </div>
          <div v-if="currentTab == 4">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aut aliquid ratione doloremque placeat, ipsam soluta expedita. Ad porro a dicta impedit aliquid eius dolorem facilis, minima ipsum natus quis aut nobis nihil necessitatibus saepe quisquam vero, ipsam dolores perspiciatis at culpa facere. Distinctio, illum voluptates? Placeat soluta aut tempora aliquam, culpa distinctio ab facere nemo esse unde, ipsum atque?</p>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam debitis provident nulla illo assumenda.</li>
            </ul>
          </div>
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
      currentTab: 1
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    }
  },
  components: {
    appText: appAboutTabsText
  }
};
</script>

<style>
#appAboutTabTextContainer {
  margin-top: 1em;
  margin-bottom: 2em;

}
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
  max-width: 970px;
}
.appTabDiv:hover {
  background-color: #dadada;
  cursor: pointer;
}
.TabActive {
  background-color: #dadada;
}
</style>
