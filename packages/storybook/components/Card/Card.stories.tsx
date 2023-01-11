import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { IITCard } from "./Card";

const IITCardMeta: ComponentMeta<typeof IITCard> = {
  title: "Card IIT",
  component: IITCard,
  argTypes: {
    onButtonPress: { action: "pressed the button" },
    colorButton : { control : { type : "color"} },
  },
  args: {
    title: "Hello world",
	buttonText: "button text",
  },
};

export default IITCardMeta;

type IITCardStory = ComponentStory<typeof IITCard>;

export const Basic: IITCardStory = (args) => <IITCard {...args} />;


export const CustomColorButton: IITCardStory = (args) => <IITCard {...args} />;
CustomColorButton.args={
    ...Basic.args,
    colorButton: "red",
 }