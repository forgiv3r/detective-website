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
          {{ this.$route.query.lang ? "Useful links" : "Przydatne linki" }}
        </h3>
        <ul>
          <nuxt-link
            v-for="(link, index) in this.$route.query.lang ? linksEng : links"
            :key="index"
            :to="{ path: link.to, query: { lang: $route.query.lang } }"
            tag="li"
            class="footer__element__link"
            >{{ link.caption }}</nuxt-link
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
import QUERY_PL from "~/apollo/pl/getKontakt.gql";
import QUERY_ENG from "~/apollo/eng/getKontakt.gql";

export default {
  async fetch() {
    let client = this.$apollo.getClient();
    const query = this.$route.query.lang ? QUERY_ENG : QUERY_PL;
    const response = await client.query({ query });
    this.stopka = response.data.stopka;
  },
  data() {
    return {
      stopka: Object,
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
