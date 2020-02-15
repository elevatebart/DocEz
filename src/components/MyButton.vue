<template>
  <button
    class="button is-primary"
    :style="`background-color:${color};color:white`"
    @click="onClick"
  >
    <!-- @slot text of the button -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    /**
     * Set the background color of the button
     * @values red, blue, green
     */
    color: {
      type: String,
      default: "blue"
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

<docs>
How to use a button

![example of makdown image](../../img/VueLand.png)

```vue
<Button>Live Examples</Button>
```
</docs>
