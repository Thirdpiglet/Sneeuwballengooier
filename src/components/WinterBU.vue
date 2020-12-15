<template>

<div>

  <div id="mainDiv"></div>

  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">
    <div id="winterlandschap" class="winterl absoluut"></div> 
    <div class="absoluut">
      <div :key="reRenderKey" id="animation"></div>
    </div>
    <div id="pookjeId" class="pookjeClass4 absoluut top570">  
      <input @input="poken()" @mouseup="startAnimation()" type="range" id="range" min="1" max="9" step="1" v-model="sliderValue" />
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
    gooierAnimatie: async function() {
      // alert('effe wachten op gooierAnimatie');
      var frameHeight = 365;
      var frames = 9;
      var frame = 0;
      var divtof = document.getElementById("ballenGooier");
      var snelheid = 190;
      await setInterval( async function () {
        // console.log('frame: ' + frame);
        if (frame == 9) {
          this.laatsteFrame = frame;
          clearInterval();
        } else {
          var frameOffset = (++frame % frames) * -frameHeight;
          divtof.style.backgroundPosition = "0px " + frameOffset + "px";  
        }
      }, 120);
      // alert('gooierAnimatie KLAAR, this.laatsteFrame: ' + this.laatsteFrame);
      return this.laatsteFrame;
    },
    startAnimation: function() {
    // this.reRenderKey += 1;
    var frameHeight = 364;
    var frames = 15;
    var frame = 0;
    var divtof = document.getElementById("animation");
    this.StartStop = setInterval(function () {
				if (frame == 15 ) {
					clearInterval();
				} else {
					var frameOffset = (++frame % frames) * -frameHeight;
					divtof.style.backgroundPosition = "0px " + frameOffset + "px";  
				}
    }, this.snelheid);
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
      // this.startAnimation();
    },
    poken() {
      let zzzz = "https://vuestoragestatictof.blob.core.windows.net/pics/pook".concat(this.sliderValue + ".png");
      document.getElementById('pookjeId').style.backgroundImage = "url("+zzzz+")";
      this.snelheid = (10 - this.sliderValue) * 30;
      this.reRenderKey = this.reRenderKey + 1;
      if(this.sliderValue == 1) {
        this.myStopFunction();
      }
      // this.startAnimation();
    },
    gooien: async function ()
    {
      var yyy = await this.gooierAnimatie();
      var zzz = await this.maakAfdruk();
    },
    maakAfdruk: async function () {
      let l_mainDiv = document.getElementById('mainDiv');
      let l_vizierID = document.getElementById('vizierID');
      let l_ballenGooier = document.getElementById('ballenGooier');
      let vizierIDOffsetTop = window.scrollY + document.querySelector('#vizierID').getBoundingClientRect().top;
      let vizierIDOffsetLeft = window.scrollX + document.querySelector('#vizierID').getBoundingClientRect().left;
      let ballenGooierOffsetTop = window.scrollY + document.querySelector('#ballenGooier').getBoundingClientRect().top;
      let ballenGooierOffsetLeft = window.scrollX + document.querySelector('#ballenGooier').getBoundingClientRect().left;
      // console.log('yyyy; ' + yyyy + '| xxxx; ' + xxxx); 
      // var afdrukTop = l_vizierID.offsetTop + l_ballenGooier.offsetTop -2;
			// var afdrukLeft = l_vizierID.offsetLeft + l_ballenGooier.offsetLeft +13;
      var afdrukTop = vizierIDOffsetTop + ballenGooierOffsetTop -2;
			var afdrukLeft = vizierIDOffsetLeft + ballenGooierOffsetLeft +13;
      // console.log('l_mainDiv; ' + l_mainDiv + ' | l_vizierID; ' + l_vizierID + ' | l_ballenGooier; ' + l_ballenGooier +
      //       ' | afdrukTop; ' + afdrukTop + ' | afdrukLeft; ' + afdrukLeft
      //       );
      // console.log('l_ballenGooier.offsetTop; ' + l_ballenGooier.offsetTop + ' | l_ballenGooier.offsetLeft; ' + l_ballenGooier.offsetLeft
      //       );

			let balAdruk = document.createElement("img");
      // balAdruk.src = "../assets/sneeuwbal02.png";
      balAdruk.src = "https://vuestoragestatictof.blob.core.windows.net/pics/sneeuwbal02.png";
			balAdruk.style.width = "50px";
			balAdruk.style.height = "auto";

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
			l_mainDiv.appendChild(imgContainer);
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
  opacity: 0.1;
}
@keyframes vizier {
  0%   {left:250px; top:30px;}
  /* 0%   {left:250px; top:-30px;}
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
  100% {left:250px; top:-30px;} */
  100% {left:250px; top:30px;}
}
#animation {
    background-image: url("../assets/WallGroot13t.png");
    background-repeat: no-repeat;
    height: 300px;
    width: 533px;
}
.winterl {
    background-image: url("../assets/winterlandschap.gif");
    background-repeat: no-repeat;
    height: 300px;
    width: 533px;
}
.pookjeClass4{
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook4.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
.top570{
  top: 570px;
}
.kleurtje{
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
