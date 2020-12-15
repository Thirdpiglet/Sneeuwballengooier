<template>
<div>
  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">
    <div class="relatief">
      <div id="ruitwId3" class="relatief">
        <div id="testing">
        </div>
        <vue-load-image>
          <img :key="reRenderKey" id="myImg" class="img-fluid" slot="image" src="https://vuestoragestatictof.blob.core.windows.net/pics/Ruitenwissers05.gif"/>
          <img slot="preloader" src="../assets/spinner-icon-gif-27.jpg"/>
          <div slot="error">error message</div>
        </vue-load-image>
      </div>
    </div>
    <div id="pookjeId" class="pookjeClass absoluut top570" :style="cssProps">
      <input @input="poken()" type="range" id="range" min="1" max="4" step="1" v-model="sliderValue" />
    </div>  
  </div>
</div>
</template>

<script>
import VueLoadImage from 'vue-load-image'
export default {
  name: 'HerfstHQ',
  components: {
    'vue-load-image': VueLoadImage
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/pook4.png')})`
      },
      sliderValue: 3,
      forceRender: 0,
      reRenderKey: 0,
      images: [],
    };
  },
  created: async function() {
    var element = document.getElementById('testing');
      element.style.cssText = 'display:none;';
  },
  mounted: async function() {
    await this.gifsLaden();
  },
  methods: {
    gifsLaden: async function() {
      return new Promise((resolve, reject) => {
      // setTimeout(function(){
      // alert('Begin. ..');
        this.images[0] = new Image();
        this.images[0].src = "https://vuestoragestatictof.blob.core.windows.net/pics/RuitenwissersSlow05.gif";
        this.images[1] = new Image();
        this.images[1].src = "https://vuestoragestatictof.blob.core.windows.net/pics/Ruitenwissers05.gif";
        this.images[2] = new Image();
        this.images[2].src = "https://vuestoragestatictof.blob.core.windows.net/pics/RuitenwissersFast1_05.gif";
        this.images[3] = new Image();
        this.images[3].src = "https://vuestoragestatictof.blob.core.windows.net/pics/RuitenwissersFast2_05.gif";
        //  }, 6000);
        // alert('klaar!');
        // this.sliderValue = 4;
        // this.poken();
      })
    },
    poken: async function() {
      await this.pokenDoe();
    },
    pokenDoe: async function(){
      // console.log(this.sliderValue);
      // this.reRenderKey = this.reRenderKey + 1; 
      return new Promise((resolve, reject) => {
        // alert(this.sliderValue);// Werkt niet zonder?!
        
        if (this.sliderValue == 1) {
          // alert('1');
          // this.reRenderKey = this.reRenderKey +1;
          document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestatictof.blob.core.windows.net/pics/pook2.png')";
          document.getElementById("myImg").src = (this.images[0].src);
          // this.reRenderKey = this.reRenderKey +1;
        } else if  (this.sliderValue == 2) {
          // alert('2');
          // this.reRenderKey = this.reRenderKey +1;
          document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestatictof.blob.core.windows.net/pics/pook4.png')";
          document.getElementById("myImg").src = (this.images[1].src);
          // this.reRenderKey = this.reRenderKey +1;
        } else if  (this.sliderValue == 3) {
          // alert('3');
          // this.reRenderKey = this.reRenderKey +1;
          document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestatictof.blob.core.windows.net/pics/pook5.png')";
          document.getElementById("myImg").src = (this.images[2].src);
          // this.reRenderKey = this.reRenderKey +1;
        } else {
          // alert('4');
          // this.reRenderKey = this.reRenderKey +1;
          document.getElementById('pookjeId').style.backgroundImage = "url('https://vuestoragestatictof.blob.core.windows.net/pics/pook7.png')";
          document.getElementById("myImg").src = (this.images[3].src);
          // this.reRenderKey = this.reRenderKey +1; 
        }
        // this.reRenderKey = this.reRenderKey +1; 
      })
    },
  }
}
</script>

<style scoped>
</style>
