

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {Album}  from './Album'
const AlbumMeta: ComponentMeta<typeof Album> = {
    title: 'Album Image',
    component: Album,
    argTypes:{

    },
    args: {

        url : "put your url",
        
        onPress : ()=> {console.log("Onclick")}
        

    }
}
export default AlbumMeta;

type HeaderStory = ComponentStory<typeof Album>
export const BasicHeader : HeaderStory = (args) => <Album {...args} />
export const BasicPause : HeaderStory = (args) => <Album {...args} />
BasicPause.args = {
    ...BasicHeader.args,
    
       url : "Next url"
}


