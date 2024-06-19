import {View, Appearance, SafeAreaView} from 'react-native';
import React from 'react';
import {Button, Text, withTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {InternalTheme} from 'react-native-paper/lib/typescript/types';
import {setScale} from 'redux/slice/app.slice';

const HomeScreen = ({theme}: {theme: InternalTheme}) => {
    const dispatch = useDispatch();

    const changeScale = (scale: number) => {
        dispatch(setScale(scale));
    };

    return (
        <SafeAreaView>
            <View style={{backgroundColor: theme.colors.primary}}>
                <Text variant="displayMedium">HomeScreen</Text>
                <Button
                    mode="elevated"
                    onPress={() => {
                        changeScale(1.5);
                    }}>
                    Change scale
                </Button>
                <Button
                    mode="elevated"
                    onPress={() => {
                        changeScale(1);
                    }}>
                    Change scale default
                </Button>
                <Button
                    mode="elevated"
                    onPress={() => {
                        Appearance.setColorScheme('dark');
                    }}>
                    Change Theme Dark
                </Button>
                <Button
                    mode="elevated"
                    onPress={() => {
                        Appearance.setColorScheme('light');
                    }}>
                    Change Theme Light
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default withTheme(HomeScreen);
