<template>
  <div class="panel" :class="{ main: !narrow, 'panel--narrow': narrow }">
    <nuxt-link
      class="panel__tab"
      tag="div"
      v-for="(tab, index) in tabs"
      :key="`tab${index}`"
      :to="`/${tab.link}`"
    >
      <span class="panel__tab__icon" :class="`flaticon-${tab.icon}`" />
      <p class="panel__tab__caption">{{ $t(`side_${tab.caption}`) }}</p>
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
      tabs: [
        {
          icon: "gavel",
          caption: "detective_1",
          link: "detektyw"
        },
        {
          icon: "loan",
          caption: "debt_collection_1",
          link: "windykacja"
        },
        {
          icon: "portfolio",
          caption: "business_intelligence_1",
          link: "informacja-gospodarcza"
        },
        {
          icon: "envelope",
          caption: "business_protection_1",
          link: "ochrona-biznesu"
        },
        {
          icon: "baby-monitor",
          caption: "detective_2",
          link: "detektyw"
        },
        {
          icon: "network",
          caption: "business_protection_2",
          link: "ochrona-biznesu"
        },
        {
          icon: "teamwork",
          caption: "business_protection_3",
          link: "ochrona-biznesu"
        },
        {
          icon: "danger",
          caption: "workshops_1",
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
  background-color: color(accents);
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
  color: color(accents);
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
