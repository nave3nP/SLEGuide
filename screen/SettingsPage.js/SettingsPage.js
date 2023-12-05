import { StyleSheet, Text, View, StatusBar, Dimensions,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontawesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SettingsPage = () => {
    const navigation = useNavigation();
    const auth = getAuth();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
          alert("Sign-out successful");
        }).catch((error) => {
          alert("An error happened");
        });
        }
    const user = auth.currentUser;
  return (

        <ImageBackground source={require("../../assets/Images/bg.png")} style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0, alignItems:"center" }}>
        <View>
        <Text style={styles.title}>Settings</Text>
            <Fontawesome
            name = "user"
            color={"black"}
            size={windowHeight * 0.2}
            style={styles.profile}
            />
            
        </View>  
        <View>
            <Text style={{fontSize:18, alignSelf:"center"}}>You are currently logged in as</Text>
            <Text style={{fontSize:18, alignSelf:"center", color:"red"}}>{user.email}</Text>
            
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Contactus")}}>
                <Text style={{marginVertical:10, fontSize:18, fontWeight:"bold"}}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignOut} onPress={handleSignOut}>
                <Text style={{marginVertical:10, fontSize:18, fontWeight:"bold"}}>Sign Out</Text>
                </TouchableOpacity>
        </View>
        </ImageBackground>   

  )
}

export default SettingsPage

const styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
            fontSize: 40,
            justifyContent: "center",
            alignSelf: "center",
            paddingVertical:"10%",
            borderBottomColor:"#000",
            borderBottomWidth:2
    },
    profile:{
        alignSelf: "center",
        marginVertical:windowHeight * 0.06
    },
    buttonContainer:{
        marginTop:windowHeight * 0.2,
    },
    btn:{
        backgroundColor:"#c179e0",
        width:windowWidth * 0.8,
        borderRadius:20,
        alignItems:"center",
        marginVertical:windowHeight*0.03
    },
    btnSignOut:{
        backgroundColor:"red",
        width:windowWidth * 0.8,
        borderRadius:20,
        alignItems:"center",
    }
    
})