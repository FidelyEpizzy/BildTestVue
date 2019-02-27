<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 appPic">
          <img :src="appPic" alt class="img-fluid">
        </div>
        <div
          class="col-12 col-lg-7"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga. <br><br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus cupiditate nam necessitatibus, recusandae eos deserunt nulla maiores animi nisi expedita temporibus fugit, molestiae non repellat modi pariatur ea amet quasi? Blanditiis labore quibusdam neque quod soluta omnis amet modi animi doloribus reiciendis fugiat minima qui aspernatur atque dolores earum voluptas optio, quisquam magnam odio reprehenderit, eaque libero totam repellendus. Dolorum error voluptatibus voluptatum ad. Minima, reprehenderit. Vitae, accusantium magnam. Fugiat.
        </div>
      </div>
      <div class="row" id="appAboutParagraphs">
        <div class="col-12 col-lg-6">
          <h4>MISSION STATEMENT</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores sed quam praesentium eum dicta neque quo ea voluptatum, quaerat corrupti natus incidunt, iusto modi ducimus id laudantium ipsa non blanditiis debitis explicabo laborum enim. Fuga cumque dicta itaque, pariatur magni porro tenetur, ea earum reprehenderit omnis expedita sed est?</p>
        </div>
        <div class="col-12 col-lg-6">
          <h4>FUN FACTS</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum tempora voluptatibus eos nobis, reiciendis enim minus laudantium aut! Quidem veritatis ipsum possimus omnis aliquam sapiente perspiciatis eum doloribus laborum alias porro, reiciendis culpa optio quo consequatur doloremque? Ex, animi.</p>
        </div>
      </div>
      <h4>SERVICES</h4>
    </div>
  </div>
</template>

<script>
import Pic from "@/assets/bout.png";
export default {
  
  data() {
    return {
      appPic: Pic
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 970px;
    color: #8a8888;
  font-size: 0.85rem;
}
h4 {
    color :#8a8888;
}
.appPic {
    margin-bottom: 1em;
}
#appAboutParagraphs {
    margin-top:2em;
    margin-bottom:1em;
}
</style>
