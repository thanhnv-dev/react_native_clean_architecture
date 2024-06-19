import {
    ScrollView,
    StatusBar,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    StyleProp,
    ViewStyle,
} from 'react-native';
import React from 'react';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from 'core/styles';
import {useSelector} from 'react-redux';
import {getThemeMode} from 'redux/slice/app.slice';
import ThemeKey from 'constants/enum/theme.key';

type ScreenWrapperProps = {
    children: React.ReactNode;
    scrollEnabled?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
    mainStyle?: StyleProp<ViewStyle>;
    subStyle?: StyleProp<ViewStyle>;
};

const ScreenWrapper: React.FC<ScreenWrapperProps> = props => {
    const {
        children,
        scrollEnabled = false,
        paddingTop = false,
        paddingBottom = false,
        mainStyle = styles.flex1,
        subStyle = styles.flex1,
    } = props;

    const themeMode = useSelector(getThemeMode);

    const insets: EdgeInsets = useSafeAreaInsets();

    const dismissKeyboardWhenTappedOutsideOfInput = () => {
        Keyboard.dismiss();
        return;
    };

    return (
        <View style={mainStyle}>
            <View
                style={[
                    subStyle,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                        paddingTop: paddingTop ? insets.top : 0,
                        paddingBottom: paddingBottom ? insets.bottom : 0,
                    },
                ]}>
                <StatusBar
                    barStyle={
                        themeMode === ThemeKey.dark
                            ? 'light-content'
                            : 'dark-content'
                    }
                />
                {scrollEnabled ? (
                    <ScrollView
                        style={styles.flex1}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}>
                        <>{children}</>
                    </ScrollView>
                ) : (
                    <TouchableWithoutFeedback
                        onPress={dismissKeyboardWhenTappedOutsideOfInput}>
                        <>{children}</>
                    </TouchableWithoutFeedback>
                )}
            </View>
        </View>
    );
};

export default ScreenWrapper;
