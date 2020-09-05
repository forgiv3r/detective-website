<template>
  <div>
    <Header :background="background && background.url">Informacja gospodarcza</Header>
    <div class="body main">
      <div class="body__text" v-html="$md.render(body)"></div>
      <SidePanel narrow />
    </div>
    <ContactForm />
  </div>  
</template>

<script>
import mainQuery from "~/apollo/getInformacjaGospodarcza.gql"
export default {
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return {
        body: data.informacjaGospodarcza.body, 
        background: data.informacjaGospodarcza.background
      };
    });
  },
}
</script>

<style lang="scss" scoped>

</style>