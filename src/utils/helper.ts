import Toast, {ToastType} from 'react-native-toast-message';

const showToast = ({
    msg,
    subMsg,
    type,
}: {
    msg: string;
    subMsg?: string;
    type: ToastType;
}) => {
    Toast.show({
        type: type,
        text1: msg,
        text2: subMsg,
    });
};

const isObjectEmpty = (object: Object) => {
    return object && Object.keys(object).length === 0;
};

const isArrayEmpty = (array: Array<any>) => {
    return array && array.length === 0;
};

export default {showToast, isObjectEmpty, isArrayEmpty};
