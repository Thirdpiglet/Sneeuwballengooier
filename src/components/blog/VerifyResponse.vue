<template>
<div>
  <div class="container">
      <div class="row">
          <div class="container PTSans" style="background-color:#F2F4F4; padding-left: 24px; padding-right: 24px;">
            <div class="row mb-3 PTSans responsetitletext">
              <div style="padding-left: 8px;"><i>Goed te keuren reacties:</i></div>
            </div>
            <div>
              <!-- v-for="(response, index) in allResponses" -->
              <div
                v-for="(response) in allResponses"
                :key="response.id"
              >
                <!-- <div class="row mb-3" style="background-color:#FDFEFE; padding: 8px;" v-if="response.post.id == blog.id"> -->
                <div class="row mb-3" style="background-color:#FDFEFE; padding: 8px;">
                  <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                    <div>
                      <div class="responsetitletext">
                        <small><span class="glyphicon glyphicon-user" style="padding-right: 8px"></span></small>
                        <span v-html="response.name"></span>
                      </div>
                      <div class="responsebodytext"><span v-html="response.body"></span></div>
                      <div class="responsefootertext">
                        <span class="glyphicon glyphicon-time" style="padding-right: 5px"></span>



                        <!-- Effe uitgesterd: -->
                        <!-- [Vue warn]: Error in render: "TypeError: Cannot read property 'postedOn' of null" -->
                        <span style="padding-right: 11px" v-html="formatDate(response.postedOn.postedOn)"></span>



                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <div>
                      <button id="button02"
                              class="button"
                              name="saveOK"
                              @click="saveOK(response.id)"
                      >
                      <span class="glyphicon glyphicon-thumbs-up" style="color:green"></span>
                      </button>
                    </div>
                    <br> 
                    <div>
                      <button id="button03"
                              class="button"
                              name="saveNOK"
                              @click="saveNOK(response.id)"
                      >
                      <span class="glyphicon glyphicon-thumbs-down" style="color:red"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr><br><br>
    </div>
</template>

<script>
// import BlogReaction from './BlogReaction';
import {
  updateVersion,
  retrieveTemp,
  retrieveResponses,
  createNewVersion,
} from '../../services/ApiService';
import moment from 'moment';
export default {
  name: 'VerifyResponse',
  components: {
    // BlogReaction,
  },
  props: {
    msg: String
  },
  data() {
    return {
      verSelec: [],
      responseSelec: [],
      allMutations: {},
      allVersions: {},
      allResponses: {},
      newVersion: {},
      isSuccessful: false,
      tempUrl: 'https://rest-tofapi-1579971100341.azurewebsites.net/admin/posts/',
      prodUrl: 'https://rest-tofapi-1579971100341.azurewebsites.net/admin/posts/',
      respUrl: 'https://rest-tofapi-1579971100341.azurewebsites.net/responses/',
      bodyInData: '',
      formattedDate: '',
      isVisible: false,
      reactionVisible: [],
      glyphiconValue: "glyphicon glyphicon-eye-open",
      button01: "",
      reRenderKey: 0,
    };
  },
  created: async function() {
    for(var i = 0; i < 10; i++) {
      this.reactionVisible.push(false);
    }

    await this.getVerProd();
    await this.getResponses();
  },
  methods: {
    getVerProd: async function() {
      this.allMutations = await retrieveTemp(this.prodUrl);
      this.allVersions = await retrieveTemp(this.prodUrl);
      if (this.allVersions) {
        this.arrayLength = this.allVersions.length;
        this.verSelec = this.allVersions[0];
      }
    },
    getResponses: async function() {
      this.allResponses = await retrieveResponses(this.respUrl);
    },
    formatDate: function(parmDate) {
      return this.formattedDate = moment(parmDate).format('DD-MM-YYYY, h:mm');
    },
    setVisible: function() {
      this.isVisible = !(this.isVisible != false);
      if (this.isVisible === true) {
        this.glyphiconValue = "geenBorder glyphicon glyphicon-eye-close";  
      }
      else {
        this.glyphiconValue = "geenBorder glyphicon glyphicon-eye-open";
      }
        // document.setElementsByClassName("button01")[0].innerHTML = "button geenBorder";
        // this.button01.setAttribute("class", "glyphicon glyphicon-ok-circle");
    },
    setReactionVisible: function(pIndex) {
      // this.reactionVisible[pIndex] = !(this.reactionVisible[pIndex] != false);
      this.reactionVisible[pIndex] = true ;
      // this.reRenderKey += 1; 
      return this.reactionVisible[pIndex];
    },
    saveOK: async function(responseId) {
      const upTeDaten = {"verified": "y"};
      this.isSuccessful = await updateVersion(this.respUrl, upTeDaten, responseId);
      // if (this.isSuccessful === true) {
      //   alert('gelukt :-)');
      // } else {
      //   alert('Mislukt :-(');
      // }
    },
    saveNOK: async function(responseId) {
      const upTeDaten = {"verified": "n"};
      this.isSuccessful = await updateVersion(this.respUrl, upTeDaten, responseId);
      // if (this.isSuccessful === true) {
      //   alert('gelukt :-)');
      // } else {
      //   alert('Mislukt :-(');
      // }
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
