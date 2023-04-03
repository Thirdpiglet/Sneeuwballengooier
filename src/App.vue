<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import aad from "./services/aad";
export default {
  name: "App",
  components: {
  },  
  data: () => ({
  }),

  created() {
  },

  methods: {
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
  object-fit: contain;
}
.name {
  color: white;
}
</style>
