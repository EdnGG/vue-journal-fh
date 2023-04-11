<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success">15</span>
      <span class="mx-1 fs-3">July</span>
      <span class="mx-2 fs-4 fw-light">15, Thursday</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary mx-2">
        Upload Image
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What Happened Today?"></textarea>
  </div>

  <Fab icon="fa-save"/>

  <img 
  src="https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" 
  alt="Entry image"
  class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "EntryView",
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.3);
}
</style>
