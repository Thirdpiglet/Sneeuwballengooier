<!-- 
https://www.tiny.cloud/my-account/onboarding/
A. Deploy TinyMCE independent of the Vue.js application
To use an independent deployment of TinyMCE, add a script to either the <head> or the end of the <body> of the HTML file, such as:
<script src="/path/to/tinymce.min.js"></script>
To use an independent deployment of TinyMCE with the create a Vue.js application, add the script to /path/to/tinymce-vue-demo/public/index.html.
For information on self-hosting TinyMCE, see Advanced installation choices.
B. Bundling TinyMCE with the Vue.js application using a module loader
To bundle TinyMCE using a module loader (such as Webpack and Browserify), see Usage with module loaders.
-->
<template>
  <div>
    <div class="container-full-bg">
      <div class="jumbotron">
        <p></p><p></p>
        <div class="PTSans titletext">Blog</div>
        <div class="PTSans bodytext">
          wijzigen
        </div>
      </div>
    </div>
  
  <div class="container">
    <h2>Titel</h2>
    <editor
      id="section001"
     apiKey="kgnbpd9o92kawc7e4zeude4k83qas2trctba6k0rui81i2iv"
      initialValue="<p>Initial editor content</p>"
      :init="{
        height: 180,
        menubar: false,
        init_instance_callback: function (editor) {
                initContent();
            },
        plugins: [
          'advlist autolink lists link image charmap',
          'searchreplace visualblocks code fullscreen',
          'print preview anchor insertdatetime media',
          'paste code help wordcount table'
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | help'
      }"
    >
    </editor>
    <br><br>
    <h2>Blog body</h2>
    <editor2
      id="section002"
     apiKey="kgnbpd9o92kawc7e4zeude4k83qas2trctba6k0rui81i2iv"
      initialValue="<p>Initial editor content</p>"
      :init="{
        height: 300,
        menubar: true,
        init_instance_callback: function (editor2) {
                initContent2();
            },
        plugins: [
          'advlist autolink lists link image charmap',
          'searchreplace visualblocks code fullscreen',
          'print preview anchor insertdatetime media',
          'paste code help wordcount table'
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | help'
      }"
    >
    </editor2>
      <div class="col-md-7" style="text-align: right">
    <!-- <button
      id="fetchen"
      type="button"
      class="btn btn-primary"
      name="Fetch"
      @click="fetchen()"
    >
      Fetch
    </button> -->
    <button
      id="bewaren"
      type="button"
      class="btn btn-primary"
      name="save"
      @click="save()"
    >
      Bewaar
    </button>
    <div>Hier komt de content</div>
    <div>
     {{blog.body}}
    </div>
    <div>Dit was de content</div>
  </div>
  </div>
  </div>
</template>
<script>
  import Editor from '@tinymce/tinymce-vue'
  import {
  updateVersion,
  } from '../../services/ApiService';

  export default {
    name: 'BlogEdit',
    components: {
      editor: Editor,
      editor2: Editor
    },
    props: [
      'blog',
    ],
    data() {
      return {
        myContent: null,
        tempUrl: 'https://rest-tofapi-1579971100341.azurewebsites.net/admin/posts/',
      };
    },
    created: function() {
      // tinyMCE.activeEditor.setContent('<span>some</span>');
      // tinyMCE.get('editing_field').setContent('your default text');
      // tinyMCE.activeEditor.setContent('some')
    },
    methods: {
      // fetchen: function() {
      //   this.myContent = tinymce.activeEditor.getContent();
      // },
      // initContent: function(){
      //   tinyMCE.editors[0].setContent(this.blog.title)
      // },
      // initContent2: function(){
      //   tinyMCE.editors[1].setContent(this.blog.body)
      // },
      // save: async function() {
      //   //Title is filled with the slug???, so.....:
      //   this.blog.title, this.blog.slug = tinyMCE.editors[0].getContent();
      //   this.blog.body = tinyMCE.editors[1].getContent();

      //   this.isSuccessful = await updateVersion(this.tempUrl, this.blog, this.blog.id);
      //   if (this.isSuccessful === true) {
      //     // alert('gelukt :-)');
      //   } else {
      //     // alert('Mislukt :-(');
      //   }
      // },
    },
  }
</script>
<style scoped>
.jumbotron{
  background-image: url("../../assets/nachtlucht.gif");
}
.p {
   margin-top:5px;
   margin-bottom:5px
}
</style>
