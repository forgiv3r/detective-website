<template>
  <textarea class="base-textarea" :placeholder="placeholder" rows="10" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.base-textarea {
  background-color: transparent;
  display: block;
  border-radius: 0;
  margin-bottom: 1rem;
  border: 1px solid color(primary);
  outline: none;
  padding: 1rem;
  width: 100%;
  font-family: inherit;
  transition: border-color .3s ease-out;
  resize: none;
  &:focus {
    border-color: color(accents);
  }
}
</style>
