<template>
  <div>
    <Landing :infos="infos" :background="background" />
  </div>
</template>

<script>
import Landing from "~/components/Landing";
import mainQuery from "~/apollo/getMainPage.gql"

export default {
  components: { Landing },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery })
      .then(({ data }) => {
        return {
          background: data.stronaGlowna.background.url,
          infos: data.stronaGlowna.posts
        }
      });
  },
  
};
</script>

<style></style>
