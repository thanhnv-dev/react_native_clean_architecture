import {PixelRatio} from 'react-native';

function getValueUsingPixelRatio(defaultValue: number, maxValue: number) {
    return PixelRatio.getFontScale() * defaultValue > maxValue
        ? maxValue
        : defaultValue * PixelRatio.getFontScale();
}
export default {
    normal: getValueUsingPixelRatio(15, 21),
    medium: getValueUsingPixelRatio(16, 22),
    large: getValueUsingPixelRatio(17, 19),
};
