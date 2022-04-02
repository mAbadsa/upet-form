import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField from "./";

export default {
  title: "Components/TextField",
  Component: TextField,
} as ComponentMeta<typeof TextField>;

const template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const OutlinedPrimary = template.bind({});
OutlinedPrimary.args = {
  variant: "filled",
  color: "primary",
  label: "First Name",
  size: "medium",
  fullWidth: false,
};

export const OutlinedFullWidthPrimary = template.bind({});
OutlinedFullWidthPrimary.args = {
  variant: "filled",
  color: "primary",
  label: "First Name",
  size: "small",
  fullWidth: true,
};
