<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search" />
    </div>
    <div class="entry-scrollarea">
      <Entry v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  height: calc(100vh - 56px);
  border-right: 1px solid #2c3e50;
}
.entry-scrollarea {
  overflow: scroll;
  height: calc(100vh - 103px);
}
</style>
