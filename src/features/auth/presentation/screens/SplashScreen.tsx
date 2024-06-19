import {View} from 'react-native';
import React from 'react';
import {Button, Text, useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'core/components';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../redux-slice/auth.slice';
import {getThemeMode, setScale, setTheme} from 'redux/slice/app.slice';
import createStyles from './styles';
import ThemeKey from 'constants/enum/theme.key';
import appStyles from 'core/styles';

const SplashScreen = () => {
    const dispatch = useDispatch();
    const colorSchema = useSelector(getThemeMode);

    const changeScale = (scale: number) => {
        dispatch(setScale(scale));
    };

    const theme = useTheme();

    const styles = createStyles({
        colorSchema: colorSchema,
        theme: theme,
    });

    return (
        <ScreenWrapper
            mainStyle={[styles.container, appStyles.flex1]}
            paddingTop>
            <View>
                <Text variant="displayMedium">SplashScreen</Text>
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
                        dispatch(setTheme(ThemeKey.dark));
                    }}>
                    Change Theme Dark
                </Button>
                <Button
                    mode="elevated"
                    onPress={() => {
                        dispatch(setTheme(ThemeKey.light));
                    }}>
                    Change Theme Light
                </Button>
            </View>
            <Button
                onPress={() => {
                    dispatch(
                        loginAction({
                            email: 'thanhnv.dev.personal@gmail.com',
                            password: '123456@',
                        }),
                    );
                }}>
                Test
            </Button>
        </ScreenWrapper>
    );
};

export default SplashScreen;
