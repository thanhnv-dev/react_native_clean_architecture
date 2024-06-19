import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from 'core/styles';

type LoaderProps = {
    loading: boolean;
};

const Loader: React.FC<LoaderProps> = ({loading}) => {
    return loading ? (
        <View style={[styles.flex1, styles.center]}>
            <ActivityIndicator size="large" />
        </View>
    ) : null;
};

export default Loader;
