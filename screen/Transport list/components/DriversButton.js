import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text,ImageBackground } from "react-native";

function DriversButton(props) {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={()=>{navigation.navigate("Drivers")}}>


      <Text style={styles.caption}>Drivers</Text>
  
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  caption: {
    color: "rgba(5,11,19,1)",
    fontSize: 17
  }
});

export default DriversButton;
