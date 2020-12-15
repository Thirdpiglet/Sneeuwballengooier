<template>
  <div>
    <hr>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
export default {
  name: 'app',
  components: {
    // HelloWorld
    appHeader: Header
  }
}
</script>

<style>
</style>
