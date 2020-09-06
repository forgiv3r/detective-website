<template>
  <div
    class="panel"
    :class="{ main: !narrow, 'panel--narrow': narrow }"
    :style="{ backgroundColor: `#${colors[currentColor]}` }"
  >
    <div class="colors">
      <button type="button" @click="currentColor > 0 ? currentColor-- : 0">
        <
      </button>
      <p>Kolor {{ currentColor + 1 }}</p>
      <button
        type="button"
        @click="
          currentColor < colors.length - 1
            ? (currentColor = currentColor + 1)
            : (currentColor = colors.length - 1)
        "
      >
        >
      </button>
    </div>
    <nuxt-link
      class="panel__tab"
      tag="div"
      v-for="(tab, index) in tabs"
      :key="`tab${index}`"
      :to="`/${tab.link}`"
    >
      <span
        class="panel__tab__icon"
        :class="`flaticon-${tab.icon}`"
        :style="{
          color: `#${colors[currentColor]}`,
          outlineColor: `#${colors[currentColor]}`
        }"
      />
      <p class="panel__tab__caption">{{ tab.caption }}</p>
      <span class="flaticon-right-chevron" v-if="narrow" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    narrow: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      currentColor: 0,
      colors: [
        "1976D2",
        "7F534B",
        "8C705F",
        "A3320B",
        "7A542E",
        "A44200",
        "D58936",
        "902D41",
        "7C3626",
        "92140C",
      ],
      tabs: [
        {
          icon: "gavel",
          caption:
            "Masz kłopoty w sprawach gospodarczych, karnych, cywilnych, rozwodowych?",
          link: "detektyw"
        },
        {
          icon: "loan",
          caption:
            "Dłużnik nie wywiązuje się z zobowiązań finansowych wobec Ciebie?",
          link: "windykacja"
        },
        {
          icon: "portfolio",
          caption:
            "Chcesz mieć wiedzę o swoim kontrahencie bądź przeciwniku biznesowym?",
          link: "informacja-gospodarcza"
        },
        {
          icon: "envelope",
          caption:
            "Tajemnice Twojego przedsiębiorstwa dostały się w niepowołane ręce?",
          link: "ochrona-biznesu"
        },
        {
          icon: "baby-monitor",
          caption: "Podejrzewasz zdradę bliskiej Ci osoby?",
          link: "detektyw"
        },
        {
          icon: "network",
          caption: "Podejrzewasz, że jesteś szpiegowany, podsłuchiwany?",
          link: "ochrona-biznesu"
        },
        {
          icon: "teamwork",
          caption: "Twój pracownik jest nieuczciwy lub nielojalny?",
          link: "ochrona-biznesu"
        },
        {
          icon: "danger",
          caption:
            "Chcesz być świadomym zagrożeń we wrogim otoczeniu biznesowym?",
          link: "szkolenia"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.colors {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  p {
    margin: 0;
  }
}
.panel {
  // background-color: color(accents);
  color: white;
}

.panel__tab {
  margin: 1.5rem 0;
  display: flex;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 0.8;
  }
}

.panel__tab__icon {
  height: 50px;
  width: 50px;
  font-size: 26px;
  font-weight: 400;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid white;
  // color: color(accents);
  outline: 2px solid color(accents);
  outline-offset: -4px;
}

.panel__tab__caption {
  margin: 0 1rem;
}

.panel--narrow {
  padding: 2rem;
  max-width: 425px;
}

@media (min-width: 1024px) {
  .panel {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .panel__tab {
    width: 25%;
  }

  .panel--narrow {
    width: 35%;
    margin-left: 5%;
    flex-direction: column;
    .panel__tab {
      width: 100%;
    }
  }
}
</style>
