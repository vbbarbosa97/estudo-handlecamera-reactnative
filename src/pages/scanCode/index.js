import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { CameraComponent } from '../../components/cameraComponent';
import { Mascara } from './mascara';
import { ModalComponet } from './modal';

export function ScanCode() {
    const [activeScan, setActiveScan] = useState(true);
    const [visibleModal, setVisibleModal] = useState(false);
    const [dataScan] = useState({
        data: null,
        rawData: null,
        type: null
    });
    const isFocused = useIsFocused();
    const camera = useRef();
    
    function handleQrCode(code) {
        setActiveScan(false);
        dataScan.data = code.data;
        dataScan.rawData = code.rawData;
        dataScan.type = code.type;
        setVisibleModal(true);
    }
    function confirmCode(){
        setVisibleModal(false);
        setActiveScan(true);
    }

    return (
        <View style={{ flex: 1 }} >
            <CameraComponent
                CameraRef={camera}
                Code={isFocused ? (activeScan ? (code) => handleQrCode(code) : null ) : null}
            />
            <Mascara />
            <ModalComponet Visible={visibleModal} DataScan={dataScan} OnPress={confirmCode} />
        </View>
    );
}
