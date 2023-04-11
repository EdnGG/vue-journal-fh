<template>
  <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: 10}})">
    <!-- title -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">July</span>
      <span class="mx-2 fw-ligth">2021, Thursday</span>
    </div>
    <div class="entry-description">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero veritatis corporis esse, sunt, commodi amet dicta odio similique accusamus quas maxime consectetur animi! Dicta eum eos officiis ullam ad animi.
    </div>
  </div>
</template>

<script>
export default {};
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
