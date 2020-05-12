import React from 'react';
import { View, Modal } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { styles } from './styles.modal';

export function ModalComponet({ Visible, DataScan, OnPress }) {
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={Visible}
            >
                <View style={styles.content}>
                    <View>
                        <View style={styles.viewIcon}>
                            <Icon name='qrcode' size={100} />
                        </View>
                        <View>
                            <Text style={styles.text}>
                                Dados: {DataScan.data ? DataScan.data : 'Sem acesso'}
                            </Text>
                            <Text style={styles.text}>
                                Código: {DataScan.rawData ? DataScan.rawData : 'Sem acesso'} 
                            </Text>
                            <Text style={styles.text}>
                                Tipo: {DataScan.type ? DataScan.type : 'Sem acesso'} 
                            </Text>
                        </View>

                    </View>
                    <View style={styles.viewButons}>
                        <Button
                            mode="contained"
                            onPress={OnPress}
                            color='#c4302b'
                        >
                            Cancelar
                        </Button>
                        <Button
                            mode="contained"
                            onPress={OnPress}
                            color='green'
                        >
                            Confirmar
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    );
}