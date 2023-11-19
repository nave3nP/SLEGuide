import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoSearchBarWithMic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputBox}>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={styles.inputLeftIcon}
        ></MaterialCommunityIconsIcon>
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgba(255,255,255,0.7)"
          clearButtonMode="always"
          keyboardAppearance="dark"
          dataDetector="address"
          selectionColor="rgba(250,250,250,1)"
          style={styles.inputStyle}
        ></TextInput>
        <TouchableOpacity style={styles.recordButton}>
          <IoniconsIcon
            name="ios-mic"
            style={styles.inputRightIcon}
          ></IoniconsIcon>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.rightIconButton}>
        <Text style={styles.rightButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,1)",
    padding: 8,
    paddingRight: 0,
    shadowColor: "rgba(250,247,247,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#404040",
    borderRadius: 20
  },
  inputLeftIcon: {
    alignSelf: "center",
    paddingRight: 5,
    paddingLeft: 5,
    color: "#FFF",
    fontSize: 20
  },
  inputStyle: {
    height: 32,
    flex: 1,
    alignSelf: "flex-start",
    fontSize: 15,
    lineHeight: 15,
    color: "#FFF"
  },
  recordButton: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 8
  },
  inputRightIcon: {
    alignSelf: "center",
    opacity: 0.7,
    paddingRight: 5,
    paddingLeft: 5,
    color: "#FFF",
    fontSize: 20
  },
  rightIconButton: {
    alignItems: "center",
    padding: 8,
    backgroundColor: "rgba(106,1,51,1)",
    borderRadius: 52
  },
  rightButtonText: {
    fontSize: 15,
    color: "#FFF"
  }
});

export default CupertinoSearchBarWithMic;
