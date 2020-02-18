<template>
  <button :class="`button ${colorClass}`" @click="onClick">
    <!-- @slot text of the button -->
    <slot></slot>
  </button>
</template>

<script>
const COLOR_MAP = {
  blue: "is-primary",
  green: "is-success",
  red: "is-danger"
};

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

<docs>
### General guidance

**Buttons are used to initialize an action.** Button labels express what action will occur when the user interacts with it.

**Buttons are used primarily for actions.** Examples include Add, Save, Delete, and Sign up. Each page should have one primary button, and a Return or Enter keyboard event should trigger it. Any remaining calls-to-action should be represented as secondary buttons.

**Do not use buttons as navigational elements.** Instead, use links when the desired action is to take the user to a new page.

**Primary buttons always appear to the right.** Secondary buttons appear to the left of the primary button.

```vue
<my-button>Live Examples</my-button>
```
</docs>
