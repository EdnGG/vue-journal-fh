<template>
  <Navbar />
  <div class="d-flex">
    <div class="col-4">
    <EntryList />
    </div>
    <div class="col">
    <h1>Content from router view</h1>
    <router-view />
    <!-- <NoEntrySelected /> -->

    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "DayBookLayout",
  components: {
    // NoEntrySelected: defineAsyncComponent(() =>
    //   import("../views/NoEntrySelected.vue")
    // ),
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>

<style></style>
