import DataTableBody from "../components/DataTableBody";

export default {
  title: "App/DataTableBody",
  component: DataTableBody,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <DataTableBody {...args} />;

export const WithData = Template.bind({});
WithData.args = {
  tagsPerPage: 5,
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
OnLoading.args = {
  loading: true,
};

export const OnError = Template.bind({});
OnError.args = {
  loading: false,
  error: true,
};
