import React from "react"
import {Text ,StyleSheet} from "react-native"

const App = () => {
  return ( 
    <Text style={styles.body}>Adios</Text>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor : 'yellow',
    display:'flex',
    justifyContent:'center'
  }
})

export default App;
