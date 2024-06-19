import React, {ReactNode} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type HideHeaderStackType = {
    children: ReactNode;
    initialRouteName?: string | undefined;
};

const Stack = createNativeStackNavigator();

const HideHeaderStack: React.FC<HideHeaderStackType> = ({
    children,
    initialRouteName,
}) => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={initialRouteName}>
            {children}
        </Stack.Navigator>
    );
};

export default HideHeaderStack;
