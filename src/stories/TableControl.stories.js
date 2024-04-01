import TableControl from "../components/TableControl";
import { fn } from "@storybook/test";

export default {
  title: "App/TableControl",
  component: TableControl,
  tags: ["autodocs"],
  args: {
    setTagsPerPage: fn(),
    setSortBy: fn(),
    setSortOrder: fn(),
    setPage: fn(),
  },
};

const Template = (args) => <TableControl {...args} />;

export const Default = Template.bind({});
