<template>
  <input
    class="base-input"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  background-color: transparent;
  border-radius: 0;
  margin-bottom: 1rem;
  border: 1px solid color(primary);
  outline: none;
  padding: 0 1rem;
  height: 50px;
  font-family: inherit;
  transition: border-color 0.3s ease-out;
  &:focus {
    border-color: color(accents);
  }
}
</style>
