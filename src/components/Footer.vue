<template>
  
    <div class="container-fluid" id="appFooterOne">
      <div class="container" id="appFooterOneContainer">
        <div class="row" id="appFooterOneRow">
          <div class="col-12 col-lg-8">
            <h3>ARE YOU READY TO BE BLOWN AWAY?</h3>
          </div>
          <div class="col-12 col-lg-4 appFooterButton">
            <app-button></app-button>
          </div>
        </div>
      
        <div class="row">
           
        </div>
        </div>
      </div>
   
    
</template>

<script>
import ButtonClickHere from "./ButtonClickHere.vue";
export default {
  components: {
    appButton: ButtonClickHere
  }
};
</script>

<style>
#appFooterOne {
  background-color: #322f2f;
 
 
}
#appFooterOneContainer {
  max-width: 970px;
  color: white;
   padding-top:0;
 
}
.appFooterButton {
  display: flex;
  justify-content: flex-end;
}

#appFooterOneRow {
 padding-top:3.1em;
 padding-bottom:3.1em;
}
#appFooterOneRow h3 {
  font-size: 1.6rem;
}
</style>
