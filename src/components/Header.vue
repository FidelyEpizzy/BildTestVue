<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img :src="headerLogo" alt>
      </div>
      <div class="col-6" id="mediaContainer">
        <img :src="mediaFacebook" alt="visit-our-facebook">
        <img :src="mediaTwitter" alt="visit-our-twitter">
        <img :src="mediaGooglep" alt="visit-our-googlep">
        <img :src="mediaRss" alt="visit-our-rss">
        <img :src="mediaPinterest" alt="visit-our-pinterest">
        <img :src="mediaDribble" alt="visit-our-dribble">
      </div>
    </div>
    <div class="row">
      <div class="col-12" id="horizontalLine">
        <hr>
      </div>
    </div>
    <div class="row" id="menu-box">
        <div class="col-12">
        <a class="app-menu" href="">HOME</a>
        <a class="app-menu" href="">ABOUT</a>
        <a class="app-menu" href="">WORK</a>
        <a class="app-menu" href="">CONTACT</a>
        </div>
    </div>
  </div>
</template>

<script>

import logo from "@/assets/Logo.svg";
import facebook from "@/assets/Facebook.svg";
import rss from "@/assets/rss.svg";
import twitter from "@/assets/Twitter.svg";
import googlep from "@/assets/googlep.svg";
import pinterest from "@/assets/pinterest.svg";
import dribble from "@/assets/dribbble.svg"


export default {
  data() {
    return {
      headerLogo: logo,
      mediaFacebook: facebook,
      mediaRss: rss,
      mediaTwitter: twitter,
      mediaGooglep: googlep,
      mediaPinterest: pinterest,
      mediaDribble: dribble
    };
  }
};
</script>

<style >
.container {
  padding-top: 1.8em;
}
#mediaContainer {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
#mediaContainer img {
  padding-left: 0.55em;
}
#horizontalLine {
  margin-top: 0.9em;
}
#menu-box {
    margin-top: 0.3em;
}
#menu-box a {
 text-decoration: none;
 color : #7f7f7f;
 font-family: 'Novecento sans wide Light';
 font-size: 1.20rem;
}
.app-menu {
 margin-right:1.15em;
 
}


</style>
