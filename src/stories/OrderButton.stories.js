import OrderButton from "../components/OrderButton";

export default {
  title: "App/OrderButton",
  component: OrderButton,
  tags: ["autodocs"],
};

const Template = (args) => <OrderButton {...args} />;

export const Default = Template.bind({});
