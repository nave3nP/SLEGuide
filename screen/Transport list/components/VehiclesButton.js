import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text,ImageBackground } from "react-native";

function VehiclesButton(props) {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={()=>{navigation.navigate("Vehicles")}}>
      <Text style={styles.caption}>Vehicles</Text>
    
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
    color: "#000000",
    fontSize: 17
  }
});

export default VehiclesButton;
