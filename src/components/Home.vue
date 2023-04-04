<template>
<div>
  <div id="containerId" class="container-full-bg padding0 d-flex justify-content-center relatief"> 
    <video id="vidMuurVallenId" ref="vidMuurVallen" controls src="https://vuestoragestatictof.blob.core.windows.net/pics/SneeuwbalMuur03.mp4" preload="auto"></video>
  </div>
  <div v-drag="{ axis: 'x, y', handle: '#ballenGooier' }" id="ballenGooier" type="button" @mouseup="gooien()" class="ui-widget-content relative">
    <div id="vizierID" class="absolute"></div>
  </div>
</div> 

</template>

<script>
export default {
  name: 'Winter',
  data() {
    return {
      img: null,
      snelheid: 120,
      StartStop: null,
      intervalId: 0,
      nogBezig: false,
      vizierIDOffsetTop: 0,
      vizierIDOffsetLeft: 0,
      telAfdrukken: 0,
      // maxAfdrukken: 6,
      maxAfdrukken: 1,
      windowBreedte: null, 
    };
  },
  created() {
    this.windowBreedte = window.innerWidth;
    const body = document.body;
    body.style.position = 'fixed';
// Van ChatGPT:
this.img = new Image();
    this.img.onload = () => {
      console.log("Afbeelding geladen!");
    };
    this.img.onerror = () => {
      console.log("Fout bij het laden van de afbeelding!");
    };
    this.img.src = "https://vuestoragestatictof.blob.core.windows.net/pics/0001.png";
  },
  mounted() {
    window.addEventListener("keypress", e => {
      if(String.fromCharCode(e.keyCode) == 'x') {
        this.maxAfdrukken++;
      } else if(String.fromCharCode(e.keyCode) == 'y') {
        this.maxAfdrukken--;
      } else if(String.fromCharCode(e.keyCode) == 'r') {
        location.reload();
      }
    });
    const videoY = this.$refs.vidMuurVallen;
    let intervalId;
    intervalId = setInterval(() => {
      if (videoY.currentTime >= 6.03) {
        videoY.pause();
        clearInterval(intervalId);
        videoY.style.zIndex = "-1";
        document.getElementById('containerId').style.backgroundImage = "url('https://vuestoragestatictof.blob.core.windows.net/pics/snowTransp02.gif')";
      }
    }, 100);
  },
  methods: {
    muurVallen: function() {
      let vidMuurVallenVar = document.getElementById("vidMuurVallenId")
      vidMuurVallenVar.play();
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
      balAdruk.src = "https://vuestoragestatictof.blob.core.windows.net/pics/sneeuwbal02.png";
			balAdruk.style.width = "50px";
      balAdruk.style.height = "auto";
      balAdruk.style.opacity = ".8";
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
      balAdruk.src = "https://vuestoragestatictof.blob.core.windows.net/pics/sneeuwbal02.png";
			balAdruk.style.width = "50px";
      balAdruk.style.height = "auto";
      balAdruk.style.opacity = ".8";
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
video::-webkit-media-controls {
  display: none !important;
}

video::-webkit-media-controls-enclosure {
  display: none !important;
}

video::-webkit-media-controls-panel {
  display: none !important;
}

video::-webkit-media-controls-play-button {
  display: none !important;
}

video::-webkit-media-controls-timeline {
  display: none !important;
}

video::-webkit-media-controls-current-time-display {
  display: none !important;
}

video::-webkit-media-controls-time-remaining-display {
  display: none !important;
}
  #containerId {
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  #vidMuurVallenId {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: .5; */
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
      background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/0001.png");
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      background-size: cover;
      background-position: center center;
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
