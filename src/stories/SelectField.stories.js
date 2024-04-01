import SelectField from "../components/SelectField";

export default {
  title: "App/SelectField",
  component: SelectField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

// const Template = (args) => <SelectField {...args} />;

// export const Default = Template.bind({});
export const View = {
  args: {
    fieldName: "view",
    variant: "standard",
    value: 5,
    width: 45,
    options: [5, 10, 16],
  },
};

export const DisabledView = {
  args: {
    fieldName: "view",
    variant: "standard",
    value: 5,
    width: 45,
    options: [5, 10, 16],
    disabled: true,
  },
};

export const Sort = {
  args: {
    fieldName: "sort",
    variant: "standard",
    value: "popular",
    width: 80,
    options: ["popular", "activity", "name"],
  },
};

export const DisabledSort = {
  args: {
    fieldName: "sort",
    variant: "standard",
    value: "popular",
    width: 80,
    options: ["popular", "activity", "name"],
    disabled: true,
  },
};
