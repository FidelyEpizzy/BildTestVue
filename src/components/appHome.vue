<template>
  <div>
    <div class="container-fluid" id="appHomeContainerFluid">
      <div class="container">
        <div class="row">
          <div class="devices">
            <img :src="devices">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="offset-1 col-9 devicesText">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores, rerum aperiam ea est enim necessitatibus provident repudiandae dolores ab iste explicabo vitae debitis aliquam corrupti laboriosam quos, sequi facere?</p>
          <router-link to="/work"><app-button appButtonValue="Browse portfolio"></app-button></router-link>
        </div>
      </div>
    </div>
    <app-popup-video></app-popup-video>
    <app-home-carousel></app-home-carousel>
  </div>
</template>

<script>
import button from "./ButtonClickHere.vue"
import devices from "@/assets/uredjaji.png";
import appPopupVideo from "./appPopupVideo.vue";
import appHomeCarousel from "./appHomeCarousel.vue";
export default {
  data() {
    return {
      devices: devices
    };
  },
  components: {
      appButton : button,
      appPopupVideo : appPopupVideo,
      appHomeCarousel : appHomeCarousel
  }
};
</script>

<style scoped>
#appHomeContainerFluid {
  background: url("../assets/Slider.png");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 1.4em;
}
.devices {
  margin-top: 6em;
  margin-bottom: -4em;
}
.devicesText {
    margin-top: 5em;
    margin-bottom: 3em;
    text-align: center;
}
</style>
