<template>
  <div>
    <Header :background="background.url">Windykacja</Header>
    <div class="body main">
      <div class="body__text" v-html="$md.render(body)"></div>
      <SidePanel narrow />
    </div>
    <ContactForm />
  </div>  
</template>

<script>
import mainQuery from "~/apollo/getWindykacja.gql"
export default {
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return {
        body: data.windykacja.body,
        background: data.windykacja.background,
      };
    });
  },
}
</script>

<style lang="scss" scoped>

</style>