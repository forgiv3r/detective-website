<template>
  <div class="landing main" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${background}')` }">
    <transition name="fade" mode="out-in" appear>
      <div class="landing__content" :key="current">
        <h1>{{ currentInfo.title }}</h1>
        <p>{{ currentInfo.text }}</p>
        <BaseButton type="primary" :on-click="scrollDown">Więcej</BaseButton>
      </div>
    </transition>
    <div class="landing__dots">
      <div
        class="landing__dot"
        :class="{ active: current == n - 1 }"
        v-for="n in infos.length"
        :key="n"
        @click="switchInfo(n)"
      ></div>
    </div>
    <div class="landing__hook" ref="scrollHook"></div> 
  </div>
</template>

<script>
export default {
  props: {
    infos: {
      type: Array, 
      required: true, 
    },
    background: {
      type: String, 
      default: "https://images.unsplash.com/photo-1565018968331-61145555526b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
    },
  },
  data() {
    return {
      current: 0,
      interval: null
    };
  },
  computed: {
    currentInfo() {
      return this.infos[this.current];
    }
  },
  methods: {
    switchInfo(index) {
      clearInterval(this.interval);
      index ? (this.current = index - 1) : this.current++;
      if (this.current == this.infos.length) {
        this.current = 0;
      }
    },
    scrollDown() {
      this.$refs.scrollHook.scrollIntoView({ behavior: 'smooth' })
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.switchInfo();
    }, 10000);
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss" scoped>
.landing {
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  // background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1565018968331-61145555526b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80");
}

.landing__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.landing__content p {
  width: 90%;
}

.landing__dots {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  .landing__dot {
    height: 6px;
    width: 6px;
    background-color: white;
    border-radius: 50%;
    margin: 0 0.3rem;
    transition: all .3s;
    cursor: pointer;
  }

  .active {
    height: 10px;
    width: 10px;
  }
}

.landing__hook {
  position: absolute;
  bottom: 0;
}

@media (min-width: 1024px) {
  .landing__content {
    width: 70%;

    p {
      font-size: 1rem;
    }
  }
}
</style>
