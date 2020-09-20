<template>
  <footer class="footer main">
    <section class="footer__about">
      <Logo class="footer__element__logo" />
      <p class="footer__about__text">
        {{ stopka.companyDescription }}
      </p>
    </section>
    <section class="footer__elements" v-if="!$apollo.loading">
      <div class="footer__element">
        <h3 class="footer__element__header">{{ navigationHeader }}</h3>
        <ul>
          <li v-for="(link, index) in this.$route.query.lang ? linksEng : links" :key="index">
            <nuxt-link
              :to="`/${link.to}`"
              tag="a"
              class="footer__element__link"
              >{{ link.caption }}</nuxt-link
            >
          </li>
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
      Icons made by Freepik from www.flaticon.com. Theme
      by unyfox.
    </p>
  </footer>
</template>

<script>
import QUERY_PL from "~/apollo/pl/getKontakt.gql";
import QUERY_ENG from "~/apollo/eng/getKontakt.gql";

export default {
  apollo: {
    stopka: {
      query() {
        if (this.$route.query.lang) {
          return QUERY_ENG
        } else {
          return QUERY_PL
        }
      }
    }
  },
  data() {
    return {
      stopka: Object,
      navigationHeader: this.$route.query.lang ? "Useful links" : "Przydatne linki",
      links: [
        { to: "", caption: "O firmie" },
        { to: "", caption: "Detektyw" },
        { to: "", caption: "Windykacja" },
        { to: "", caption: "Informacja Gospodarcza" },
        { to: "", caption: "Ochrona biznesu" },
        { to: "", caption: "Szkolenia" },
        { to: "", caption: "Cennik" },
        { to: "", caption: "Kontakt" }
      ],
      linksEng: [
        { to: "detektyw", caption: "Detective" },
        { to: "windykacja", caption: "Debt collection" },
        { to: "informacja-gospodarcza", caption: "Business Intelligence" },
        { to: "ochrona-biznesu", caption: "Business protection" },
        { to: "szkolenia", caption: "Workshops" },
        { to: "cennik", caption: "Pricing" },
        { to: "kontakt", caption: "Contact" }
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
