import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Tips(props) {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={()=>{navigation.navigate("Tips")}}>
      <Text style={styles.tips}>Tips</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2196F3",
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
  tips: {
    color: "#fff",
    fontSize: 14
  }
});

export default Tips;
