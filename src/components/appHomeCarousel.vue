<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 carouselHeading">
          <h4>A couple of our featured projects</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia autem excepturi esse ab nemo quaerat quas, beatae ad praesentium, adipisci saepe doloribus voluptate eius. Repellat quod tempore porro modi. Error?</p>
        </div>
      </div>
    </div>
    <div class="img-carousel">
      <slick ref="slick" id="img-carousel" :options="slickOptions">
        <img src="https://i.imgur.com/zENEKl0.png" alt="landscape">
        <img src="https://i.imgur.com/8SPAekX.png" alt="darkit">
        <img src="https://i.imgur.com/WFs2EpX.png" alt="hug">
        <img src="https://i.imgur.com/Ai437o4.png" alt="plez">
        <img src="https://i.imgur.com/NobXWbq.png" alt="apps">
        <img src="https://i.imgur.com/TQgkicD.png" alt="jesus">
      </slick>
    </div>
    <div class="container carouselTextContainer">
      <div class="col-2">
      
      </div>
      <div class="text-carousel">
        <slick ref="slick" id="text-carousel" class="offset-2 col-8" :options="slickOptions1">
          <div>
            <h4>Dark UI KIT Freebie</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quia amet vero impedit, reprehenderit optio sint eos saepe sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tempore dolorem in fuga recusandae alias maxime fugit nihil quos repellat?</p>
          </div>
          <div>
            <h4>1</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quia amet vero impedit, reprehenderit optio sint eos saepe sit accusantium.</p>
          </div>
          <div>
            <h4>2</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quia amet vero impedit, reprehenderit optio sint eos saepe sit accusantium.</p>
          </div>
          <div>
            <h4>3</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quia amet vero impedit, reprehenderit optio sint eos saepe sit accusantium.</p>
          </div>
          <div>
            <h4>4</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quia amet vero impedit, reprehenderit optio sint eos saepe sit accusantium.</p>
          </div>
          <div>
            <h4>5</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quia amet vero impedit, reprehenderit optio sint eos saepe sit accusantium.</p>
          </div>
        </slick>
      </div>
     
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
import "../slick.css";

export default {
  components: { Slick },
  data() {
    return {
      slickOptions: {
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: "#text-carousel"
      },
      slickOptions1: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: "#img-carousel"
      }
    };
  }
};
</script>

<style>
.carouselHeading {
  text-align: center;
  margin-bottom: 1em;
}
.carouselTextContainer {
  
  
}
</style>
