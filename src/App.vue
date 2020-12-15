<template>
  <div>
    <div>
      <!-- <hr> -->
      <app-header></app-header>
      <router-view></router-view>
    </div>
    
  <!-- <v-app> -->
    <!-- <v-app-bar app class="barhier">
      <v-toolbar-title>Vue 3rdP App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="username===''" @click="login()" color="primary">Login</v-btn>
      <div v-else>
        <span class="name">{{ name }}</span>
        <span><img src="./assets/VereTransp.png" alt="no pic" class="vere"></span>
        <v-btn @click="logoff()" color="red" class="ml-3">Logoff</v-btn>
      </div>
    </v-app-bar> -->

    <!-- <v-content>
      <v-container>
        <v-card>
        <div id="example-1">
          Hellooooo
        </div>    
        <div id="example-1">
          <button v-on:click="getVerLocal('http://localhost:8080/')">Local GET</button>
        </div>

        </v-card>
      </v-container>
    </v-content> -->
  <!-- </v-app> -->
  </div>
          <!-- <button v-on:click="getVerLocal('http://localhost:8080')">Local GET Kaal</button> -->
          <!-- <button v-on:click="getVerLocal('http://localhost:8080/')">Local GET</button> -->
          <!-- <button v-on:click="getVerLocal('http://localhost:8080/posts/')">Local GET posts/</button> -->
          <!-- <button v-on:click="getVerLocal('http://localhost:8080/Group1')">Local GET Group1</button> -->
          <!-- <button v-on:click="getVerLocal('http://localhost:8080/Group2')">Local GET Group2</button> -->
          <!-- <button v-on:click="getVerLocal('http://localhost:8080/Group3')">Local GET Group3</button> -->
</template>

<script>
import aad from "./services/aad";
import Axios from 'axios';
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    appHeader: Header
  },  
  data: () => ({
    // items: ["Apple", "Banana", "Mango"],
    // newText: "",
    username: "",
    name: "",
    // temp: "initieel",
    tofToken: {},
  }),

  created() {
    aad.getAccount().then((account) => {
      if(account !== null) {
        this.username = account.userName;
        this.name = account.name;
        // console.log('>>');
        // console.log(account);
        // console.log('<<');
      }
    });
    // aad.getToken().then((token) => {
    //   if(token !== null) {
    //     this.tofToken = token.accessToken;
    //     console.log('NOGMAALS: ');
    //     console.log(this.tofToken);
    //   }
    // });
    // this.fetch();
  },

  methods: {
    // getVerLocal() {
    //   console.log('#### this.username: ' + this.username);
    //   // Axios.get('https://rest-tofapi-1579971100341.azurewebsites.net/Group2').then(Response => {
    //   // Axios.get('http://localhost:8080/Group1').then(Response => {
    //   // Axios.get('http://localhost:8080/Group2').then(Response => {
    //   // Axios.get('http://localhost:8081/Group2', this.tofToken, params).then(res => res.data)
    //   // Axios.get('http://localhost:8081/Group2', this.tofToken).then(Response => {
    //   // Axios.get('http://localhost:8081/Group2').then(Response => {
    //   // Axios.get('http://localhost:8081',
    //   Axios.get('http://localhost:8081/Group2',
    //   // {
    //   //   headers: { 
    //   //     Authorization: `Bearer $(this.tofToken)` 
    //   //     },
    //   // }
    //   ).then(Response => {
    //     console.log('++++ SUCCESS ++++');
    //     console.log(Response);  
    //     // this.temp = '++++ SUCCESS ++++';
    //     this.temp = Response.data;
    //   }).catch(() => {
    //     console.log('---- ERROR ----');
    //     this.temp = '---- ERROR ----';
    //   });
    // },
    // deleteItem(index) {
    //   this.items.splice(index, 1);
    // },

    // addItem() {
    //   this.items.push(this.newText);
    //   this.newText = "";
    // },

    login() {
      aad.login().then((account) => {
        this.username = account.userName;
      });
    },

    logoff() {
      aad.logoff();
    }
  }
};
</script>
<style scoped>
.barhier{
  background-color: black;
}
.vere {
  width: 40px;
  height: 40px;
  /* object-fit: cover; */
  object-fit: contain;
}
.name {
  color: white;
}
</style>
