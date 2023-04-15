<template>
  <button 
    class="btn btn-primary"
    @click="$emit('on:click')">

    <i class="fa fa-2x"
      :class="icon"
    ></i>
  </button>
</template>

<script>
export default {
  name: "Fab",
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
  data() {
    return {
      // icon: "fa-plus",
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  border-radius: 50%;
  bottom: 20px;
  height: 80px;
  right: 20px;
  width: 80px;
}
</style>
