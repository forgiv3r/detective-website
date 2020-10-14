<template>
  <nav class="navigation main" :class="{ 'navigation--triggered': scroll }">
    <div class="navigation__icons">
      <nuxt-link
        :to="{ path: '/', query: { lang: $route.query.lang } }"
        class="navigation__icons__logo"
      >
        <Logo :showSpider="scroll > 0" />
      </nuxt-link>
      <div class="navigation__bars" @click="toggleNav" ref="bars">
        <span class="navigation__bar"></span>
        <span class="navigation__bar"></span>
        <span class="navigation__bar"></span>
      </div>
      <ul class="navigation__links main" ref="navigation" @click="toggleNav">
        <nuxt-link
          tag="li"
          :to="{ path: link.to, query: { lang: $route.query.lang } }"
          v-for="(link, index) in this.$route.query.lang ? linksEng : links"
          :key="`link-${index}`"
        >
          {{ link.caption }}
        </nuxt-link>
        <!-- <img ref="languageFlag" @click="toggleLanguage" /> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scroll: 0,
      links: [
        { to: "/detektyw", caption: "Detektyw" },
        { to: "/windykacja", caption: "Windykacja" },
        { to: "/informacja-gospodarcza", caption: "Informacja Gospodarcza" },
        { to: "/ochrona-biznesu", caption: "Ochrona biznesu" },
        { to: "/szkolenia", caption: "Szkolenia" },
        { to: "/cennik", caption: "Cennik" },
        { to: "/kontakt", caption: "Kontakt" }
      ],
      linksEng: [
        { to: "/detektyw", caption: "Detective" },
        { to: "/windykacja", caption: "Debt collection" },
        { to: "/informacja-gospodarcza", caption: "Business Intelligence" },
        { to: "/ochrona-biznesu", caption: "Business protection" },
        { to: "/szkolenia", caption: "Workshops" },
        { to: "/cennik", caption: "Pricing" },
        { to: "/kontakt", caption: "Contact" }
      ]
    };
  },
  methods: {
    toggleNav() {
      const target = event.target;
      const navigation = this.$refs.navigation;
      const bars = this.$refs.bars.children;

      if (!target.classList.contains("navigation__links")) {
        if (target.classList.contains("logo")) {
          navigation.classList.remove("navigation__links--toggled");
          bars[0].classList.remove("rotated");
          bars[1].classList.remove("hidden");
          bars[2].classList.remove("rotated-reverse");
        } else {
          navigation.classList.toggle("navigation__links--toggled");
          bars[0].classList.toggle("rotated");
          bars[1].classList.toggle("hidden");
          bars[2].classList.toggle("rotated-reverse");
        }
      }
    },
    toggleLanguage() {
      const query = this.$route.query.lang === "eng" ? null : { lang: "eng" };
      this.$router.push({ query });
      setTimeout(this.$router.go);
    },
    setLanguageLinkText() {
      const lang = this.$route.query.lang;
      let icon = "uk";
      if (lang === "eng") {
        icon = "pl";
      }
      this.$refs.languageFlag.src = require(`../assets/icons/${icon}.svg`);
    }
  },
  mounted() {
    // this.setLanguageLinkText();
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
}

.navigation__icons__logo {
  z-index: 10000;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.navigation__icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation__bars {
  height: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;

  .navigation__bar {
    width: 30px;
    height: 1.5px;
    background-color: white;
    transition: all 0.3s;
    transform-origin: 0 0;
  }
}

.navigation__links {
  height: 100vh;
  width: 100%;
  padding-top: 20vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: color(primary);
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
  margin: 0;
  li,
  a {
    font-size: 17px;
    margin-bottom: 0.5rem;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  img {
    height: 30px;
    width: 50px;
    cursor: pointer;
  }
}

.navigation__links--toggled {
  transform: translateX(0);
}

.hidden {
  opacity: 0;
}

.rotated {
  transform: rotate(36deg);
}

.rotated-reverse {
  transform: rotate(-40deg);
  width: 30px !important;
}

@media (min-width: 1292px) {
  .navigation {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .navigation__bars {
    display: none;
  }

  .navigation__links {
    transform: translateX(0);
    background-color: initial;
    position: static;
    height: auto;
    flex-direction: row;
    font-size: 15px;
    padding: 0;
    align-items: center;
    justify-content: flex-end;

    li,
    a {
      margin: 0 1rem;
      position: relative;
    }

    li::before,
    a::before {
      content: "";
      width: 0;
      left: 0;
      height: 1px;
      position: absolute;
      bottom: -6px;
      background-color: white;
      transition: all 0.3s;
    }

    li:hover,
    a:hover {
      &::before {
        width: 100%;
      }
    }
  }
}

.navigation--triggered {
  background-color: color(accents);
  box-shadow: 0px 2px 10px color(primary);
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
