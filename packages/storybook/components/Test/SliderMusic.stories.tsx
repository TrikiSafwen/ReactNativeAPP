

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import {Test}  from './Test'
const SliderMeta: ComponentMeta<typeof Test> = {
    title: 'Test',
    component: Test,
    argTypes:{

    },
    args: {
        trackLength: 150,
        currentPosition : 10,
        

    }
}
export default SliderMeta;

type SliderStory = ComponentStory<typeof Test>
export const BasicHeader : SliderStory = (args) => <Test {...args} />
export const BasicPause : SliderStory = (args) => <Test {...args} />
BasicPause.args = {
    ...BasicHeader.args,
    
        trackLength: 220,
        currentPosition : 8,
}


