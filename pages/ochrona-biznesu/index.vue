<template>
  <div>
    <Header :background="background.url">Ochrona biznesu</Header>
    <div class="body main">
      <div class="body__text" v-html="$md.render(body)"></div>
      <SidePanel narrow />
    </div>
    <ContactForm />
  </div>  
</template>

<script>
import mainQuery from "~/apollo/getOchronaBiznesu.gql"
export default {
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return {
        body: data.ochronaBiznesu.body,
        background: data.ochronaBiznesu.background,
      };
    });
  },
}
</script>

<style lang="scss" scoped>

</style>