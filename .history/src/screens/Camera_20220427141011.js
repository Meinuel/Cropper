import React from "react"
import { RNCamera } from 'react-native-camera';
import { useCamera } from "react-native-camera-hooks"
import { View , Text , StyleSheet , Button} from "react-native"

const Camera  = () => {
    const [{cameraRef} , {takePicture}] = useCamera(null)
    return (
        //<View style={styles.body}>
            <RNCamera
            ref={cameraRef}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            style={styles.preview}
        >
            <Button title="hola"></Button>
        </RNCamera>
        //</View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    preview:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'
    }
})

export default Camera   