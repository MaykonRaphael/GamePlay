import React from 'react';
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableHighlight,
} from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
    handleSignOut: () => void;
    handleCancel: () => void;
}

export function LogoutModal({ handleSignOut, handleCancel, ...rest }: Props) {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                statusBarTranslucent
                {...rest}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>
                            Deseja sair do Game<Text style={{color: '#E51C44'}}>Play</Text>?
                        </Text>
                        <View style={styles.buttonView} >
                            <TouchableHighlight
                                style={styles.noButton}
                                onPress={handleCancel}>
                                <Text style={styles.textStyle}>Não</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.yesButton}
                                onPress={handleSignOut}
                            >
                                <Text style={styles.textStyle}>Sim</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}