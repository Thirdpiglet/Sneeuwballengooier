<template>
  <div class="container-fluid mb-3 align-left" style="background-color:#FDFEFE; min-width: 100%">
    <div :key="reRenderKey" class="responsetitletext">Geef een reactie {{newVersion.name}}</div>
      <textarea class="responsebodytext form-control" style="min-width: 100%" placeholder="Vul je reactie hier in ..."
          @focus="reactionVisible[index]=setReactionVisible(index)"
           v-model="newVersion.body">
      >
      </textarea><br>
      <div v-if="reactionVisible[index]"> 
      <input type="text" class="responsebodytext form-control" placeholder="Email (verplicht)" v-model="newVersion.email"><br>
      <input type="text" class="responsebodytext form-control" placeholder="Naam (verplicht)" v-model="newVersion.name"><br>
      <input type="text" class="responsebodytext form-control" placeholder="Website" v-model="newVersion.website"><br>
      <div class="form-check" style="padding-left: 0px">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1" style="padding-left: 18px">Houd me via e-mail op de hoogte van nieuwe reacties.</label>
      </div>
      <div class="form-check" style="padding-left: 0px">
        <input type="checkbox" class="form-check-input" id="exampleCheck2">
        <label class="form-check-label" for="exampleCheck2" style="padding-left: 18px">Houd me via e-mail op de hoogte van nieuwe berichten.</label>
      </div>
        <!-- <button type="submit" class="btn btn-outline-secondary pull-right">Reactie plaatsen</button> -->
        <button
          id="bewaren"
          type="button"
          class="btn btn-outline-secondary pull-right"
          name="save"
          @click="save(index)"
        >
          Reactie plaatsen
        </button>
      </div>
    </div>
</template>

<script>
import {
  createNewVersion,
} from '../../services/ApiService';
import moment from 'moment';
export default {
  name: 'BlogReaction',
  props: {
    "respUrl": String,
    "post": Object,
    "index": Number,
  },
  data() {
    return {
      verSelec: [],
      responseSelec: [],
      allMutations: {},
      allVersions: {},
      allResponses: {},
      newVersion: {
        "title": "",
        "body": "",
        "email": "",
        "name": "",
        "updnewReaction": null,
        "updnewMessage": null,
        "postedOn": 1598565600000,
        "verified": "n",
        "post": {}
      },
      isSuccessful: false,
      bodyInData: '',
      formattedDate: '',
      reactionVisible: [],
      button01: "",
      reRenderKey: 0,
    };
  },
  created: async function() {
    // this.newVersion = this.response;
    // this.newVersion.body = "";
    // this.newVersion.email = "";
    // this.newVersion.name = "";
    // this.newVersion.website = "";  
  },
  methods: {
    formatDate: function(parmDate) {
      return this.formattedDate = moment(parmDate).format('DD-MM-YYYY, h:mm');
    },
    setReactionVisible: function(pIndex) {
      // this.reactionVisible[pIndex] = !(this.reactionVisible[pIndex] != false);
      this.reactionVisible[pIndex] = true ;
      this.reRenderKey += 1;
      return this.reactionVisible[pIndex];
    },
    save: async function(p_index) {
      this.newVersion.title = "Geen veld op het scherm";
      // let currentDate = new Date().toLocaleString();
      let currentDate = moment();
      // this.newVersion.postedOn = moment(currentDate).format('DD-MM-YYYY, h:mm');
      this.newVersion.postedOn = moment();
      // this.newVersion.postedOn = moment(currentDate);
      // alert(this.newVersion.postedOn);
      this.newVersion.post = this.post;
      this.newVersion.verified = "n"
      this.isSuccessful = await createNewVersion(this.respUrl,this.newVersion);
      // this.newVersion.body = "";
      // this.newVersion.email = "";
      // this.newVersion.name = "";
      // this.newVersion.website = ""; 
      alert("Je reactie wordt na goedkeuring getoond.");
      this.newVersion.body = "";
      this.reactionVisible[p_index] = false;
      this.reRenderKey += 1;
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 601px) {
  div.blogtitletext {
    font-size: 32px;
    font-weight:400;
    line-height: 64px;
    text-align: center;
  }
  div.blogbodytext {
    font-size: 20px;
    font-weight:400;
    line-height: 32px;
    text-align: left;
  }
  div.responsetitletext {
    font-size: 24px;
    font-weight:400;
    line-height: 36px;
    text-align: left;
    padding-left: 0pt;
  }
  div.responsebodytext {
    font-size: 16px;
    font-weight:400;
    line-height: 24px;
    text-align: left;
  }
  textarea.responsebodytext {
    font-size: 16px;
    font-weight:400;
    line-height: 24px;
    text-align: left;
  }
    div.responsefootertext {
    font-size: 10px;
    font-weight:400;
    line-height: 24px;
    text-align: left;
    color: grey;
    /* padding-right: 11px; */
  }
}

@media screen and (max-width: 600px) {
  div.blogtitletext {
    font-size: 16px;
    font-weight:400;
    line-height: 32px;
    text-align: center;
  }
  div.blogbodytext {
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }
  div.responsetitletext {
    font-size: 14px;
    font-weight:400;
    line-height: 32px;
    text-align: left;
  }
  div.responsebodytext {
    font-size: 9px;
    font-weight:400;
    line-height: 16px;
    text-align: left;
  }
  textarea.responsebodytext {
    font-size: 9px;
    font-weight:400;
    line-height: 16px;
    text-align: left;
  }
  div.responsefootertext {
    font-size: 8px;
    font-weight:400;
    line-height: 24px;
    text-align: left;
    color: grey;
  }
}
.text-block2 {
  position: absolute;
  bottom: 20  px;
  left: 15%;
  right: 15%;
  /* background-color: black;
  opacity: 0.8; */
  /* color: white; */
  /* padding-left: 20px;
  padding-right: 20px; */
}
.city {
  background-color: tomato;
  /* color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 0px; */
}
.noopadding {
  /* padding-left: 1p x; */
  padding-right: 0px;
}
.padding-minder {
  /* padding: 1px; */
  padding-left: 0px;
  padding-right: 0px;
}
.container {
  border: 0pt;
}
.container-fluid{
  border: 0pt;
  /* padding: 0pt; */

}
.button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: 0;
  background: transparent;
}
.jumbotron{
  background-image: url("../../assets/poesraamregen.gif");
}
.form-control {
   min-width: 100%;
   max-width: 100%;
}
.form-check-input {
  margin-top: 0px;
}
/* @import url('https://fonts.googleapis.com/css?family=PT+Sans');
.PTSans {
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight:400;
  margin-bottom: 0px;
  line-height: 1;
} */
</style>
