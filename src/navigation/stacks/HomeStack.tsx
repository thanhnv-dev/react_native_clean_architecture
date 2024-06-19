import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from 'features/home';
import * as React from 'react';
import NavigationKey from '../../constants/enum/navigation.key';
import HideHeaderStack from '../../core/components/HideHeaderStack';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <HideHeaderStack>
            <Stack.Screen
                name={NavigationKey.HomeScreen}
                component={HomeScreen}
            />
        </HideHeaderStack>
    );
};

export default HomeStack;
