<template>
  <input class="base-input" :placeholder="placeholder" />
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
.base-input {
  border-radius: 0;
  margin: 0;
  border: 1px solid color(text);
  outline: none;
  padding: 0 1rem;
  height: 50px;
  font-family: inherit;
  transition: border-color .3s ease-out;
  &:focus {
    border-color: color(primary);
  }
}
</style>
