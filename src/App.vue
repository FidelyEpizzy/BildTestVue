<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-12">
        <quote-quote>
          <h2 slot="title">{{quoteTittle}}</h2>
          <p>A wonderful quote</p>
        </quote-quote>
      </div>
    </div>
  </div> -->
  <div>
 <header-test></header-test>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Header from "./components/Header.vue"

export default {
  components: {
    "header-test": Header
  }

  // data: function(){
  //   return {
  //     quoteTittle : 'The Quote'
  //   }
  // },
  // components: {
  //   "quote-quote": Quote
  // }
};
</script>

<style >
.container {
  max-width: 970px;
}

</style>
