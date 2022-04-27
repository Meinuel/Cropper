import React , {useState} from "react"
import ImageCropPicker from "react-native-image-crop-picker"
import { View , Button , StyleSheet, Text} from "react-native"

const Home = ({navigation}) => {
    const [message , setMessage] = useState('nothing to show')
    const takePhoto = () => {
        console.warn('Camara')
        ImageCropPicker.openCamera({
            width:300,
            height:400,
            cropping:true
        }).then(image => console.warn(image.path)).catch( () => setMessage('No hay foto'))
    }

    return(
        <View style={styles.body}>
            <Button onPress={takePhoto} title="Go to Camera"/>
            <Text>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor : 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Home