import React, { useRef} from 'react';
import {StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera';


export function CameraComponent({ Orientation, code }){
    const camera = useRef();

    return (
        <RNCamera
            ref={camera}
            style={styles.preview}
            type={Orientation ? Orientation : RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel', 
            }}
            androidRecordAudioPermissionOptions={null}
            onBarCodeRead={code ? code : null}
        />
    );
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})