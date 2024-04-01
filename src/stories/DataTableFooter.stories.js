import DataTableFooter from "../components/DataTableFooter";
import { fn } from "@storybook/test";

export default {
  title: "App/DataTableFooter",
  component: DataTableFooter,
  tags: ["autodocs"],
  args: { setPage: fn() },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <DataTableFooter {...args} />;

export const Default = Template.bind({});
