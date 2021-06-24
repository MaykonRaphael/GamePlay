import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 95,
        fontSize: 13,
        width: '100%',
        marginRight: 4,
        borderWidth: 1,
        paddingTop: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        textAlignVertical: 'top',
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        borderColor: theme.colors.secondary50,
        backgroundColor: theme.colors.secondary40,
    },
    
});