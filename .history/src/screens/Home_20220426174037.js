import React from "react"
import { View , Text} from "react-native"

const Home = () => {
    return(
        <View style={styles.body}>
            <Text>Home</Text>
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