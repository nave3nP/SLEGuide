import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fontawesome from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Dash = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0 }}>
      <ImageBackground
        source={require("../../assets/Images/bg.png")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <ImageBackground
          source={require("../../assets/Images/mainpic.webp")}
          style={styles.mainpic}
        >
          <TouchableOpacity onPress={()=>{navigation.navigate("Settings")}}>
            <Fontawesome
              name="cog"
              color={"black"}
              size={35}
              style={styles.settings}
            />
          </TouchableOpacity>

          <Text style={styles.title}>SL E-GUIDE</Text>
        </ImageBackground>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Places");
              }}
            >
              <Image
                source={require("../../assets/Images/Places.png")}
                resizeMode="contain"
                style={styles.menuicons}
              ></Image>
              <Text style={styles.iconText}>Places</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Transport");
              }}
            >
              <Image
                source={require("../../assets/Images/car.png")}
                resizeMode="contain"
                style={styles.menuicons}
              ></Image>
              <Text style={styles.iconText}>Transport</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HotelList");
              }}
            >
              <Image
                source={require("../../assets/Images/hotel.png")}
                resizeMode="contain"
                style={styles.menuicons}
              ></Image>
              <Text style={styles.iconText}>Hotels</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Fuel");
              }}
            >
              <Image
                source={require("../../assets/Images/fuel.png")}
                resizeMode="contain"
                style={styles.menuicons}
              ></Image>
              <Text style={styles.iconText}>Fuel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Emergency");
              }}
            >
              <Image
                source={require("../../assets/Images/emergency.png")}
                resizeMode="contain"
                style={styles.menuicons}
              ></Image>
              <Text style={styles.iconText}>Emergency</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Guides");
              }}
            >
              <Image
                source={require("../../assets/Images/guide.png")}
                resizeMode="contain"
                style={styles.menuicons}
              ></Image>
              <Text style={styles.iconText}>Guiders</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Dash;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: windowHeight * 0.07,
  },
  mainpic: {
    width: windowWidth,
    height: windowHeight * 0.35,
    opacity: 0.8,
  },
  title: {
    alignSelf: "center",
    marginTop: windowHeight * 0.06,
    fontSize: 36,
    fontWeight: "bold",
  },
  menuicons: {
    width: 72,
    height: 76,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth * 0.6,
    marginVertical: 10,
  },
  iconText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },
  settings: {
    alignSelf: "flex-end",
    marginTop: windowHeight * 0.05,
    marginRight: windowWidth * 0.05,
  },
});
