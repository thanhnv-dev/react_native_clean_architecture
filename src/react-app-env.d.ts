declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.json';
// declare module 'react-native-vector-icons/AntDesign';
declare module '*.svg' {
    import React from 'react';
    import {SvgProps} from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}
