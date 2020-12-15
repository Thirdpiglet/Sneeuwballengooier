<template>
  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">
    <div class="relatief">
      <img :key="reRenderKey" id="animation"/>
        <a href="winter" class="button black buttonX">
          Naar Winter thema
        </a>
      <router-link :to="{name: 'herfstHQ'}" class="buttonY"/>
    </div>
    <div id="pookjeId" class="absoluut">  
      <input @input="poken()" @mouseup="flapRuitenwisser()" type="range" id="range" min="1" max="9" step="1" v-model="sliderValue" />
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Herfst',
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/pook4.png')})`
      },
      sliderValue: 3,
      forceRender: 0,
      snelheid: 100,
      loopjumper: 0,
      reRenderKey: 0,
      StartStop: null,
      // frameHeight: 300,
      // frames: 15,
      // frame: 0,
      // divtof: document.getElementById("animation"),
      klaar: false,
      intervalId: 0,
      nogBezig: false,
    };
  },
  created() {
  },
  methods: {
    snel: function() {
      this.snelheid = this.snelheid - 50
    },
    langzaam: function() {
      this.snelheid = this.snelheid + 50
    },
    stop: function() {
      this.loopjumper = 1000;
    },
    flapRuitenwisser: async function() {
      if(this.nogBezig == false){
        var i;
        for (i = 0; i < 999; i++) {
          let kanWeg = await this.flapEENkeer();
          i = i + this.loopjumper;
        }
        this.loopjumper = 0;
      }
    },
    flapEENkeer: async function() {
      return new Promise((resolve, reject) => {
        let i = 22
        var frameHeight = 300;
        var frames = 22;
        var frame = 0;
        var divtof = document.getElementById("animation");
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
    poken() {
      let zzzz = "https://vuestoragestatictof.blob.core.windows.net/pics/pook".concat(this.sliderValue + ".png");
      document.getElementById('pookjeId').style.backgroundImage = "url("+zzzz+")";
      this.snelheid = (10 - this.sliderValue) * 30;
      // if(this.nogBezig == false && this.sliderValue == 1) {
      if(this.sliderValue == 1) {
        this.stop();
      }
    },
  }
}
</script>

<style scoped>
#animation {
  background-image: url("../assets/film04.png");
}
#pookjeId { 
  visibility:visible;
  background-image: url("https://vuestoragestatictof.blob.core.windows.net/pics/pook4.png");
  background-position: center;
  background-size: 45%;
  background-repeat: no-repeat;
  bottom: -80px;
}
.absoluut{
  position: absolute;
}

/* Al dit voor de button :S : */
a.button {
    /* display: block; */
    /* float: left; */
    position: absolute;
    height: 25px;
    width: 140px;
    /* margin: 0 10px 18px 0; */
    
    text-decoration: none;
    font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    
    -webkit-border-radius: 3px; 
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  a.button:before,
  a.button:after {
    content: '';
    position: absolute;
    left: -1px;
    height: 25px;
    width: 140px;
    bottom: -1px;
    
    -webkit-border-radius: 3px; 
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  a.button:before { 
    height: 23px;
    bottom: -4px;
    border-top: 0;
    
    -webkit-border-radius: 0 0 3px 3px; 
    -moz-border-radius: 0 0 3px 3px;
    border-radius: 0 0 3px 3px;
    
    -webkit-box-shadow: 0 1px 1px 0px #bfbfbf;
    -moz-box-shadow: 0 1px 1px 0px #bfbfbf;
    box-shadow: 0 1px 1px 0px #bfbfbf;
  }

  /* BLACK */
  a.black,
  a.black:hover,
  a.black:visited {
    color: #fff;
    border-bottom: 4px solid #414141;
    text-shadow: 0px 1px 0px #2f2f2f;
    
    background: #656565;
    background-image: linear-gradient(#656565, #444);
    background: -moz-linear-gradient(top,  #656565,  #444);
    
    box-shadow: inset 1px 1px 0 #939393;
  }

  .black:before,
  .black:after {
    border: 1px solid #535353;
    border-bottom: 1px solid #343434;
  }

  .black:after { border: 1px solid #5a5a5a; }

  a.black:hover {
    background: #444;
    background-image: linear-gradient(#444, #656565);
    background: -moz-linear-gradient(top,  #444,  #656565);
  }


  /* ACTIVE STATE */
  a.button:active {
    border: none;
    bottom: -4px;
    margin-bottom: 22px;
    
    -webkit-box-shadow: 0 1px 1px #fff;
    -moz-box-shadow:  0 1px 1px #fff;
    box-shadow:  1px 1px 0 #fff, inset 0 1px 1px rgba(0, 0, 0, 0.3);
  }

  a.button:active:before,
  a.button:active:after {
    border: none; 
    
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .no-cssgradients a.black,
  .no-cssgradients a.black:visited,
  .no-cssgradients a.black:hover { background-position-x: -410px; }


  .no-cssgradients a.button, .no-cssgradients a.button:visited, .no-cssgradients a.button:hover, .no-cssgradients a.button:before, .no-cssgradients a.button:after,
  .no-borderradius a.button, .no-borderradius a.button:visited, .no-borderradius a.button:hover, .no-borderradius a.button:before, .no-borderradius a.button:after,
  .no-generatedcontent a.button, .no-generatedcontent a.button:visited, .no-generatedcontent a.button:hover, .no-generatedcontent a.button:before, .no-generatedcontent a.button:after {
    border: 0;
  }
</style>
