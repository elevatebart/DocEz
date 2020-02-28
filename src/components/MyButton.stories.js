import { action } from "@storybook/addon-actions";

import MyButton from "./MyButton.vue";

export default {
  component: MyButton,
  title: "Button"
};

export const withDefaultColor = () => ({
  render() {
    return <MyButton onClick={action("Default")}>Default Button</MyButton>;
  }
});

export const withColorRed = () => ({
  render() {
    return (
      <MyButton color="red" onClick={action("withColorRed")}>
        Dangerous Button
      </MyButton>
    );
  }
});
