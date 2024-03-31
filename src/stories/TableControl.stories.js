import TableControl from "../components/TableControl";

export default {
  title: "App/TableControl",
  component: TableControl,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

const Template = (args) => <TableControl {...args} />;

export const Default = Template.bind({});
