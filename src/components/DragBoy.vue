<template>

<div>
  <!-- <h1>Draggable DIV Element</h1>

  <p>Click and hold the mouse button down while moving the DIV element</p>

  <div id="pookjeId">
    <div id="pookjeIdheader" @click="dragElement(elmnt)">Click here to move</div>
  </div> -->

  <div v-drag>Drag me!
    <button id="buttonX" class="buttonX">
      <router-link :to="{name: 'herfst'}">
        Naar Herfst thema
      </router-link>
    </button>
  </div>

</div>

</template>

<script>
// import drag from "v-drag";
// const drag = require("v-drag");
// Vue.use(drag);
export default {
  name: 'DragBoy',
  data() {
    return {
      reRenderKey: 0,
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      elmnt: document.getElementById("pookjeId"),
    };
  },
  created() {
    this.elmnt = document.getElementById("pookjeId");
    // this.dragElement(document.getElementById("pookjeId"));
  },
  methods: {
    dragElement: function(elmnt) {
      this.pos1 = 0, this.pos2 = 0, this.pos3 = 0, this.pos4 = 0;
      if (document.getElementById(this.elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(this.elmnt.id + "header").onmousedown = this.dragMouseDown();
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        this.elmnt.onmousedown = this.dragMouseDown();
        }
    },
      dragMouseDown: function(e) {
        e = e || window.event;
        e.preventDefault(); 
        // get the mouse cursor position at startup:
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        document.onmouseup = this.closeDragElement();
        // call a function whenever the cursor moves:
        document.onmousemove = this.elementDrag;
      },
      elementDrag: function(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor this.position:
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        // set the element's new position:
        this.elmnt.style.top = (this.elmnt.offsetTop - this.pos2) + "px";
        this.elmnt.style.left = (this.elmnt.offsetLeft - this.pos1) + "px";
        // console.log(this.elmnt.style.top + ' | ' + this.elmnt.style.left);
      },
      closeDragElement: function () {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
  }
}
</script>

<style scoped>
#pookjeId {
  position: absolute;
  z-index: 9;
  background-color: #f1f1f1;
  text-align: center;
  border: 1px solid #d3d3d3;
}

#pookjeIdheader {
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #2196F3;
  color: #fff;
}
</style>
