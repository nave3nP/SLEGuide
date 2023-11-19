import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CupertinoHeaderWithAddButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.contactus}>
          Contact Us
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
  textWrapper: {
    flex: 0.86,
    marginLeft:10,
    marginTop:10,
  },
  contactus: {
    fontSize: 17,
    lineHeight: 17,
    marginLeft:90,
    marginTop:10,
    color: "#000000",
    fontWeight:"bold"
  }
});

export default CupertinoHeaderWithAddButton;
