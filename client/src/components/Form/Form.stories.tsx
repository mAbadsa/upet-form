import { ComponentMeta, ComponentStory } from "@storybook/react";
import Form from "./";
import Button from "../Button";

export default {
  title: "Components/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const MediumForm = Template.bind({});
MediumForm.args = {
  children: Button,
};

