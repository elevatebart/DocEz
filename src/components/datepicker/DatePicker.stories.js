import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

import DatePicker from "./Datepicker.vue";

export default {
  component: DatePicker,
  title: "DatePicker"
};

export const withAKnob = () => ({
  props: {
    close: {
      default: boolean("close on click", true)
    }
  },
  render() {
    return <DatePicker onInput={action("input")} closeOnClick={this.close} />;
  }
});
