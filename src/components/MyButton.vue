<template>
  <button :class="`button ${colorClass}`" @click="onClick">
    <!-- @slot text of the button -->
    <slot></slot>
  </button>
</template>

<script>
const COLOR_MAP = {
  // green: "is-success",
  blue: "is-primary",
  red: "is-danger"
};

export default {
  name: "my-button",
  props: {
    /**
     * Set the background color of the button
     * @values red, blue
     */
    color: {
      type: String,
      default: "blue"
    }
  },
  computed: {
    colorClass() {
      return COLOR_MAP[this.color];
    }
  },
  methods: {
    onClick() {
      /**
       * When clicking on the button this event is fired
       */
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
