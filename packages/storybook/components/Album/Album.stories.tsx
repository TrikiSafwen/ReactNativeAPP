

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
        
       
        

    }
}
export default AlbumMeta;

type AlbumStory = ComponentStory<typeof Album>
export const AlbumImage1 : AlbumStory = (args) => <Album {...args} />
export const AlbumImage2 : AlbumStory = (args) => <Album {...args} />
AlbumImage2.args = {
    ...AlbumImage1.args,
    
       url : "Next url"
}


