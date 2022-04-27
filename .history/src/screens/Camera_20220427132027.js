import React from "react"
import { RNCamera } from 'react-native-camera';
import { View , Text} from "react-native"

const Camera  = () => {

    return (
        <RNCamera
            type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
    )
}

export default Camera