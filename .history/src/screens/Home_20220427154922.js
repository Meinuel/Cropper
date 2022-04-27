import React from "react"
import ImageCropPicker from "react-native-image-crop-picker"
import { View , Button , StyleSheet} from "react-native"

const Home = ({navigation}) => {

    const takePhoto = () => {
        ImageCropPicker.openCamera({
            width:300,
            height:400,
            cropping:true
        }).then(image => console.warn(image.path))
    }

    return(
        <View style={styles.body}>
            <Button onPress={() => takePhoto} title="Go to Camera"/>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor : 'red',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Home