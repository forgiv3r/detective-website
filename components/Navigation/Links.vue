<template>
  <ul class="links">
    <nuxt-link
      class="link"
      :class="{ animated }"
      tag="li"
      v-for="(link, index) in links"
      :to="localePath(link.to)"
      :key="`link-${index}`"
    >
      {{ $t(`nav_${link.caption}`) }}
    </nuxt-link>
    <nuxt-link
      class="link"
      :class="{ animated }"
      v-if="$i18n.locale === 'pl'"
      tag="li"
      :to="localePath('/szkolenia')"
    >
      {{ $t("nav_workshops") }}
    </nuxt-link>
  </ul>
</template>

<script>
export default {
  props: {
    animated: {
      type: Boolean
    }
  },
  data() {
    return {
      links: [
        { to: "/detektyw", caption: "detective" },
        { to: "/windykacja", caption: "debt_collection" },
        { to: "/informacja-gospodarcza", caption: "business_intelligence" },
        { to: "/ochrona-biznesu", caption: "business_protection" },
        { to: "/cennik", caption: "pricing" },
        { to: "/kontakt", caption: "contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.link {
  color: white;
  cursor: pointer;
}

.animated {
  transition: all 0.3s;
  margin: 0 .5rem;
  flex-basis: 10%;
  &:hover {
    transform: translateY(3px);
  }
}
</style>
