import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen, SplashScreen} from 'features/auth';
import * as React from 'react';
import NavigationKey from '../../constants/enum/navigation.key';
import HideHeaderStack from '../../core/components/HideHeaderStack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <HideHeaderStack initialRouteName={NavigationKey.SplashScreen}>
            <Stack.Screen
                name={NavigationKey.SplashScreen}
                component={SplashScreen}
            />
            <Stack.Screen
                name={NavigationKey.SignInScreen}
                component={SignInScreen}
            />
            <Stack.Screen
                name={NavigationKey.SignUpScreen}
                component={SignUpScreen}
            />
        </HideHeaderStack>
    );
};
export default AuthStack;
