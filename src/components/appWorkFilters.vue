<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6" id="appWorkFilter">
        <h6 class="appFilterMenu" @click="imageFilter">ALL &nbsp;</h6>
        <h6>/ &nbsp;</h6>
        <h6 class="appFilterMenu" @click="imageFilter">PRINT &nbsp;</h6>
        <h6>/ &nbsp;</h6>
        <h6 class="appFilterMenu" @click="imageFilter">PHOTOGRAPHY &nbsp;</h6>
        <h6>/ &nbsp;</h6>
        <h6 class="appFilterMenu" @click="imageFilter">WEB &nbsp;</h6>
        <h6>/ &nbsp;</h6>
        <h6 class="appFilterMenu" @click="imageFilter">APPLICATIONS</h6>
      </div>
      <div class="col-lg-6" id="appWorkFiltersVIEW">
        <font-awesome-icon icon="th" class="appWorkFiltersGrid"/>
        <font-awesome-icon icon="bars" class="appWorkFiltersList"/>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 appWorkImgs" v-for="image in all" :key="image.id">
        <img :src="image.url">
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      currentFilter : 1,
      all: [
        {
          id: 1,
          title: "Landscape",
          text: "",
          url: "https://i.imgur.com/zENEKl0.png",
          category: "print"
        },
        {
          id: 2,
          title: "Dark",
          text: "",
          url: "https://i.imgur.com/8SPAekX.png",
          category: "applications"
        },
        {
          id: 3,
          title: "Hug",
          text: "",
          url: "https://i.imgur.com/WFs2EpX.png",
          category: "photography"
        },
        {
          id: 4,
          title: "Plez",
          text: "",
          url: "https://i.imgur.com/Ai437o4.png",
          category: "print"
        },
        {
          id: 5,
          title: "Webb-apps",
          text: "",
          url: "https://i.imgur.com/NobXWbq.png",
          category: "web"
        },
        {
          id: 6,
          title: "Jesus",
          text: "",
          url: "https://i.imgur.com/TQgkicD.png",
          category: "web"
        },
        {
          id: 7,
          title: "Bleeh",
          text: "",
          url: "https://i.imgur.com/cFfimNq.png",
          category: "print"
        },
        {
          id: 8,
          title: "Gun",
          text: "",
          url: "https://i.imgur.com/apUA4Hw.png",
          category: "pring"
        },
        {
          id: 9,
          title: "Collage",
          text: "",
          url: "https://i.imgur.com/QJMYERw.png",
          category: "web"
        }
      ]
    };
  }
};
</script>

<style>
.appFilterMenu:hover {
  cursor: pointer;
}
#appWorkFilter {
  display: flex;
  margin-bottom: 1em;
}
.appWorkFiltersGrid {
  margin-right: 0.5em;
}
#appWorkFiltersVIEW {
  display: flex;
  justify-content: flex-end;
}
.appWorkImgs {
  margin-bottom: 2em;
}
</style>
