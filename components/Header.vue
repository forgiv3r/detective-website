<template>
  <header class="header main" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('${image}')` }">
    <transition name="slide-up" appear>
      <h1 class="header__text">
        <slot></slot>
      </h1>
    </transition>
  </header>
</template>

<script>
  export default {
    props: {
      background: {
        type: String, 
      }
    },
    computed: {
      image() {
        if (this.background) {
          return this.background 
        } else {
          return "https://images.unsplash.com/photo-1565018968331-61145555526b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-size: cover;
    background-position: center;
    height: 45vh;
  }

  .header__text {
    color: white;
  }

  @media (min-width: 1024px) {
    .header {
      height: 35rem;
    }
  }
</style>