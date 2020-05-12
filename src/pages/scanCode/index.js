import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { CameraComponent } from '../../components/cameraComponent';
import {Mascara} from './mascara';

function handleQrCode(code) {
    setActiveScan(false);
    alert(code.data);
    
}

export function ScanCode() {
    const [activeScan, setActiveScan] = useState(true);
    const isFocused = useIsFocused();
    const camera = useRef();


    return (
        <View style={{ flex: 1 }} >
            <CameraComponent
                CameraRef={camera}
                Code={isFocused ? (activeScan ? (code) => handleQrCode(code) : null ) : null}
            />
            <Mascara />
        </View>
    );
}
