

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {TrackDetails}  from './TrackDetails'
const TrackMeta: ComponentMeta<typeof TrackDetails> = {
    title: 'Track Details',
    component: TrackDetails,
    argTypes:{

    },
    args: {

        artiste : "safwen",
        
        title : "Rap"
        

    }
}
export default TrackMeta;

type TrackStory = ComponentStory<typeof TrackDetails>
export const TrackD1 : TrackStory = (args) => <TrackDetails {...args} />
export const TrackD2 : TrackStory = (args) => <TrackDetails {...args} />
TrackD2.args = {
    ...TrackD1.args,
      artiste : "Mohamed",
       title : "House"
}


