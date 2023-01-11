

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {PlayButton}  from './PlayButton'
const PlayButtonMeta: ComponentMeta<typeof PlayButton> = {
    title: 'PlayButton Component',
    component: PlayButton,
    argTypes:{

    },
    args: {

        backgroundColor : "blue",
        icon :  <AntDesign name="play" size={24} color="red" />,
        onClickButton : ()=> {console.log("Onclick")}
        

    }
}
export default PlayButtonMeta;

type PlayButtonStory = ComponentStory<typeof PlayButton>
export const BasicPlay : PlayButtonStory = (args) => <PlayButton {...args} />
export const BasicPause : PlayButtonStory = (args) => <PlayButton {...args} />
BasicPause.args = {
    ...BasicPlay.args,
    
        icon : <AntDesign name="pause" size={24} color="white" />
    
}

export const BasicPlay2 : PlayButtonStory = (args) => <PlayButton {...args} />
BasicPlay2.args = {
    ...BasicPlay.args,
    
        icon : <Entypo name="controller-play" size={24} color="black" />
    
}

