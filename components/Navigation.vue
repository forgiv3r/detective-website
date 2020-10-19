<template>
  <nav class="navigation main" :class="{ 'navigation--triggered': scroll }">
    <nuxt-link :to="localePath('/')" class="navigation__logo">
      <Logo :showSpider="scroll > 0" />
    </nuxt-link>
    <div class="navigation__buttons">
      <nuxt-link
        tag="img"
        class="navigation__language"
        :src="
          require(`../assets/icons/${$i18n.locale === 'en' ? 'pl' : 'uk'}.svg`)
        "
        :to="switchLocalePath($i18n.locale === 'en' ? 'pl' : 'en')"
      />
      <transition name="fade" mode="out-in" :duration="100">
        <button
          class="navigation__buttons__trigger"
          :class="`flaticon-${menuVisible ? 'cancel' : 'menu'}`"
          :key="menuVisible"
          @click="toggleNav"
        />
      </transition>
    </div>
    <transition name="slide-to-left">
      <div
        class="navigation__menu main"
        @click="toggleNav"
        v-show="menuVisible"
      >
        <Links animated />
      </div>
    </transition>
  </nav>
</template>

<script>
import Links from "./Navigation/Links";
export default {
  components: { Links },
  data() {
    return {
      scroll: 0,
      menuVisible: false
    };
  },
  methods: {
    toggleNav() {
      this.menuVisible = !this.menuVisible;
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scroll = window.scrollY;
    });
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  transition: all 0.3s;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation__logo {
  cursor: pointer;
}

.navigation__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation__buttons__trigger {
  background-color: transparent;
  z-index: 10000;
  color: white;
  outline: none;
  border: none;
  height: 27px;
  font-size: 27px;
  line-height: 1;
  padding: 0;
  cursor: pointer;
}

.navigation__menu {
  height: 100vh;
  width: 100%;
  padding-top: 20vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: color(accents);
  ul {
    align-items: flex-end;
    font-size: 20px;
    margin: 0;
  }
}

.navigation__language {
  height: 30px;
  object-fit: cover;
  margin-right: 0.75rem;
  cursor: pointer;
}

.navigation--triggered {
  background-color: color(accents);
  box-shadow: 0px 2px 10px color(primary);
  padding-top: 1rem;
  padding-bottom: 1rem;
}

@media (min-width: 1024px) {
  .navigation__menu ul {
    font-size: 24px;
  }
}
</style>
