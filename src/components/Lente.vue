<template>
  <div class="container-full-bg kleurtje hoogte padding0 d-flex justify-content-center relatief">
    <div class="relatief">
        <a href="zomer" class="button black buttonX">
          Naar Zomer thema
        </a>
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
.kleurtje{
  background-image: url("../assets/Klaprozen3.png");
}
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
</style>
