import {Alert} from 'react-native';

export const AlertMessage = (error, message) => {
    Alert.alert(error, message, [{text: "Ok", onPress: () => {}}], {cancelable: false});
}