import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text,ImageBackground,StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


function Placedetail(props) {
  const navigation =useNavigation()

  return (
    <View style={styles.maincontainer}>
     <ImageBackground source={require('../../src/bg.png')} style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity  style={styles.leftIconButton} onPress={()=>{navigation.goBack()}}>
          <Icon name="ios-arrow-back" style={styles.leftIcon}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.places}>
          Places
        </Text>
      </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer:{
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8,
    height:50,
  },
  leftWrapper: {
    flex: 0.10,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#007AFF",
    fontSize: 32
  },
  textWrapper: {
    flex: 0.90,
    alignItems: "center",
    justifyContent: "center"
  },
  places: {
    fontSize: 25,
    color: "#000"
  }
});

export default Placedetail;
