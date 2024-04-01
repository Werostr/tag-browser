import DataTableHead from "../components/DataTableHead";

export default {
  title: "App/DataTableHead",
  component: DataTableHead,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <DataTableHead {...args} />;

export const Default = Template.bind({});
