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

export const NoPages = Template.bind({});
NoPages.args = {
  page: 0,
  pagesNumber: 0,
};

export const Under8Pages = Template.bind({});
Under8Pages.args = {
  page: 1,
  pagesNumber: 7,
};

export const Over8Pages = Template.bind({});
Over8Pages.args = {
  page: 1,
  pagesNumber: 15,
};
