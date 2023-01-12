

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {SeekBar} from './SeekBar'
const SeekBarMeta: ComponentMeta<typeof SeekBar> = {
    title: 'Slider Music',
    component: SeekBar,
    argTypes:{

    },
    args: {

        
        
        
        

    }
}
export default SeekBarMeta;

type SliderStory = ComponentStory<typeof SeekBar>
export const BasicHeader : SliderStory = (args) => <SeekBar {...args} />
export const BasicPause : SliderStory = (args) => <SeekBar {...args} />
BasicPause.args = {
    ...BasicHeader.args,
    
      
}


