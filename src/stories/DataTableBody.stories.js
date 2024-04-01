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

export const Default = Template.bind({});
