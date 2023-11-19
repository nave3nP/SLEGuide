import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { SafeAreaView,ScrollView,StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";
import PoliceButton from "./components/police"
import Tips from "./components/tips";
import HospitalButton from "./components/hospital";


function Emergency() {
    const navigation=useNavigation();
  return (
    <ScrollView>
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

      <CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton} ></CupertinoHeaderWithAddButton>
       
      <ImageBackground source={require('../src/bg.png')} style={styles.bgimg}>
      <Image
        source={require("../src/emergency.png")}
        resizeMode="contain"
        style={styles.image}></Image>

      <PoliceButton style={styles.police}></PoliceButton> 
      <HospitalButton style={styles.hospital} ></HospitalButton>
      <Tips style={styles.tips} ></Tips>

      </ImageBackground>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  },
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 400,
    opacity: 0.55,
    marginTop: 10,
    backgroundColor:"#ffffff",
    alignSelf: "center"
  },
  image: {
    width: 375,
    height: 200,
    marginTop: 20
  },
  police: {
    height: 36,
    width: 296,
    borderRadius: 80,
    marginTop: 198,
    marginLeft: 40
  },
  hospital: {
    height: 36,
    width: 296,
    borderRadius: 80,
    marginTop: -106,
    marginLeft: 40
  },
  tips: {
    height: 36,
    width: 296,
    borderRadius: 80,
    marginTop: 100,
    marginLeft: 39
  },
  bgimg:{
    height:Dimensions.get('window').height

  }
});

export default Emergency;