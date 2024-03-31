import DataTable from "../components/DataTable";

export default {
  title: "App/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
