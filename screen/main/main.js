import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text, Image, ImageBackground, TouchableOpacity,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logoutUser } from "../src/api/authapi";


function Main(props) {
   const navigation=useNavigation();
  return (
    
    <View style={styles.container}>
      <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../../assets/Images/bg.png")}
        >
        <ScrollView>
      <View style={styles.slEGuideStack}>
        <View style={styles.firstpart}>
        <Text style={styles.slEGuide}>SL E-GUIDE</Text>
        <Image
          source={require("../../assets/Images/mainpic.webp")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        </View>
        <View style={styles.secondpart}>
       
          <View style={styles.image2Row}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Places")}}>
            <Image
              source={require("../../assets/Images/Places.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Transport")}}>
            <Image
              source={require("../../assets/Images/car.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.places}>Places</Text>
          <View style={styles.image5Row}>
            <TouchableOpacity onPress={()=>{navigation.navigate("HotelList")}}>
            <Image
              source={require("../../assets/Images/hotel.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Fuel")}}>
            <Image
              source={require("../../assets/Images/fuel.png")}
              resizeMode="contain"
              style={styles.image8}
            ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.map2Row}>
            <Text style={styles.map2}>Hotels</Text>
            <Text style={styles.fuelStations}>Fuel Stations</Text>
          </View>
          <View style={styles.image4Row}>
           <TouchableOpacity onPress={()=>{navigation.navigate("Emergency")}}>
            <Image
              source={require("../../assets/Images/emergency.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Dashboard")}}>
            <Image
              source={require("../../assets/Images/guide.png")}
              resizeMode="contain"
              style={styles.image9}
            ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.emergencyRow}>
            <Text style={styles.emergency}>Emergency</Text>
            <Text style={styles.guide}>Guide</Text>
          </View>
        </View>
        <Text style={styles.transportServices}>Transport{"\n"} Services</Text>
      </View>
      <View style={styles.bottombar}>
      <View style={styles.signoutContainer}>
        <Image source={require("../src/signout.png")} style={{height:30,width:35}}/>
        <TouchableOpacity onPress={logoutUser} >
          <Text style={{fontSize:20}}> Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactUs}>
        <Image source={require("../src/contact.png")} style={{height:30,width:35}}/>
        <TouchableOpacity onPress={()=>{navigation.navigate("Contactus")}} >
          <Text style={{fontSize:20}}> Contact Us</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection:"column"
  },
  slEGuide: {
    top: 48,
    position: "absolute",
    color: "#121212",
    textAlign: "justify",
    fontSize: 40,
    left: 100
  },
  image: {
    top: -30,
    left: 0,
    height: 280,
    position: "absolute",
    opacity: 0.35
  },
  rect: {
    left: 0,
    height:1100,
    position: "absolute",
    flex:1,
    resizeMode:"cover",


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
    marginTop: 300,
    marginLeft: 76,
    marginRight: 67
  },
  places: {
    color: "#121212",
    height: 22,
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
    height: 22,
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
    height: 22,
    width: 100,
    textAlign: "center",
    fontSize: 18
  },
  guide: {
    color: "#121212",
    height: 22,
    width: 72,
    lineHeight: 18,
    textAlign: "center",
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
    marginTop: 22,
    flexDirection:"column"
  },
  signoutContainer:{
    flexDirection:"row",
    marginTop:45,
    marginLeft:10,
  },
  bottombar:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  contactUs:{
    flexDirection:"row",
    marginTop:45,
    marginRight:10
  }
})

export default Main
