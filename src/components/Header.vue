<template>
<div>
  <div class="container-full-bg">
    <div class="row flex-nowrap">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 kolomOpMaat">
        <div style="padding-top: 5px">
          <a href="#" class="navbar-brand lettersOpMaat">3rd Piglet</a>
        </div>
      </div>
      <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 kolomOpMaat">
        <div style="float:right; padding-right: 20px">
        <!-- <v-btn v-if="username===''" @click="login()" color="primary">Login</v-btn> -->
        <!-- <button v-if="username==='TIJDELIJK'" @click="login()" class="buttonOpMaat">In</button> -->
        <button v-if="username===''" @click="login()" class="buttonOpMaat">In</button>
          <div class="kweettandersookniet" v-else>
            <span class="lettersOpMaat">
              {{ name }}
            </span>
            <span>
              <img src="../assets/VereTransp.png" alt="no pic" class="imageOpMaat">
            </span>
            <span style="display: inline-block" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="glyphicon glyphicon-bell myColor" style="padding-right: 5px"></span>
            </span>
            <span class="dropdown-menu" aria-labelledby="navbarDropdown" href="#">
              <VerifyResponse/>
            </span>
            <span class="vertical-center">
              <button @click="logoff()" class="buttonOpMaat">Uit</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row flex-nowrap">
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 thirdPiglet-image"/>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <div>
          <a style="text-decoration:none" class="PTSans fxw700 alsKlein7" href="#">
              Software Services
          </a>
        </div>
        <div>
          <p class="PTSans fxw400 alsKlein4">For your websites and more</p>
        </div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
        <ul class="col em-header-menu-container navbar-right hidden-xs">
          <li class="nav nav-pills navbar-right PTSans fxxw700">
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/user" tag="li" active-class="active"><a>Voorbeelden</a></router-link>
            <router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
            <router-link to="/contact" tag="li" active-class="active"><a>Contact</a></router-link>
            <router-link to="/vierdebiggetje" tag="li" active-class="active"><a>4e Biggetje</a></router-link>
          </li> 
        </ul>
          <div class="navbar-nav hidden-xl hidden-lg hidden-md hidden-sm">
            <!-- <nav class="navbar navbar-default"> -->
            <nav class="navbar">
              <div class="container-fluid navbar-nav">
                <div class="navbar-header" style="float:right">
                  <button class="button" @click="setVisible"><p><span class="glyphicon glyphicon-menu-hamburger"></span></p></button>
                </div>
                <div v-if="isVisible">
                  <ul>
                    <li>
                      <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                      <router-link to="/user" tag="li" active-class="active"><a>Voorbeelden</a></router-link>
                      <router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
                      <router-link to="/contact" tag="li" active-class="active"><a>Contact</a></router-link>
                      <router-link to="/vierdebiggetje" tag="li" active-class="active"><a>4e Biggetje</a></router-link>
                  </li>
                  </ul>
                </div>
              </div>
            </nav>  
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
// import BlogReaction from './blog/BlogReaction';
import VerifyResponse from './blog/VerifyResponse';
import aad from "../services/aad";
export default {
  name: 'Header',
  components: {
    // BlogReaction,
    VerifyResponse,
  },
  data() {
  return {
    isVisible: false,
    reRenderKey: 0,
    username: "",
    name: "",
    };
  },
    created() {
      aad.getAccount().then((account) => {
      if(account !== null) {
        this.username = account.userName;
        this.name = account.name;
      }
    });
  },
  methods: {
    setVisible: function() {
      this.isVisible = !(this.isVisible != false)
    },
    login() {
      aad.login().then((account) => {
        this.username = account.userName;
      });
    },
    logoff() {
      aad.logoff();
    }
  },
};
</script>
<style scoped>
/* .v-btn--round{
  height: 44px;
} */
.kweettandersookniet{
  background-color: #313236;
  height: 16px;
  vertical-align: center;
  font-size: small;
}
.navbar {
  margin-bottom: 0px;
}
.navbar-brand{
  height: 16px;
  /* padding-top: 13px; */
  font-size: small;
  /* vertical-align: center; */
  /* padding-top: 2px; */
}
.navbar-right{
  margin-right: 0px;
}
.rijOpMaat{
  background-color: #313236;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 32px;
}
.kolomOpMaat{
  background-color: #313236;
  height: 32px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
}
.buttonOpMaat{
  background-color: whitesmoke;
  border-radius: 3px; 
  height: 20px;
  padding-top: 0px;
  padding-right: 3px;
  padding-bottom: 0px;
  padding-left: 2px;
  vertical-align: center;
  font-size: small;
  font-weight:400;  
}
.imageOpMaat {
  padding-top: 0px;
  padding-bottom: 0px;
  width: 24px;
  height: 24px;
  vertical-align: center;
  /* object-fit: cover; */
  /* object-fit: contain; */
}
.lettersOpMaat {
  font-size: small;
  font-weight:400;
  color: whitesmoke;
  vertical-align: center;
  padding-top: 0px;
  padding-right: 8px;
    /* padding: 0%; */
}
/* .rechts{

} */
/* .jumbotron{
  background-image: none;
  background-size: 10px 10px;
  min-height: 1px;
  height: 1px;
  color: whitesmoke;
  background-color: #313236;
}
.myBackground{
  background-color: whitesmoke;
}
.barhier{
  background-color: #313236;
} */
/* .navbar-toggler-icon{
  background-color: whitesmoke;
} */
.myColor{
  color: whitesmoke;
} 
/* .witteLetters{
  color: whitesmoke;
} */
/* .whiteandpadding {
  color: white; 
  padding-right: 12px;
} */
.f35w700 {
  font-size: 35px;
  font-weight:700;
  color: black;
  padding: 0%;
}
.f15w400 {
  font-size: 15px;
  font-weight:400;
}
.f20w700 {
  font-size: 20px;
  font-weight:700;
}
span:hover {
  color: #1279be; 
}

/* .andereMargin {
  margin: 5px;
  padding: 10px;
} */

/* @import'~bootstrap/dist/css/bootstrap.min.css' */
</style>
