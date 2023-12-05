import React, { Component } from "react";
import { StyleSheet, View,SafeAreaView, Image,ImageBackground, Text, TouchableOpacity, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";


function Transport() {
  const navigation = useNavigation();
  return (
<SafeAreaView style={{flex:1}}>
<View style={styles.container}>
<ImageBackground source={require('../src/bg.png')} style={{height:1000, alignItems:"center"}}> 
<Text style={styles.title}>Transport</Text> 

      <Image
        source={require("./assets/tservice.png")}
        resizeMode="contain"
        style={styles.image}/>
      
      <TouchableOpacity>
        <View style={styles.button} >
          <Text style={{fontSize:26, margin:20, alignSelf:"center"}}>Vehicles</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={{fontSize:26, margin:20, alignSelf:"center"}}>Drivers</Text>
        </View>
      </TouchableOpacity>

</ImageBackground> 
</View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title:{
    fontWeight: "bold",
        fontSize: 40,
        justifyContent: "center",
        alignSelf: "center",
        paddingVertical:"10%",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 30
  },
  button:{
    backgroundColor: "white",
    borderRadius: 70,
    width:200,
    marginVertical:20
  
  }

});

export default Transport;
