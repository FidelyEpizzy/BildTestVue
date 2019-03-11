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
    <div class="container-fluid">
      <div class="row">
        <slick ref="slick">
          <img src="https://i.imgur.com/zENEKl0.png" alt="landscape">
          <img src="https://i.imgur.com/8SPAekX.png" alt="darkit">
          <img src="https://i.imgur.com/WFs2EpX.png" alt="hug">
          <img src="https://i.imgur.com/Ai437o4.png" alt="plez">
          <img src="https://i.imgur.com/NobXWbq.png" alt="apps">
          <img src="https://i.imgur.com/TQgkicD.png" alt="jesus">
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.carouselHeading {
  text-align: center;
}
</style>
