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
import mainQuery from "~/apollo/pl/getDetektyw.gql"
export default {
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery }).then(({ data }) => {
      return {
        body: data.detektyw.body, 
        background: data.detektyw.background
      };
    });
  },
  data() {
    return {
      mainHeader: this.$route.query.lang ? "Detective" : "Detektyw",
    }
  }
}
</script>