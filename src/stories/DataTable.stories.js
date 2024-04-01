import DataTable from "../components/DataTable";
import { fn } from "@storybook/test";

export default {
  title: "App/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  args: { setPage: fn() },
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
