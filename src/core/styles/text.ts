import fontSize from 'constants/fontSize';
import {StyleSheet} from 'react-native';

const text = StyleSheet.create({
    tile: {
        fontSize: 45,
        fontWeight: '700',
    },
    h1: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
    },
    textAlignCenter: {
        textAlign: 'center',
    },
});
export default text;
