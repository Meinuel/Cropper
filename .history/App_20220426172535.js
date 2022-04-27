import React from "react"
import { NavigationContainer }  from "@react-navigation/native"
import {View ,Text ,StyleSheet} from "react-native"

const App = () => {
  return ( 
    <NavigationContainer>
      
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor : 'yellow',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})

export default App;
