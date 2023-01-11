import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { IITImage } from "./Image";

const IITImageMeta: ComponentMeta<typeof IITImage> = {
  title: "Image Adele",
  component: IITImage,
  argTypes: {
   
   
  },
  args: {
    title: "",
    description:"",
  },
};

export default IITImageMeta;

type IITImageStory = ComponentStory<typeof IITImage>;

export const Basic: IITImageStory = (args) => <IITImage {...args} />;


export const CustomColorButton: IITImageStory = (args) => <IITImage {...args} />;
CustomColorButton.args={
    ...Basic.args,
    // colorButton: "red",
 }

