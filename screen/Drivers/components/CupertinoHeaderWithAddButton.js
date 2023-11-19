import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";



function CupertinoHeaderWithAddButton(props) {
  const navigation=useNavigation()
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton} onPress={()=>{navigation.goBack()}}>
          <Icon name="ios-arrow-back" style={styles.leftIcon}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.driver}>
          Drivers
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 0.14,
    alignItems: "flex-start",
    marginLeft:10,
    marginTop:10,
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#000000",
    fontSize: 32
  },
  textWrapper: {
    flex: 0.86,
    marginLeft:10,
    marginTop:10,
  },
  driver: {
    fontSize: 17,
    lineHeight: 17,
    marginLeft:90,
    marginTop:10,
    color: "#000000"
  }
});

export default CupertinoHeaderWithAddButton;
