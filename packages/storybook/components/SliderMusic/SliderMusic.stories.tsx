

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import {SliderMusic}  from './SliderMusic'
const SliderMeta: ComponentMeta<typeof SliderMusic> = {
    title: 'Slider 2',
    component: SliderMusic,
    argTypes:{

    },
    args: {
        trackLength: 150,
        currentPosition : 10,
        

    }
}
export default SliderMeta;

type SliderStory = ComponentStory<typeof SliderMusic>
export const BasicHeader : SliderStory = (args) => <SliderMusic {...args} />
export const BasicPause : SliderStory = (args) => <SliderMusic {...args} />
BasicPause.args = {
    ...BasicHeader.args,
    
        trackLength: 220,
        currentPosition : 8,
}


