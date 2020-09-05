<template>
  <button
    type="button"
    class="button"
    :class="[`button-${type}`, { 'button--disabled': disabled }]"
    @click="onClick"
    :disabled="disabled">
    <slot>Przycisk</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid white;
  font-family: inherit;
  height: 50px;
  width: 150px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 10px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  padding: 0;
}

.button-primary {
  background-color: color(accents);
  color: white;
  border-color: color(accents);
  &:hover {
    background-color: white;
    color: color(accents);
  }
}

.button-secondary {
  background-color: color(primary);
  border-color: color(primary);
  color: white;
  &:hover {
    background-color: white;
    color: color(primary);
  }
}

.button-tertiary {
  background-color: color(secondary);
  border-color: color(secondary);
  color: color(primary);
  &:hover {
    background-color: white;
  }
}

.button--disabled {
  background: gray;
  border-color: gray;
  color: rgb(78, 78, 78);
  cursor: not-allowed;
  &:hover {
    background: gray;
    border-color: gray;
    color: rgb(78, 78, 78);
  }
}
</style>
