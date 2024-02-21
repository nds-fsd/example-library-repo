import React from 'react';
import Text from './text';

export default {
    title: 'Text',
    component: Text,
    argTypes: {
        text: 'Hello Wolrd!',
    },  
};

const TextTemplate = (args) => <Text {...args} />;

export const Default = TextTemplate.bind({});

export { TextTemplate };