import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, ImageBackground,Image } from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";


function EmergencyContact() {
  return (
<SafeAreaView style={{flex:1}}>
<View style={styles.container}>
<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}></CupertinoHeaderWithAddButton>
<ScrollView >
<ImageBackground source={require('../src/bg.png')}>   

<Image style={styles.image} source={{uri:"https://th.bing.com/th/id/R.1f457e6b4ffa0b411582b635988e44e6?rik=1QF%2b5MkQWAVa1A&pid=ImgRaw&r=0"}}/>
          
<View style={styles.list}>
<Text style={styles.hlist}>For Police</Text>
<Text style={styles.plist}>119</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>For Ambulance</Text>
<Text style={styles.plist}>1990</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>For Fire</Text>
<Text style={styles.plist}>111</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>National emergency number</Text>
<Text style={styles.plist}>118</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Tourist police</Text>
<Text style={styles.plist}>011 2421052</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Police mobile squad</Text>
<Text style={styles.plist}>011 5717171</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Goverment information center</Text>
<Text style={styles.plist}>1919</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Sri Lanka tourism</Text>
<Text style={styles.plist}>1912</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Child & Women bureau </Text>
<Text style={styles.plist}>011 2444444</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Bomb disposal unit</Text>
<Text style={styles.plist}>011 2434251</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Immigration & Emigration Dep.</Text>
<Text style={styles.plist}>1962</Text>
</View>

</ImageBackground>    
</ScrollView> 
</View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(247,247,247,1)"
  },
  
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 380,
    opacity: 0.55,
    marginTop: 10,
    backgroundColor:"#ffffff",
    alignSelf: "center"
  },
  image:{
    width:150,
    height: 150,
    alignSelf: "center",
    marginVertical:20
  },
  list:{
    backgroundColor: '#ffffff',
    marginHorizontal:10,
    marginVertical:10,
    padding:10,
    height: 50,
    width: 370,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between"

    },
    hlist:{
    fontSize:18,
    color:"#000000",
    fontWeight:'bold'
    },
    plist:{
    fontSize:15,
    fontWeight:'bold',
    },
});

export default EmergencyContact;
