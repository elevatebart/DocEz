import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { text } from "@storybook/addon-knobs";

import MyButton from "./MyButton.vue";

export default {
  component: MyButton,
  title: "Button"
};

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") }
});

export const withJSX = () => ({
  props: {
    content: {
      default: text("Button Name", "Click Me")
    }
  },
  render() {
    return (
      <MyButton onClick={linkTo("Button", "With Some Emoji")}>
        {this.content}
      </MyButton>
    );
  }
});

export const withSomeEmoji = () => ({
  components: { MyButton },
  template: "<my-button>😀 😎 👍 💯</my-button>"
});
