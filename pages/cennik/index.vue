<template>
  <div>
    <Header :background="background && background.url">{{ $t("nav_pricing") }}</Header>
    <div class="body main">
      <div class="body__text" v-html="$md.render($i18n.locale === 'en' ? body_eng : body)"></div>
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
      return data.cennik
    });
  },
}
</script>

<style lang="scss" scoped>

</style>