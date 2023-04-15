<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
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
    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea
        placeholder="What Happened Today?"
        v-model="entry.text"
      ></textarea>
    </div>

    <img
      src="https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
      alt="Entry image"
      class="img-thumbnail"
    />
  </template>

  <Fab icon="fa-save" @on:click="saveEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
  name: "EntryView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      entry: null,
    };
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  computed: {
    ...mapGetters("journalModule", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions("journalModule", ["updateEntry"]),
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) this.$router.push({ name: "no-entry" });
      this.entry = entry;
    },
    async saveEntry() {
      await this.updateEntry(this.entry);
    },
    async saveEntry2() {
      console.log("saveEntry2");
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
  // updated() {
  //   this.loadEntry();
  // },
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
