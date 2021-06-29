import React, { useState } from "react";
import { View, Text } from 'react-native';
import { useAuth } from "../../hooks/auth";
import { RectButton } from "react-native-gesture-handler";

import { LogoutModal } from '../LogoutModal';
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
    const { user, signOut } = useAuth();
    const [ logoutModal, setLogoutModal ] = useState(false);

    function handleSignOut() {
        signOut();
    }

    function handleCancel() {
        setLogoutModal(!logoutModal);
    }

    return(
        <View style={styles.container} >
            <RectButton onPress={() => {
                setLogoutModal(true);
            }}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.user} >
                    <Text style={styles.greeting} >
                        Olá,
                    </Text>
                    <Text style={styles.username} >
                        {user.firstName}
                    </Text>
                </View>

                <Text style={styles.message} >
                    Hoje é dia de vitória
                </Text>
            </View>
            <LogoutModal visible={logoutModal} handleCancel={handleCancel} handleSignOut={handleSignOut} />
        </View>
    );
}