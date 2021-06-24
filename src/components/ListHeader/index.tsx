import React from "react";
import {
    Text,
    Image,
    View,
} from 'react-native';

import { styles } from "./styles";

type Props = {
    title: string;
    subtitle: string;
}

export function ListHeader({ title, subtitle, ...rest } : Props) {
    return(
        <View style={styles.container} >
            <Text style={styles.title}>
                { title }
            </Text>
            <Text style={styles.subtitle}>
                { subtitle }
            </Text>
        </View>
    );
}