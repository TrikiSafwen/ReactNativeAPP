

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {Header}  from './Header'
const HeaderMeta: ComponentMeta<typeof Header> = {
    title: 'Header Component',
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
export const BasicPause : HeaderStory = (args) => <Header {...args} />
BasicPause.args = {
    ...BasicHeader.args,
    
       message : "Next Playing"
}


