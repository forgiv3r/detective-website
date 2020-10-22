<template>
  <div class="logo__container">
    <img class="logo" src="../assets/logo/logo-stare.png" alt="Jaran" />
    <img
      v-if="showSpider"
      class="spider"
      src="../assets/logo/pajak.png"
      alt="Jaran"
    />
  </div>
</template>

<script>
export default {
  props: {
    showSpider: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss" scoped>
.logo__container {
  display: flex;
  align-items: center;
  max-width: 270px;
}

.logo {
  transform: scale(0.8);
  transform-origin: left center;
  display: flex;
}

.spider {
  display: none;
}

@media (min-width: 430px) {
  .spider {
    height: 50px;
    transform: translateX(-75px);
    display: inline-block;
  }
}
</style>
