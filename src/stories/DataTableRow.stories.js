import DataTableRow from "../components/DataTableRow";
import { Pagination } from "@mui/material";

export default {
  title: "App/DataTableRow",
  component: DataTableRow,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <DataTableRow {...args} />;

export const Head = Template.bind({});
Head.args = {
  cells: ["Tag", "Count"],
};

export const Body = Template.bind({});
Body.args = {
  cells: ["example", 1],
  hover: true,
};

export const Footer = Template.bind({});
Footer.args = {
  component: (
    <Pagination
      showFirstButton
      showLastButton
      shape="rounded"
      count={2}
      page={1}
    />
  ),
};

export const Error = Template.bind({});
Error.args = { cells: ["Error"], colSpan: 2, height: 53 * 5 };

export const Loading = Template.bind({});
Loading.args = { cells: ["Loading..."], colSpan: 2, height: 53 * 5 };
