import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text,Linking } from "react-native";



function MaterialButtonViolet(props) {
  const {phoneNumber}=props;
  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={handlePress}>
      <Text style={styles.bookHere}>Call Now</Text>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(40,152,16,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  bookHere: {
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonViolet;
