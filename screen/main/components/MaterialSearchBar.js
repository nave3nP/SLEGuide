import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import CupertinoFooter1 from "../components/CupertinoFooter1";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.slEGuideStack}>
        <Text style={styles.slEGuide}>SL E-GUIDE</Text>
        <Image
          source={require("../assets/images/Places-In-Sri-Lanka_4th-jun.webp")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assets/images/Gradient_BsNXNrx.png")}
        >
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/800x750.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Image
              source={require("../assets/images/kisspng-car-illustration-computer-icons-vector-graphics-fleet-management-svg-png-icon-free-download-3326-5c56bc1c827ea7.4483266315491881245345.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
          <Text style={styles.places}>Places</Text>
          <View style={styles.image5Row}>
            <Image
              source={require("../assets/images/pngwing.com_(5).png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
            <Image
              source={require("../assets/images/509-5099430_black-fuel-pump-icon-inside-a-green-circle_(1)_(1).png")}
              resizeMode="contain"
              style={styles.image8}
            ></Image>
          </View>
          <View style={styles.map2Row}>
            <Text style={styles.map2}>Map</Text>
            <Text style={styles.fuelStations}>Fuel Stations</Text>
          </View>
          <View style={styles.image4Row}>
            <Image
              source={require("../assets/images/imgbin_medical-emergency-medicine-health-care-hospital-png.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Image
              source={require("../assets/images/png-clipart-travel-tour-operator-computer-icons-laganas-tour-guide-travel-angle-text_(2)_(1).png")}
              resizeMode="contain"
              style={styles.image9}
            ></Image>
          </View>
          <View style={styles.emergencyRow}>
            <Text style={styles.emergency}>Emergency</Text>
            <Text style={styles.guide}>Guide</Text>
          </View>
        </ImageBackground>
        <Text style={styles.transportServices}>Transport{"\n"} Services</Text>
      </View>
      <CupertinoFooter1 style={styles.cupertinoFooter1}></CupertinoFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slEGuide: {
    top: 48,
    position: "absolute",
    fontFamily: "impact-regular",
    color: "#121212",
    textAlign: "justify",
    width: 175,
    height: 65,
    fontSize: 40,
    left: 100
  },
  image: {
    top: 0,
    left: 0,
    width: 381,
    height: 319,
    position: "absolute",
    opacity: 0.35
  },
  rect: {
    top: 254,
    left: 0,
    width: 378,
    height: 458,
    position: "absolute"
  },
  rect_imageStyle: {},
  image2: {
    width: 72,
    height: 76
  },
  image3: {
    width: 72,
    height: 76,
    marginLeft: 91,
    marginTop: 1
  },
  image2Row: {
    height: 77,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 76,
    marginRight: 67
  },
  places: {
    color: "#121212",
    height: 14,
    width: 72,
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 76
  },
  image5: {
    width: 72,
    height: 76
  },
  image8: {
    width: 72,
    height: 76,
    marginLeft: 91
  },
  image5Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 76,
    marginRight: 67
  },
  map2: {
    color: "#121212",
    height: 14,
    width: 72,
    textAlign: "center",
    fontSize: 18
  },
  fuelStations: {
    color: "#121212",
    height: 45,
    width: 98,
    textAlign: "center",
    fontSize: 18,
    marginLeft: 78
  },
  map2Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 76,
    marginRight: 54
  },
  image4: {
    width: 72,
    height: 76
  },
  image9: {
    width: 72,
    height: 76,
    marginLeft: 90
  },
  image4Row: {
    height: 76,
    flexDirection: "row",
    marginLeft: 77,
    marginRight: 67
  },
  emergency: {
    color: "#121212",
    height: 15,
    width: 100,
    textAlign: "center",
    fontSize: 18
  },
  guide: {
    color: "#121212",
    height: 14,
    width: 72,
    textAlign: "center",
    lineHeight: 14,
    fontSize: 19,
    marginLeft: 76,
    marginTop: 7
  },
  emergencyRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 63,
    marginRight: 67
  },
  transportServices: {
    top: 384,
    left: 239,
    position: "absolute",
    color: "#121212",
    height: 45,
    width: 181,
    fontSize: 17
  },
  slEGuideStack: {
    width: 420,
    height: 712,
    marginTop: 22
  },
  cupertinoFooter1: {
    height: 49,
    width: 375,
    marginTop: -1
  }
});

export default Untitled;
