<template>
  <footer class="footer main">
    <section class="footer__about">
      <Logo class="footer__element__logo" />
      <p class="footer__about__text">
        {{ stopka.companyDescription }}
      </p>
    </section>
    <section class="footer__elements">
      <div class="footer__element">
        <h3 class="footer__element__header">
          {{ $t("footer_links_header") }}
        </h3>
        <ul>
          <nuxt-link
            v-for="(link, index) in links"
            :key="index"
            :to="localePath(link.to)"
            tag="li"
            class="footer__element__link"
            >{{ $t(`nav_${link.caption}`) }}</nuxt-link
          >
        </ul>
      </div>
      <div class="footer__element" v-for="tab in stopka.tabs" :key="tab.id">
        <h3 class="footer__element__header">{{ tab.header }}</h3>
        <ul>
          <li v-for="entry in tab.entries" :key="entry.id">
            {{ entry.entry }}
          </li>
        </ul>
      </div>
    </section>
    <p class="footer__caption">
      Icons made by Freepik from www.flaticon.com. Theme by unyfox.
    </p>
  </footer>
</template>

<script>
import mainQuery from "~/apollo/getKontakt.gql";

export default {
  async fetch() {
    let client = this.$apollo.getClient();
    const response = await client.query({ query: mainQuery });
    this.stopka = response.data.stopka;
  },
  data() {
    return {
      stopka: Object,
      links: [
        { to: "/detektyw", caption: "detective" },
        { to: "/windykacja", caption: "debt_collection" },
        { to: "/informacja-gospodarcza", caption: "business_intelligence" },
        { to: "/ochrona-biznesu", caption: "business_protection" },
        { to: "/szkolenia", caption: "workshops" },
        { to: "/cennik", caption: "pricing" },
        { to: "/kontakt", caption: "contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: color(primary);
  padding-bottom: 1rem;
  color: white;
}

.footer__element__logo {
  color: white;
}

.footer__element__header {
  color: color(accents);
}

.footer__element__link {
  cursor: pointer;
}

.footer__caption {
  border-top: 1px solid color(text);
  color: color(text);
  font-size: 12px;
  margin-bottom: 0;
  padding-top: 1rem;
}

@media (min-width: 1024px) {
  .footer__about {
    width: 40%;
  }

  .footer__elements {
    display: flex;
    flex-wrap: wrap;
  }

  .footer__element {
    width: 33%;
    padding: 1rem;
    padding-left: 0;
  }
}
</style>
