import React, {useRef} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {CameraComponent} from '../../components/cameraComponent';

function handleQrCode(code){
    alert(code.data);
}

export function ScanCode(){
    const isFocused = useIsFocused();
    const camera = useRef();
  
    
    return (
        <CameraComponent 
            CameraRef={camera}
            Code={isFocused ? (code) => handleQrCode(code) : null}
        />
    );
}
