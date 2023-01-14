

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {Header}  from './Header'
const HeaderMeta: ComponentMeta<typeof Header> = {
    title: 'Header exp',
    component: Header,
    argTypes:{

    },
    args: {

        message : "Now Playing",
        
        onDownPress : ()=> {console.log("Onclick")}
        

    }
}
export default HeaderMeta;

type HeaderStory = ComponentStory<typeof Header>
export const BasicHeader : HeaderStory = (args) => <Header {...args} />
export const NextHeader : HeaderStory = (args) => <Header {...args} />
NextHeader.args = {
    ...BasicHeader.args,
    
       message : "Next Playing"
}


