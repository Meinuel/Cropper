import React from "react"
import { View , Button , StyleSheet} from "react-native"

const Home = ({navigation}) => {
    return(
        <View style={styles.body}>
            <Button onPress={() => navigation.navigate('Camera')} title="Go to Camera"/>
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