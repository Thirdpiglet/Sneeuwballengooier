<template>
<div>

  <div>
    <div class="container-full-bg">
      <div class="jumbotron">
        <p></p><p></p>
        <div class="PTSans titletext">Blog</div>
        <div class="PTSans bodytext">
          Geef gerust je reactie
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div
      v-for="(blog, index) in allMutations"
      :key="blog.id"
    >
    <div class="row">
      <div class="col-lg-12 PTSans blogtitletext">
        <p><span v-html="blog.title"></span></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 PTSans blogbodytext">
        <p><span v-html="blog.body"></span></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 PTSans responsefootertext">
        <span class="glyphicon glyphicon-user" style="padding-right: 5px"></span>
        <span style="padding-right: 3px" v-html="blog.author.firstName"></span>
        <span style="padding-right: 11px" v-html="blog.author.lastName"></span>
        <span class="glyphicon glyphicon-time" style="padding-right: 5px"></span>
        <span style="padding-right: 11px" v-html="formatDate(blog.postedOn)"></span>
        <span class="glyphicon glyphicon-tag" style="padding-right: 5px"></span>
        <span style="padding-right: 11px">Geen categorie</span>
        <span class="glyphicon glyphicon-comment" style="padding-right: 5px"></span>
        <span style="padding-right: 11px">Reageer</span>
        <span class="glyphicon glyphicon-pencil" style="padding-right: 5px"></span>
        <span style="padding-right: 11px">
          <router-link :to="{name: 'blogedit', params: {blog},}">
            Bewerk
          </router-link>
        </span>
      </div>
    </div>
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        </div>
        <div class="container col-lg-10 col-md-10 col-sm-10 col-xs-10 PTSans" style="background-color:#F2F4F4; padding-left: 24px; padding-right: 24px;">
          <div class="row mb-3 PTSans responsetitletext">
            <button
              id="button01"
              class="button"
              @click="setVisible(index)"
            >
              <p><span :class="glyphiconValue[index]"></span></p></button>  
              <div :key="reRenderKey" style="padding-left: 8px;"><i>Reacties:</i></div>
          </div>
            <div v-if="isVisible[index]">
              <!-- <div
                v-for="(response, index) in allResponses"
                :key="response.id"
              > -->
              <div
                v-for="(response) in allResponses"
                :key="response.id"
              >
                <div class="row mb-3" style="background-color:#FDFEFE; padding: 8px;" 
                  v-if="(response.post.id == blog.id) && (response.verified == 'y')">
                  <div>
                    <div class="responsetitletext">
                      <small><span class="glyphicon glyphicon-user" style="padding-right: 8px"></span></small>
                      <span v-html="response.name"></span>
                    </div>
                    <div class="responsebodytext"><span v-html="response.body"></span></div>
                    <div class="responsefootertext">
                      <span class="glyphicon glyphicon-time" style="padding-right: 5px"></span>
                      <span style="padding-right: 11px" v-html="formatDate(response.postedOn)"></span>
                      <span class="glyphicon glyphicon-comment" style="padding-right: 5px"></span>
                      <span style="padding-right: 11px">Reageer</span>
                    </div>
                  </div>
                </div>
              </div>
                <BlogReaction
                  :respUrl="respUrl"
                  :post="blog"
                  :index="index"
                />
            </div>
          </div>
        </div>
      </div>
      <hr><br><br>
    </div>
  </div>
</template>

<script>
import BlogReaction from './BlogReaction';
import {
  retrieveTemp,
  retrieveResponses,
  createNewVersion,
} from '../../services/ApiService';
import moment from 'moment';
export default {
  name: 'Blog',
  components: {
    BlogReaction,
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
      isVisible: [],
      reactionVisible: [],
      glyphiconValue: [],
      button01: "",
      reRenderKey: 0,
    };
  },
  created: async function() {
    for(var i = 0; i < 10; i++) {
      this.isVisible.push(false);
      this.reactionVisible.push(false);
      this.glyphiconValue.push('glyphicon glyphicon-eye-open');
    }
    await this.getVerProd();
    await this.getResponses();
    this.productMutation = {
      title: "init",
      body: "init",
      teaser: "init",
      slug: "init",
      postedOn: "init",
      author: {
        id: 1,
        firstName: "init",
        lastName: "init",
        email: "init"
      },
    };
  },
  methods: {
    getVerProd: async function() {
      this.allMutations = await retrieveTemp(this.prodUrl);
      // console.log('this.allMutations: ');
      // console.log(this.allMutations);
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
    setVisible: function(pIndex) {
      if (this.isVisible[pIndex] === true) {
        this.isVisible[pIndex] = false;
        this.glyphiconValue[pIndex] = "geenBorder glyphicon glyphicon-eye-open";  
      }
      else {
        this.isVisible[pIndex] = true;
        this.glyphiconValue[pIndex] = "geenBorder glyphicon glyphicon-eye-close";
      }
      this.reRenderKey += 1;
    },
  },
}
</script>

<style scoped>
.p {
   margin-top:5px;
   margin-bottom:5px
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
