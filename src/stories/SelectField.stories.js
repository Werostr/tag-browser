import SelectField from "../components/SelectField";

export default {
  title: "App/SelectField",
  component: SelectField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
