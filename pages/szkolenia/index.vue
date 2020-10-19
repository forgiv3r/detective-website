<template>
  <div>
    <Header :background="background && background.url">{{
      $t("nav_workshops")
    }}</Header>
    <div class="body main">
      <div class="body__text" v-html="$md.render($i18n.locale === 'en' ? body_eng : body)"></div>
      <SidePanel narrow />
    </div>
    <ContactForm />
  </div>
</template>

<script>
import mainQuery from "~/apollo/getSzkolenia.gql";
export default {
  nuxtI18n: {
    locales: ['pl']
  },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return data.szkolenia
    });
  },
};
</script>

<style lang="scss" scoped></style>
