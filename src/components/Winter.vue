<template>
<div>
  <div id="containerId" class="container-full-bg hoogte padding0 d-flex justify-content-center relatief">
    <div class="absoluut">
      <a href="lente" class="button black buttonX">
        Naar Lente thema
      </a>
    </div>
    <div id="muurVallen"></div>
  </div>
  <div v-drag="{ axis: 'x, y', handle: '#ballenGooier' }"
  id="ballenGooier" type="button" @mouseup="gooien()" class="ui-widget-content relative">
    <div id="vizierID" class="absolute"></div>
  </div>
</div> 

</template>

<script>
export default {
  name: 'Winter',
  data() {
    return {
      snelheid: 120,
      StartStop: null,
      intervalId: 0,
      nogBezig: false,
      vizierIDOffsetTop: 0,
      vizierIDOffsetLeft: 0,
      telAfdrukken: 0,
      maxAfdrukken: 6,
      windowBreedte: null, 
      // teller: 0,
    };
  },
    // watch: {
    //   isModalVisible: function() {
    //     if(this.isModalVisible){
    //       document.documentElement.style.overflow = 'hidden'
    //       return
    //     }

    //     document.documentElement.style.overflow = 'auto'
    //   }
    // },
  created() {
    this.windowBreedte = window.innerWidth;
    
    // var fixed = document.getElementById('fixed');
    // fixed.addEventListener('touchmove', function(e) {
    //     e.preventDefault();
    // }, true);

    //  this.noScroll();

    // document.documentElement.style.overflow = 'hidden';

    // document.body.ontouchmove = (e) => { e.preventDefault(); return false; };

    const body = document.body;
    body.style.position = 'fixed';

  },
  mounted() {
    window.addEventListener("keypress", e => {
      if(String.fromCharCode(e.keyCode) == 'x'){
        this.maxAfdrukken++;
      }else if(String.fromCharCode(e.keyCode) == 'y'){
        this.maxAfdrukken--;
      }else if(String.fromCharCode(e.keyCode) == 'r'){
        // alert('sdfsd');
        // this.$forceUpdate();
        location.reload();
      }
    });
  },
  methods: {
    // noScroll: function () {
    //   this.teller++;
    //   console.log(this.teller);
    //   window.scrollTo(0, 0);
    // },
    muurVallen: function() {
    document.getElementById('containerId').style.backgroundImage = "url('https://vuestoragestatictof.blob.core.windows.net/pics/snowTransp02.gif'), url('https://vuestoragestatictof.blob.core.windows.net/pics/SneeuwLandschap02.jpg')";
    document.getElementById('containerId').style.backgroundSize="100%";
    document.getElementById('containerId').style.backgroundRepeat="no-repeat";
    let frameHeight = 364;
    let frames = 15;
    let frame = 0;
    let divtof = document.getElementById("muurVallen");
    this.StartStop = setInterval(function () {
				if (frame == 14 ) {
					clearInterval();
				} else {
					let frameOffset = (++frame % frames) * -frameHeight;
					divtof.style.backgroundPosition = "0px " + frameOffset + "px";  
				}
      }, 200);
    },
    gooien: async function ()
    {
      this.vizierIDOffsetTop = window.scrollY + document.querySelector('#vizierID').getBoundingClientRect().top;
      this.vizierIDOffsetLeft = window.scrollX + document.querySelector('#vizierID').getBoundingClientRect().left;
      let yyy = await this.gooierAnimatie();
      if (this.windowBreedte < 801) {
        let zzz = await this.maakAfdrukMobile();
      }
      else {
        let zzz = await this.maakAfdruk();  
      }
      this.telAfdrukken++;
      if(this.telAfdrukken > this.maxAfdrukken){
        this.muurVallen();
        this.telAfdrukken = 0;
        this.maxAfdrukken = 6;
      }
    },
    gooierAnimatie: async function() {
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
      let afdrukTop = this.vizierIDOffsetTop -114;
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
    },
    maakAfdrukMobile: async function () {
      let l_containerId = document.getElementById('containerId');
      let afdrukTop = this.vizierIDOffsetTop -88;
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
  .hoogte {
    min-height: 600px;
    background-color: #7798c1;
  }
  #ballenGooier {
    background-image: url("../assets/SneeuwbalGooien3.png");
    background-repeat: no-repeat;
    height: 365px;
    width: 400px;
    top: -500px;
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
@media screen and (min-width: 801px) {
  #muurVallen {
      background-image: url("../assets/WallGroot16t.png");
      background-repeat: no-repeat;
      height: 300px;
      width: 1903px;
      transform: scale(1.59,1.59);
      transform-origin:top;
  }
}
@media screen and (max-width: 800px) {
  #muurVallen {
      background-image: url("../assets/WallMobile800w.png");
      background-repeat: no-repeat;
      height: 300px;
      width: 903px;
      transform: scale(1.59,1.59);
      transform-origin:center;
  }
}
</style>
