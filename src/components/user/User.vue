<template>
<div>

  <div>
    <div class="container-full-bg">
      <div class="jumbotron align-middle">
        <!-- <p></p><p></p>
        <div class="PTSans titletext">Voorbeelden</div>
        <div class="PTSans bodytext">
          <i>Under construction</i> -->

        <p></p><p></p><p></p>    
        <div class="PTSans titletext">Software maken is onze hobby</div>
        <p></p><p></p>  
        <div class="PTSans bodytext">
          Wij zijn u graag van dienst voor goedkope software-oplossingen
          <p></p><p></p>
          Uw website of thuis-toepassing op maat gemaakt,
          <p></p>
          zonder dat er voor u enige kennis benodigd is

        </div>
      </div>
    </div>
  </div>

  
  <div class="hello">

      <div class="slideshow-container" :key="forceRender">
      <div class="mySlidesInit mySlides fade">
        <div class="numbertext">1 / 3</div>
        <a href="https://hanssperwer.wordpress.com/"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon02.png" alt="hanssperwer" /> </a> 
        <a href="https://jolandadorst.wordpress.com/"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon01.png" alt="jolandadorst" /> </a> 
        <a href="https://www.stralenindezorg.nl/"> <img src="https://vuestoragestatictof.blob.core.windows.net/pics/SiteIcon05.png" alt="stralenindezorg" /> </a> 
        <a href="http://massagesportpark.nl/"> <img src="https://vuestoragestatictof.blob.core.windows.net/pics/SiteIcon06.png" alt="massagesportpark" /> </a>
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <a href="http://localhost:8080/mijn-abnamro/abnamro/sdp/widget.html#/overviewdepositamountpolicy"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon04.png" alt="sdp" /> </a>
        <a href="https://hanssperwer.wordpress.com/"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon02.png" alt="hanssperwer" /> </a> 
        <a href="https://jolandadorst.wordpress.com/"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon01.png" alt="jolandadorst" /> </a> 
        <a href="http://www.thirdpiglet.nl/"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon03.png" alt="hanssperwer" /> </a> 
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <a href="http://www.thirdpiglet.nl/"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon03.png" alt="hanssperwer" /> </a> 
        <a href="http://localhost:8080/mijn-abnamro/abnamro/sdp/widget.html#/overviewdepositamountpolicy"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon04.png" alt="sdp" /> </a>
        <a href="https://jolandadorst.wordpress.com/"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon01.png" alt="jolandadorst" /> </a> 
        <a href="https://hanssperwer.wordpress.com/"> <img src="https://vuestoragestatic.blob.core.windows.net/plaatjes/SiteIcon02.png" alt="hanssperwer" /> </a> 
        <div class="text">Caption Three</div>
      </div>

    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>

    </div>
    <br>

    <div style="text-align:center">
      <span class="dot" @click="currentSlide(1)"></span> 
      <span class="dot" @click="currentSlide(2)"></span> 
      <span class="dot" @click="currentSlide(3)"></span> 
    </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    msg: String
  },
  data() {
    return {
      slideIndex: 1,
      forceRender: 0,
    };
  },
  created: async function() {
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
    this.currentSlide(1);
    this.forceRender += 1;
  },
  methods: {
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {this.slideIndex = 1}    
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].style.display = "block";  
      dots[this.slideIndex-1].className += " active";
    },
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  background-image: url("../../assets/JolandaDorstBackgroundDark.png");
  align-content: center;
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
.mySlidesInit {display:contents }
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color:whitesmoke;
  background-color: #bbb;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color:whitesmoke;
  background-color: #bbb;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

</style>