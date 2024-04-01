import DataTableRow from "../components/DataTableRow";

export default {
  title: "App/DataTableRow",
  component: DataTableRow,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <DataTableRow {...args} />;

export const Default = Template.bind({});
