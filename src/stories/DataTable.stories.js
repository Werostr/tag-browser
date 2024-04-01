import DataTable from "../components/DataTable";
import { fn } from "@storybook/test";

export default {
  title: "App/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  args: { setPage: fn() },
};

const Template = (args) => <DataTable {...args} />;

export const WithData = Template.bind({});
WithData.args = {
  tags: [
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
    { name: "example", count: 1 },
  ],
  loading: false,
};

export const OnLoading = Template.bind({});

export const OnError = Template.bind({});
OnError.args = {
  error: true,
  loading: false,
};
