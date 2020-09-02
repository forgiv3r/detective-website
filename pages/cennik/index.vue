<template>
  <div>
    <Header>Cennik</Header>
    <div class="body main">
      <div class="body__text" v-html="$md.render(body)"></div>
      <ContactForm narrow />
    </div>
    <SidePanel />    
  </div>  
</template>

<script>
import mainQuery from "~/apollo/getCennik.gql"
export default {
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return {
        body: data.cennik.body
      };
    });
  },
}
</script>

<style lang="scss" scoped>

</style>