import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconTextButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon
          name="timer"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.fuelStation}>Fuel Station</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper}>
        <MaterialCommunityIconsIcon
          name="heart"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.transprot}>Transprot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="map-marker-radius"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.map}>Map</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  fuelStation: {
    fontSize: 12,
    color: "rgba(14,3,3,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#3f51b5",
    fontSize: 24,
    opacity: 0.8
  },
  transprot: {
    fontSize: 14,
    color: "#3f51b5",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  map: {
    fontSize: 12,
    color: "rgba(18,8,8,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default MaterialIconTextButtonsFooter;
