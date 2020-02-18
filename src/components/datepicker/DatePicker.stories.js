import { action } from "@storybook/addon-actions";

import DatePicker from "./Datepicker.vue";

export default {
  component: DatePicker,
  title: "Date Picker"
};

export const basic = () => ({
  render() {
    return <DatePicker onInput={action("input")} />;
  }
});
