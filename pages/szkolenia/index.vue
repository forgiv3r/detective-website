<template>
  <div>
    <Header :background="background && background.url">{{ mainHeader }}</Header>
    <div class="body main">
      <div class="body__text" v-html="$md.render(body)"></div>
      <SidePanel narrow />
    </div>
    <ContactForm />
  </div>  
</template>

<script>
import mainQuery from "~/apollo/pl/getSzkolenia.gql"
export default {
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return {
        body: data.szkolenia.body,
        background: data.szkolenia.background,
      };
    });
  },
  data() {
    return {
      mainHeader: this.$route.query.lang ? "Workshops" : "Szkolenia",
    }
  }
}
</script>

<style lang="scss" scoped>

</style>