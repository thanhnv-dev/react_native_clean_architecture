import React from 'react';
import {useSelector} from 'react-redux';
import {
    Provider as PaperProvider,
    MD3DarkTheme,
    MD3LightTheme,
} from 'react-native-paper';
import {getfonts} from 'constants/fonts.config';
import AppNaviagtor from 'navigation';
import {getScale, getThemeMode} from 'redux/slice/app.slice';
import ThemeKey from 'constants/enum/theme.key';

const Main = () => {
    const colorScheme = useSelector(getThemeMode);
    const scale = useSelector(getScale);

    const paperTheme =
        colorScheme === ThemeKey.dark ? {...MD3DarkTheme} : {...MD3LightTheme};

    const fonts = getfonts(scale);

    return (
        <PaperProvider theme={{...paperTheme, fonts}}>
            <AppNaviagtor />
        </PaperProvider>
    );
};

export default Main;
