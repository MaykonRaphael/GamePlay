import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        fontSize: 13,
        borderWidth: 1,
        marginRight: 4,
        borderRadius: 8,
        textAlign: 'center',
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        borderColor: theme.colors.secondary50,
        backgroundColor: theme.colors.secondary40,
    },
    
});