import React, { Component } from "react";
import { StyleSheet, View,SafeAreaView, Image,ImageBackground } from "react-native";
import VehiclesButton from "./components/VehiclesButton";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";
import DriversButton from "./components/DriversButton";


function Transport() {
  return (
<SafeAreaView style={{flex:1}}>
<View style={styles.container}>
<ImageBackground source={require('../src/bg.png')}>  

<View style={styles.image1Stack}>       
<VehiclesButton style={styles.cupertinoButtonBlackTextColor}/>
</View>
      <Image
        source={require("./assets/tservice.png")}
        resizeMode="contain"
        style={styles.image2}/>

<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}/>
<View style={styles.cupertinoButtonBlueTextColor1Stack}>
<DriversButton style={styles.cupertinoButtonBlueTextColor1}/>
</View>
<View style={styles.cupertinoButtonBlueTextColor1Stack}>
</View>

</ImageBackground> 
</View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
   cupertinoHeaderWithAddButton: {
    height: 44,
    width: 400,
    marginTop: -250,
    marginLeft: -7
  },
  cupertinoButtonBlackTextColor: {
    height: 70,
    width: 180,
    position: "absolute",
    left: 90,
    top: 0,
    backgroundColor: "#ffffff",
    borderRadius: 70
  },
  image1Stack: {
    width: 284,
    height: 94,
    marginTop: 349,
    marginLeft: 26
  },
  image2: {
    width: 200,
    height: 160,
    marginTop: -341,
    marginLeft: 97
  },
  cupertinoButtonBlueTextColor1: {
    height: 70,
    width: 180,
    position: "absolute",
    left: 90,
    top: 0,
    backgroundColor: "#ffffff",
    borderRadius: 70
  },
  cupertinoButtonBlueTextColor1Stack: {
    width: 265,
    height: 89,
    marginTop: 430,
    marginLeft: 26,
    color:"#000000"
  },

});

export default Transport;
