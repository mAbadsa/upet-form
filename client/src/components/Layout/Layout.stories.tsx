import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Layout from ".";

export default {
  title: "Components/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Add",
};

