import TagBrowser from "../components/TagBrowser";

export default {
  title: "App/TagBrowser",
  component: TagBrowser,
  tags: ["autodocs"],
};

const Template = (args) => <TagBrowser {...args} />;

export const Default = Template.bind({});
