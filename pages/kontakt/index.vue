<template>
  <div>
    <Header>Kontakt</Header>
    <div class="contact main">
      <ContactForm class="contact__form" />
      <div class="contact__address">
        <h3 class="contact__address__header">Spotkajmy się</h3>
        <p>Nasze biuro znajduje się w odległości niespełna 400 metrów od Pałacu
        Kultury i Nauki. Zapraszamy na ulicę Poznańską w Warszawie, choć możemy
        spotkać się w innym uzgodnionym miejscu.</p>
        <h3 class="contact__address__header">Adres</h3>
        <ul>
          <li v-for="entry in stopka.tabs[1].entries" :key="entry.id">
            {{ entry.entry }}
          </li>
        </ul>
        <!-- <img class="contact__address__image" src="http://jaran.com.pl/wp-content/uploads/2012/10/mapka3.jpg" alt="map"> -->
      </div>
    </div>
    <Map />
  </div>
</template>

<script>
import mainQuery from "~/apollo/getStopka.gql"
import Map from "~/components/Map";

export default {
  components: { Map },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return {
        stopka: data.stopka
      };
    });
  },
};
</script>

<style lang="scss" scoped>
.contact__form {
  padding: 0;
  background-color: white !important;
}

.contact__address {
  height: 100%;
  width: 100%;
  background-color: color(text);
  flex-basis: 30%;
  padding: 2rem;
}

// .contact__address__image {
//   width: 100%;
// }

.contact__address__header {
  color: color(accents);
}

@media (min-width: 1024px) {
  .contact {
    display: flex;
    padding-top: 8%;
    padding-bottom: 8%;
    justify-content: space-between;
  }
  
  .contact__address {
    margin-left: 5%;
  }
}
</style>
