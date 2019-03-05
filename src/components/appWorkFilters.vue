<template>
  <div class="container" id="appWorkFiltersContainer">
    <div class="row">
      <div class="col-lg-6" id="appWorkFilter">
        <h6
          class="appFilterMenu"
          @click="resetFilter('all')"
          :class="{filterActive :filterr=='all'}"
        >ALL &nbsp;</h6>
        <h6>/ &nbsp;</h6>
        <h6
          class="appFilterMenu"
          @click="imageFilter('print')"
          :class="{filterActive :filterr=='print'}"
        >PRINT &nbsp;</h6>
        <h6>/ &nbsp;</h6>
        <h6
          class="appFilterMenu"
          @click="imageFilter('photography')"
          :class="{filterActive :filterr=='photography'}"
        >PHOTOGRAPHY &nbsp;</h6>
        <h6>/ &nbsp;</h6>
        <h6
          class="appFilterMenu"
          @click="imageFilter('web')"
          :class="{filterActive :filterr=='web'}"
        >WEB &nbsp;</h6>
        <h6>/ &nbsp;</h6>
        <h6
          class="appFilterMenu"
          @click="imageFilter('applications')"
          :class="{filterActive: filterr=='applications'}"
        >APPLICATIONS</h6>
      </div>
      <div class="col-lg-6" id="appWorkFiltersVIEW">
        <font-awesome-icon icon="th" @click="viewFilter('grid')" class="appWorkFiltersGrid"/>

        <font-awesome-icon icon="bars" @click="viewFilter('list')" class="appWorkFiltersList"/>
      </div>
    </div>

    <div class="row" :class="{viewClass: viewFilterA == 'list' }">
      <div class="col-xl-4 appWorkImgs" v-for=" image in filteredImg" :key="image.id ">
        <img :src="image.url"> 
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterr: "all",
      viewFilterA: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
      filteredImg: [],
      all: [
        {
          id: 1,
          title: "Landscape",
          text: "THIS IS LANDSCAPE Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/zENEKl0.png",
          category: "print"
        },
        {
          id: 2,
          title: "Dark",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/8SPAekX.png",
          category: "applications"
        },
        {
          id: 3,
          title: "Hug",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/WFs2EpX.png",
          category: "photography"
        },
        {
          id: 4,
          title: "Plez",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/Ai437o4.png",
          category: "print"
        },
        {
          id: 5,
          title: "Webb-apps",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/NobXWbq.png",
          category: "web"
        },
        {
          id: 6,
          title: "Jesus",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/TQgkicD.png",
          category: "web"
        },
        {
          id: 7,
          title: "Bleeh",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/cFfimNq.png",
          category: "print"
        },
        {
          id: 8,
          title: "Gun",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/apUA4Hw.png",
          category: "print"
        },
        {
          id: 9,
          title: "Collage",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/QJMYERw.png",
          category: "web"
        }
      ]
    };
  },
  created() {
    this.filteredImg = this.all;
  },
  methods: {
    imageFilter(filterr) {
      console.log(filterr);

      this.filteredImg = this.all.filter(n => n.category === filterr);
      this.filterr = filterr;
    },
    resetFilter(value) {
      this.filteredImg = this.all;
      this.filterr = value;
    },
    viewFilter(value) {
      console.log(value);
      this.viewFilterA = value;
    }
  }
};
</script>

<style>
.filterActive {
  color: #2ecc71;
}
.appFilterMenu:hover {
  cursor: pointer;
  color: #2ecc71;
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
.appWorkFiltersGrid:hover,
.appWorkFiltersList:hover {
  cursor: pointer;
}
.viewClass {
  display: inline-block;
}
#appWorkFiltersContainer {
  margin-bottom:2em;
}
</style>
