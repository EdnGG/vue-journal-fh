<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <!-- title -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{day}}</span>
      <span class="mx-1 fs-5">{{month}}</span>
      <span class="mx-2 fw-ligth">{{yearDay}}</span>
    </div>
    <div class="entry-description">
      {{ entry.text }} 
    </div>
  </div>
</template>

<script>
import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
  name: "Entry",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length >= 130
        ? this.entry.text.substring(0, 130) + "..."
        : this.entry.text;
    },
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
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s ease-in all;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s ease-in all;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
