<template>
  <div>
    <Landing :infos="infos" :background="background" />
    <div class="body main">
      <div class="body__text" v-html="$md.render(body)"></div>
      <SidePanel narrow />
    </div>
    <!-- <Reminder /> -->
    <ContactForm />
  </div>
</template>

<script>
import Landing from "~/components/Landing";
import Reminder from "~/components/Reminder"
import mainQuery from "~/apollo/getStronaGlowna.gql";

export default {
  components: { Landing, Reminder },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return {
        background: data.stronaGlowna.background.url,
        infos: data.stronaGlowna.posts,
        body: data.stronaGlowna.body
      };
    });
  },
};
</script>
