import React from 'react';
import {StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera';

/*
    UNICO PARAMETRO OBRIGATÓRIO QUE DEEVE SER PASSADO É O 'CameraRef'
*/

export function CameraComponent({ CameraRef, Orientation, Flash, Code, PermissionAudio, ...props}){

    return (
        <RNCamera
            ref={CameraRef}
            style={{...StyleSheet.absoluteFill}}
            type={Orientation ? Orientation : RNCamera.Constants.Type.back}
            flashMode={Flash ? Flash : RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
                title: 'Permissão para usar a câmera',
                message: 'Precisamos da sua permissão para usar sua câmera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancelar', 
            }}
            androidRecordAudioPermissionOptions={PermissionAudio ? PermissionAudio : null}
            onBarCodeRead={Code ? Code : null}
            {...props}
        />
    );
}
