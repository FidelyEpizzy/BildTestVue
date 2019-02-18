<template>
  <div class="conainer-fluid appFooter">
    <div class="container">
      <div class="row">
          <div class="col-7">
          <h3>ARE YOU READY TO BE BLOWN AWAY?</h3>
          </div>
          <div class="col-5" id="buttonFooterSection">
              <button type="button" class="buttonFooter"> CLICK HERE TO FIND OUT</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.container {
    max-width: 970px;
}
.appFooter {
    background-color:black; 
}
h3 {
    color: white;
}
#buttonFooterSection{
    display:flex;
    justify-content: flex-end;
}
.buttonFooter {
    background-color: rgb(8, 250, 149);
    border:none;
   
}
</style>
