import React from "react"
import { RNCamera } from 'react-native-camera';
import { View , Text} from "react-native"

const Camera  = () => {

    console.log(RNCamera.Constants.CameraStatus.READY)

    return (
        <View><Text>holax</Text></View>
    )
}

export default Camera