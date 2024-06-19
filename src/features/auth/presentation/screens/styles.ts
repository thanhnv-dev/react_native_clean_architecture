import {ColorSchemeName, StyleSheet} from 'react-native';
import {InternalTheme} from 'react-native-paper/lib/typescript/types';

type CreateStylesType = {
    colorSchema: ColorSchemeName;
    theme: InternalTheme;
};

const createStyles = ({colorSchema, theme}: CreateStylesType) =>
    StyleSheet.create({
        container: {
            backgroundColor:
                colorSchema === 'dark'
                    ? theme.colors.primary
                    : theme.colors.surface,
        },
    });
export default createStyles;
