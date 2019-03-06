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
        <font-awesome-icon icon="th" @click="viewFilter('grid')" class="appWorkFiltersGrid" :class="{isActivated: viewFilterB =='grid' }"/>

        <font-awesome-icon icon="bars" @click="viewFilter('list')" class="appWorkFiltersList" :class="{isActivated: viewFilterB =='list'}"/>
      </div>
    </div>

    <div class="row" :class="{viewClass: viewFilterA === 'list' }">
      <div class="appWorkImgs col" v-for=" image in filteredImg" :key="image.id ">
        <div>
          <img class="col-xl-13 appWorkGridINT" v-if="!listA" :src="image.url">
        </div>
        <img v-if="listA" class="col-xl-4 appWorkImg" :src="image.url"><transition name="fade"> <p v-if="listA" class="col-xl-8 appWorkText">{{image.text}}</p></transition>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewFilterB: "grid",
      filterr: "all",
      viewFilterA:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
      filteredImg: [],
      index: 0,
      listA: false,
      all: [
        {
          id: 1,
          title: "Landscape",
          text:
            "THIS IS LANDSCAPE Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/zENEKl0.png",
          category: "print"
        },
        {
          id: 2,
          title: "Dark",
          text:
            " THIS IS DARKLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/8SPAekX.png",
          category: "applications"
        },
        {
          id: 3,
          title: "Hug",
          text:
            "THIS IS HUG Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/WFs2EpX.png",
          category: "photography"
        },
        {
          id: 4,
          title: "Plez",
          text:
            " THIS IS PLEZ Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/Ai437o4.png",
          category: "print"
        },
        {
          id: 5,
          title: "Webb-apps",
          text:
            "THESE ARE WEB APPSLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/NobXWbq.png",
          category: "web"
        },
        {
          id: 6,
          title: "Jesus",
          text:
            " HOLY JESUS PLS SAVE US Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/TQgkicD.png",
          category: "web"
        },
        {
          id: 7,
          title: "Bleeh",
          text:
            " BLEEH Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/cFfimNq.png",
          category: "print"
        },
        {
          id: 8,
          title: "Gun",
          text:
            "GUN GUN Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
          url: "https://i.imgur.com/apUA4Hw.png",
          category: "print"
        },
        {
          id: 9,
          title: "Collage",
          text:
            "lame Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate dolorem nobis natus excepturi. Debitis voluptate in officia incidunt cumque laboriosam vero blanditiis dicta a? Necessitatibus soluta sint quas esse voluptate officiis nobis, expedita, laboriosam doloremque tenetur veniam voluptas? Nobis facilis, saepe, cumque accusamus qui excepturi eligendi deserunt a ad ea ut optio mollitia id ullam? In sed quia doloribus quidem dolore architecto, pariatur velit facilis accusantium voluptas? Eos, fuga.",
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
      if (value=='list') {
        this.listA = true;
        this.viewFilterB='list';
              }
      if (value=='grid') {
        this.listA = false;
         this.viewFilterB='grid';
      }
    }
  }
};
</script>

<style>
.appWorkGridINT
{
  margin-right:-2em;
}
.filterActive {
  color: #2ecc71;
}
.isActivated{
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
  display: flex;
}
.appWorkImg{
  padding-left:0;
  padding-right:13px;
}
.appWorkFiltersGrid:hover,
.appWorkFiltersList:hover {
  cursor: pointer;
}
.viewClass {
  display: block;
}
.appWorkText {
 
  }
#appWorkFiltersContainer {
  margin-bottom: 2em;
}
</style>
