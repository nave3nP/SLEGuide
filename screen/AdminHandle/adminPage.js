import react from "react";
import { getAuth, signOut } from "firebase/auth";

import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AdminPage = () => {
  const navigation = useNavigation();
  const auth = getAuth()

  const handleSignOut=()=>{
  signOut(auth).then(() => {
    alert("Sign-out successful");
  }).catch((error) => {
    alert("An error happened");
  });
  }

  return (
    <ImageBackground
      source={require("../../assets/Images/bg.png")}
      style={Styles.rect}
    >
      <SafeAreaView>
        <View style={Styles.container}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 40,
              justifyContent: "center",
              alignSelf: "center",
              paddingVertical: "10%",
              borderBottomColor: "#000",
              borderBottomWidth: 2,
            }}
          >
           Admin Page
          </Text>
          <View style={Styles.buttonContainer}>
            <View style={Styles.button}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Add Driver");
                }}
              >
                <Text>Add Drivers</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.button}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Add Vehicle");
                }}
              >
                <Text>Add Vehicles</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.button}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Add Guide");
                }}
              >
                <Text>Add Guides</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.button}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Add Hotel");
                }}
              >
                <Text>Add Hotels</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.button}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Add Hospital");
                }}
              >
                <Text>Add Hospitals</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.signOutBtn} >
            <TouchableOpacity onPress={handleSignOut}>
              <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    paddingTop: "15%",
    width: "80%",
  },
  button: {
    alignItems: "center",
    width: "60%",
    borderWidth: 1,
    marginVertical: 15,
    padding: 10,
    borderRadius: 10,
    height:"10%"
  },
  rect: {
    width: "100%",
    height: "100%",
  },
  signOutBtn:{
    alignItems:"center",
    backgroundColor:"red",
    width:100,
    justifyContent:"center",
    alignSelf:"center",
    padding: 10,
    borderRadius: 10,
  }
});

export default AdminPage;
