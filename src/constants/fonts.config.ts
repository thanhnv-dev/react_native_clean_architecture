import {configureFonts} from 'react-native-paper';

export const getfonts = (scale: number) => {
    const baseVariants = configureFonts();
    const customVariants = {
        displayLarge: {
            ...baseVariants.displayLarge,
            fontSize: baseVariants.displayLarge.fontSize * scale,
            lineHeight: baseVariants.displayLarge.lineHeight * scale,
        },
        displayMedium: {
            ...baseVariants.displayMedium,
            fontSize: baseVariants.displayMedium.fontSize * scale,
            lineHeight: baseVariants.displayMedium.lineHeight * scale,
        },
        bold: {
            ...baseVariants.bodyMedium,
        },
        italic: {
            ...baseVariants.bodyMedium,
        },
        boldItalic: {
            ...baseVariants.bodyMedium,
        },
    } as const;

    return configureFonts({
        config: {
            ...baseVariants,
            ...customVariants,
        },
    });
};
