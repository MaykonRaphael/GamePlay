import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: theme.colors.overlay,
    },
    modalView: {
        backgroundColor: '#0E1647',
        padding: 35,
        alignItems: 'center',
    },
    buttonView: {
        flexDirection: 'row',
        marginBottom: getBottomSpace(),
    },
    noButton: {
        borderColor: theme.colors.secondary30,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: 160,
        height: 56,
        justifyContent: 'center',
        marginRight: 5,
    },
    yesButton: {
        backgroundColor: theme.colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: 160,
        height: 56,
        justifyContent: 'center',
        marginLeft: 5,
    },
    textStyle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontFamily: theme.fonts.text500,
        fontSize: 15
    },
    text: {
        marginBottom: 27,
        textAlign: 'center',
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 20,
    },
});