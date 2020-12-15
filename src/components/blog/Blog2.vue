<template>
<div class="col-xs-4 col-lg-8">

  <div class="container">
    <div class="text-block2 blogtitletext">
      <div>
        <div class="blogtitletext">Dit kan ik voor u betekenen</div>
        <div class="blogbodytext"> Een (online) introdutiegesprek voor het inventariseren van uw software-wensen <br>
            Een gratis prototype van uw site / toepassing <br>
            Vervolggesprekken om te toepassing voor u op maat te maken <br>
            Betaling van €100,= voor de ontwikkel-kosten en hosten* voor het
        </div>
      </div>
          <!-- <table>
            <tbody>
              <tr
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
                <div class="col-lg-2 noopadding ">
                  <img src="..\..\assets\blogIcoonAuthor.png" width="13px" height="13px">
                  {{ blog.author.firstName }} {{ blog.author.lastName }}
                </div>
                <div class="col-lg-2 noopadding">
                  <img src="..\..\assets\blogIcoonDateTime.png" width="13px" height="13px">
                  {{ blog.postedOn }}
                </div>
                <div class="col-lg-2 noopadding">
                  <img src="..\..\assets\blogIcoonCategory.png" width="13px" height="13px">
                  Uncategorized
                </div>
                <div class="col-lg-2 noopadding">
                  <img src="..\..\assets\blogIcoonLeaveMessage.png" width="13px" height="13px">
                  Laat een reactie achter
                </div>
                <div class="col-md-2 noopadding">
                  <router-link
                    :to="{
                      name: 'blogedit',
                      params: {
                        blog
                      },
                    }"
                  >
                    <img src="..\..\assets\blogIcoonEdit.png" width="13px" height="13px">
                    Bewerk
                    <span
                      class="sy-shapes-plus-large em-icon-size-3 right-5 position-absolute"
                    />
                  </router-link>
                </div>
              </div>
              <hr><br><br>

              </tr>
            </tbody>
          </table> -->

  </div></div></div>
</template>

<script>
import {
  retrieveTemp,
  retrieveResponses,
  createNewVersion,
} from '../../services/ApiService';
export default {
  name: 'Blog2',
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
    };
  },
  created: async function() {
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
    // getVer: async function() {
    //   this.allVersions = await retrieveTemp(this.urlExt);
    //   if (this.allVersions) {
    //     this.arrayLength = this.allVersions.length;
    //     this.verSelec = this.allVersions[0];
    //   }
    // },
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
      // if (this.allResponses) {
      //   this.arrayLength = this.allResponses.length;
      //   this.responseSelec = this.allResponses[0];
      // }
    },

    save: async function() {
      // this.newVersion = this.composeNewVersion();
      // this.isSuccessful = await createNewVersion(this.tempUrl, this.newVersion);
      // if (this.isSuccessful === true) {
      //   alert('gelukt :-)');
      // } else {
      //   alert('Mislukt :-(');
      // }
    },
    composeNewVersion: function() {
      // this.productMutation = {
      //   title: "title van Vue.js",
      //   body: this.bodyInData,
      //   teaser: "teaser van Vue.js",
      //   slug: "slug van Vue.js",
      //   postedOn: "2020-08-15T20:23:10.289+0000",
      //   author: {
      //     id: 1,
      //     firstName: "Stoffel",
      //     lastName: "Schoenmakers",
      //     email: "stoffel.schoenmakers@gmail.com"
      //     },
      //   };
      //   return this.productMutation;
      },
  },
}
</script>

<style scoped>
.text-block2 {
  position: absolute;
  bottom: 20  px;
  left: 15%;
  right: 15%;
}
.city {
  background-color: tomato;
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
</style>
