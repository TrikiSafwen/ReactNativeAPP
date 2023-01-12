

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {ControlMusic}  from './ControlMusic'
const ControlMeta: ComponentMeta<typeof ControlMusic> = {
    title: 'Control Music',
    component: ControlMusic,
    argTypes:{

    },
    args: {

        
        
        
        

    }
}
export default ControlMeta;

type ControlStory = ComponentStory<typeof ControlMusic>
export const BasicHeader : ControlStory = (args) => <ControlMusic {...args} />
export const BasicPause : ControlStory = (args) => <ControlMusic {...args} />
BasicPause.args = {
    ...BasicHeader.args,
    
      
}


