<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <img :src="headerLogo" alt="">
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
    </div>
</template>

<script>
import logo from "@/assets/Logo.svg"
import facebook from "@/assets/Facebook.svg"
import rss from "@/assets/rss.svg"
import twitter from "@/assets/Twitter.svg"
import googlep from "@/assets/googlep.svg"
import pinterest from "@/assets/pinterest.svg"
import dribble from "@/assets/dribbble.svg"


export default {
    data() {
        return {
         headerLogo : logo ,
         mediaFacebook: facebook,
         mediaRss: rss,
         mediaTwitter: twitter,
         mediaGooglep: googlep,
         mediaPinterest: pinterest,
         mediaDribble : dribble
         
        }
    }

}
</script>

<style >
.container {
    padding-top:1.8em;
   
  
}
#mediaContainer {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
#mediaContainer img {
    padding-left:0.55em;
}
#horizontalLine {
    margin-top:0.9em;
}
</style>
