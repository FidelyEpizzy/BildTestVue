<template>
  <div>
    <div class="container-fluid" id="appPopupVideoContainerFluid">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img :src="appThumbnail" @click="show()" class="img-fluid thumbnail">
            <modal name="hello-world" class="popup">
                <iframe width="550" height="300" src="https://www.youtube.com/embed/lzeNBRbWXpI?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
                 <font-awesome-icon icon="times-circle" class="x" @click="hide()"></font-awesome-icon> 
            </modal>
          </div>
          <div class="col-8">
            <h4>Get to know us a little better</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, esse ex necessitatibus, nisi accusamus facilis nam non incidunt, quod reiciendis itaque. Reiciendis a dignissimos nemo molestiae similique natus! Quasi saepe sed delectus cupiditate consequuntur qui maxime repellendus, nulla vero repudiandae? Possimus nam laborum, explicabo natus quis sunt eius id sint. Iusto, minus et delectus ipsum consectetur quos numquam! Accusantium, aperiam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quo fugiat quae officia eius a.</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appThumbnail from "@/assets/getTo.png";
export default {
  data() {
    return {
      appThumbnail: appThumbnail
    };
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<style>
.thumbnail {
    cursor: pointer;
}
#appPopupVideoContainerFluid {
  background-color: #efefef;
  padding-bottom: 1em;
}
.x {
    font-size: 30px;
    color:white;
    margin-left:10px;
    position: absolute;
    cursor: pointer;
}
.x:hover {
    color: grey;
}
.v--modal {
   background: transparent !important;
   box-shadow: 0 0 0 0 !important;
}
</style>
