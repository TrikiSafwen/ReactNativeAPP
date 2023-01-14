

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
        iconbb:"",
        iconb:"",
        iconp:"",
        iconf:"",
        iconff:"",
       
        
        
        
        

    }
}
export default ControlMeta;

type ControlStory = ComponentStory<typeof ControlMusic>
export const ControlM1 : ControlStory = (args) => <ControlMusic {...args} />
export const ControlM2 : ControlStory = (args) => <ControlMusic {...args} />
ControlM2.args = {
    ...ControlM1.args,
         
        iconb:"",
        iconp:"",
        iconf:"",
        
      
}


