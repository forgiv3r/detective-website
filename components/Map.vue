<template>
<div class="map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9310808631217!2d21.010344087957684!3d52.226469921969795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf27509b481%3A0x2877d17f3f8b8124!2sJaran%20Biuro%20Detektywistyczne!5e0!3m2!1spl!2spl!4v1599038927626!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .map {
    overflow: hidden;
    padding: 2rem;
    padding-bottom: 100%;
    position:relative;
    width: 100%;
  }
  
  .map iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
@media (min-width: 1024px) {

  .map {
    padding-bottom: 25%;
    margin: 0;
  }
}
</style>