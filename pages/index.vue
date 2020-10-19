<template>
  <div>
    <Landing
      :infos="$i18n.locale === 'en' ? posts_eng : posts"
      :background="background.url"
    />
    <div class="body main">
      <div
        class="body__text"
        v-html="$md.render($i18n.locale === 'en' ? body_eng : body)"
      ></div>
      <SidePanel narrow />
    </div>
    <Reminder />
    <ContactForm />
  </div>
</template>

<script>
import Landing from "~/components/Landing";
import Reminder from "~/components/Reminder";
import mainQuery from "~/apollo/getStronaGlowna.gql";

export default {
  components: { Landing, Reminder },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return data.stronaGlowna;
    });
  }
};
</script>
