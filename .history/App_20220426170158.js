import React from "react"
import {View ,Text ,StyleSheet} from "react-native"

const App = () => {
  return ( 
    <View>
      <Text style={styles.body}>Adios</Text>
    </View>
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
