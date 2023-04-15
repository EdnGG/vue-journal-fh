<template>
  <Navbar />

  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Please wait...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>

  <div v-else class="d-flex">
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
import { mapActions, mapState } from "vuex";

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
  computed: {
    ...mapState("journalModule", ["isLoading"]),
  },
  methods: {
    ...mapActions("journalModule", ["loadEntries"]),
  },
  created() {
    this.loadEntries();
  },
};
</script>

<style></style>
