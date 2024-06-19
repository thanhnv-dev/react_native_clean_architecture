import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeStack from './stacks/HomeStack';
import AuthStack from './stacks/AuthStack';
import NavigationKey from '../constants/enum/navigation.key';
import HideHeaderStack from '../core/components/HideHeaderStack';

const Stack = createNativeStackNavigator();

const AppNaviagtor = () => {
    return (
        <NavigationContainer>
            <HideHeaderStack initialRouteName={NavigationKey.AuthStack}>
                <Stack.Screen
                    name={NavigationKey.AuthStack}
                    component={AuthStack}
                />
                <Stack.Screen
                    name={NavigationKey.HomeStack}
                    component={HomeStack}
                />
            </HideHeaderStack>
        </NavigationContainer>
    );
    // }
};

export default AppNaviagtor;
