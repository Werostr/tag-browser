import OrderButton from "../components/OrderButton";
import { fn } from "@storybook/test";

export default {
  title: "App/OrderButton",
  component: OrderButton,
  tags: ["autodocs"],
  args: { onClick: fn() },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <OrderButton {...args} />;

export const Default = Template.bind({});
