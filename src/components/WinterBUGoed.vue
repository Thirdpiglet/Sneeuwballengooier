<template>

<div>
  <div id="containerId" class="row row-no-margin container-full-bg contBackgrnd hoogte padding0 d-flex justify-content-center relatief">

    <!-- <div class="row row-no-margin"> -->
            <div id="muurVallen0" class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-4 col-no-padding"></div>
            <div id="muurVallen" class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-5 col-no-padding"></div>
            <div id="muurVallen2" class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-3 col-no-padding"></div>
    <!-- </div> -->


    <!-- <div class="absoluut">
      <div :key="reRenderKey" id="muurVallen"></div>
      <div id="muurVallen2"></div>
    </div> -->
    <div id="pookjeId" class="pookjeClass4 absoluut top570">  
      <input @input="poken()" @mouseup="muurVallen()" type="range" id="range" min="1" max="9" step="1" v-model="sliderValue" />
    </div>  
  </div>
  <div v-drag="{ axis: 'x, y', handle: '#ballenGooier' }"
  id="ballenGooier" type="button" @mouseup="gooien()"  class="ui-widget-content relative">
    <div id="vizierID" class="absolute"></div>
  </div>
  <dragBoy/>

</div> 

</template>

<script>
import dragBoy from './DragBoy';
export default {
  name: 'Home',
  components: { dragBoy },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/pook4.png')})`
      },
      sliderValue: 3,
      forceRender: 0,
      snelheid: 120,
      reRenderKey: 0,
      StartStop: null,
      laatsteFrame: 99,
      intervalId: 0,
      nogBezig: false,
      vizierIDOffsetTop: 0,
      vizierIDOffsetLeft: 0,
    };
  },
  created() {
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    muurVallen: function() {
    document.getElementById('containerId').style.backgroundImage = "url('https://vuestoragestatictof.blob.core.windows.net/pics/snowTransp02.gif'), url('https://vuestoragestatictof.blob.core.windows.net/pics/SneeuwLandschap02.jpg')";
    // document.getElementById('containerId').style.backgroundImage = "url('https://vuestoragestatictof.blob.core.windows.net/pics/snowTransp02.gif'), url('https://vuestoragestatictof.blob.core.windows.net/pics/SneeuwLschMuurZijkant02.jpg')";
    document.getElementById('containerId').style.backgroundSize="100%";
    document.getElementById('containerId').style.backgroundRepeat="no-repeat";
    let frameHeight = 364;
    let frames = 15;
    let frame = 0;
    let divtof = document.getElementById("muurVallen");
    let divtof0 = document.getElementById("muurVallen0");
    let divtof2 = document.getElementById("muurVallen2");
    this.StartStop = setInterval(function () {
				if (frame == 15 ) {
					clearInterval();
				} else {
					let frameOffset = (++frame % frames) * -frameHeight;
          divtof.style.backgroundPosition = "0px " + frameOffset + "px";
          divtof0.style.backgroundPosition = "0px " + frameOffset + "px"; 
          divtof2.style.backgroundPosition = "0px " + frameOffset + "px"; 
				}
    }, 150);
    // clearInterval(function (){});
    },
    myStopFunction: function() {
      alert('Hij stopt alleen maar met een alert(?)');
      clearInterval(this.StartStop);
      // this.reRenderKey = this.reRenderKey + 1;
    },
    sneller: function() {
      // document.body.style.setProperty("--board-bg-color", "#"+Color);
      //  background-image: var(--slide-2);
      this.snelheid = this.snelheid -40;
      this.reRenderKey += 1;
      // this.muurVallen();
    },
    poken() {
      let zzzz = "https://vuestoragestatictof.blob.core.windows.net/pics/pook".concat(this.sliderValue + ".png");
      document.getElementById('pookjeId').style.backgroundImage = "url("+zzzz+")";
      this.snelheid = (10 - this.sliderValue) * 30;
      this.reRenderKey = this.reRenderKey + 1;
      if(this.sliderValue == 1) {
        this.myStopFunction();
      }
      // this.muurVallen();
    },
    gooien: async function ()
    {
      this.vizierIDOffsetTop = window.scrollY + document.querySelector('#vizierID').getBoundingClientRect().top;
      this.vizierIDOffsetLeft = window.scrollX + document.querySelector('#vizierID').getBoundingClientRect().left;
      let yyy = await this.gooierAnimatie();
      let zzz = await this.maakAfdruk();
    },
    gooierAnimatie: async function() {
      console.log('Begin gooierAnimatie');
      return new Promise((resolve, reject) => {
        let i = 9
        var frameHeight = 365;
        var frames = 9;
        var frame = 0;
        var divtof = document.getElementById("ballenGooier");
        this.intervalId = setInterval(() => {
          this.nogBezig = true;
          var frameOffset = (++frame % frames) * -frameHeight;
          divtof.style.backgroundPosition = "0px " + frameOffset + "px";
          if (--i < 1) {
            clearInterval(this.intervalId)
            this.nogBezig = false;
            resolve(frame)
            }
          }, this.snelheid)
      })
    },
    maakAfdruk: async function () {
      let l_containerId = document.getElementById('containerId');
      let afdrukTop = this.vizierIDOffsetTop -138;
			let afdrukLeft = this.vizierIDOffsetLeft +13;
			let balAdruk = document.createElement("img");
      // balAdruk.src = "../assets/sneeuwbal02.png";
      balAdruk.src = "https://vuestoragestatictof.blob.core.windows.net/pics/sneeuwbal02.png";
			balAdruk.style.width = "50px";
      balAdruk.style.height = "auto";
      balAdruk.style.opacity = ".8";
      // balAdruk.style.zIndex = "+9";
			let imgLink = document.createElement("a");
			imgLink.appendChild(balAdruk);
			let imgLabel = document.createElement("p");
			let imgContainer = document.createElement("div");
			imgContainer.style.position = "absolute";
			imgContainer.style.top = afdrukTop + "px";
			imgContainer.style.left = afdrukLeft + "px";
			imgContainer.style.float = "left";
			imgContainer.style.margin = "5px";
			imgContainer.appendChild(imgLabel);
			imgContainer.appendChild(imgLink);
			l_containerId.appendChild(imgContainer);
		}
  }
}
</script>

<style scoped>
#ballenGooier {
  background-image: url("../assets/SneeuwbalGooien3.png");
  background-repeat: no-repeat;
  height: 365px;
  width: 400px;
}
#vizierID {
  width: 100px;
  height: 100px;
  background-image: url("../assets/Visiert01.png");
  background-repeat: no-repeat;
  position: relative;
  animation-name: vizier;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  opacity: 0.2;
}
@keyframes vizier {
  0%   {left:250px; top:-30px;}
  6%   {left:225px; top:-15px;}
  12%  {left:200px; top:0px;}
  
  24%  {left:250px; top:30px;}
  26%  {left:250px; top:30px;}

  38%  {left:300px; top:60px;}
  44%  {left:275px; top:75px;}
  50%  {left:250px; top:90px;}
  56%  {left:225px; top:75px;}
  62%  {left:200px; top:60px;}		  
  
  74%  {left:250px; top:30px;}
  76%  {left:250px; top:30px;}
  
  88%  {left:300px; top:0px;}
  94%  {left:275px; top:-15px;}	
  100% {left:250px; top:-30px;}
}
#muurVallen {
    background-image: url("../assets/WallGroot14t.png");
    background-repeat: no-repeat;
    height: 300px;
    width: 533px;
    transform: scale(1.59,1.59);
    transform-origin:top;
    z-index: +3;
}
#muurVallen0 {
    background-image: url("../assets/WallGroot14t.png");
    background-repeat: no-repeat;
    height: 300px;
    width: 533px;
    transform: scale(1.59,1.59);
    transform-origin:top;
    z-index: +2;
}
#muurVallen2 {
    background-image: url("../assets/WallGroot14t.png");
    background-repeat: no-repeat;
    height: 300px;
    width: 533x;
    transform: scale(1.59,1.59);
    transform-origin:top;
    z-index: 0;
}
/* .winterl {
    background-image: url("../assets/snowTransp01.gif"), url("../assets/SneeuwLandschap02.jpg");
    background-repeat: no-repeat;
    height: 300px;
    width: 533px;
} */
.pookjeClass4{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook4.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.top570{
  top: 570px;
}
.contBackgrnd{
  background-color:#37372e;
  background-image: url("../assets//WallEnkel.png");
  /* transform: scale(1.3,1.3); */
}
.hoogte{
  min-height: 478px;
  max-height: 100px;
}
.padding0{
  padding: 0px;
  border-color: red;
}
.relatief{
  position: relative;
}
.absoluut{
  position: absolute;
  /* max-height: 100%; */
}
#range {
  -webkit-appearance: slider-vertical;
  width: 200px;
  height: 100px;
  opacity: 0;
}
#pookjeId { 
  visibility:visible;
  background-image: url("../assets/pook5.png");
} 
</style>
