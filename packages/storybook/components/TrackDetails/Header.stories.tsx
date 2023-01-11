

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {TrackDetails}  from './TrackDetails'
const HeaderMeta: ComponentMeta<typeof TrackDetails> = {
    title: 'Track Details',
    component: TrackDetails,
    argTypes:{

    },
    args: {

        artiste : "safwen",
        
        title : "Rap"
        

    }
}
export default HeaderMeta;

type TrackStory = ComponentStory<typeof TrackDetails>
export const BasicHeader : TrackStory = (args) => <TrackDetails {...args} />
export const BasicPause : TrackStory = (args) => <TrackDetails {...args} />
BasicPause.args = {
    ...BasicHeader.args,
    
       title : "House"
}


