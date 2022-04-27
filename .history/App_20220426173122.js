import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {View ,Text ,StyleSheet} from "react-native"

const App = () => {
  return ( 
    <View style={styles.body}>
      <Text>Hola</Text>
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

export default App;
