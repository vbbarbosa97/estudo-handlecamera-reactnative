import React from 'react';
import { RNCamera } from 'react-native-camera';
import {CameraComponent} from '../../components/cameraComponent';

const cameraOrientation = RNCamera.Constants.Type.back;

function dd(coder){
    alert(coder.data);
}

export function ScanCode(){
    return (
        <CameraComponent 
            Orientation={cameraOrientation} 
            //code={(coder) => dd(coder)}
        />
    );
}

const permissionOptions =  ({
    title: 'Permission to use camera',
    message: 'We need your permission to use your camera',
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel', 
})