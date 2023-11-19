import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, ImageBackground,Image } from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";


function Tips() {
  return (
<SafeAreaView style={{flex:1}}>
<View style={styles.container}>
<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}></CupertinoHeaderWithAddButton>
<ScrollView >
<ImageBackground source={require('./assets/bg.png')}>   

<View style={styles.imgContainer}>
<Image style={styles.image} source={require("./assets/tips.png")}/>
</View>
          
<View style={styles.list}>
<Text style={styles.hlist}>Research Before You Go</Text>
<Text style={styles.plist}>This may be a no-brainer, but you’d be surprised how many times travelers fail to do their research about the destination they’re visiting. Reading up on the country or city in general, about customs and cultures, about the proper accepted social etiquette, can all help you avoid any misunderstandings due to something being lost in translation. Giving yourself this know-how before you even leave on your trip is the best way to know what to expect, which areas you should show a bit more caution while traveling through, and what are the safest times to go exploring.</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Learn Some of the Local Lingo</Text>
<Text style={styles.plist}>With all the research you’ve done for the point mentioned above, this one should be covered too. It’s always good to know a few basic phrases in the native language of the place you’re visiting. Whether you need to ask directions to a hospital or police station, or just want to bargain for goods in a friendly manner, knowing a few words will definitely help. Get that language app for you phone, or get some handy pocket books with useful phrases.</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Tell Someone Where You’re Going & Keep in Touch with Them</Text>
<Text style={styles.plist}>It could be a trusted friend or family member, but it’s always a good idea to keep someone abreast of your travel plans. This is especially important if you’re thinking of a solo trip. It’s a good idea to tell someone about flight details, what time you’re arriving and departing a destination, and your mode of transportation between airports and accommodation.</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Don’t Forget to Have These Items Packed & Ready to Go</Text>
<Text style={styles.plist}>Always remember to have the following items ready to go and close at hand so that even in the maddest rush, you’ll be certain to be prepared for any emergencies:{"\n"}

A simple first-aid kit, with meds for common stomach bugs, headaches, and motions sickness.{"\n"}
A basic hygiene kit, with toothbrush, toothpaste, and other personal hygiene products{"\n"}
Some calorie food bars, which last a while and are good for nutrition on the go.{"\n"}
A small pouch or plastic bag for all you travel documents, including tickets and IDs.</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Make Extra Copies</Text>
<Text style={styles.plist}>Make copies of your passport, your travel insurance paperwork, and even your credit cards and remember to store them safely somewhere (remember to never carry them around with all your originals). In case of loss or theft of any of these valuables you’l be able to prove your identity and speed along police reports and other paperwork.</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Pay for Travel Insurance</Text>
<Text style={styles.plist}>We don’t want to sound like your parents, but it is important to get travel insurance! Trust us, you don’t want to be the one spoiling your group getaway when you have a jet skiing accident in Miami or rupture a eardrum while scuba diving in Indonesia. Having travel insurance just gives you a safely net that you’ll be taken care of and that in itself, is a great shield against any potential emergencies.</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Be Cautious Outside Tourist Areas</Text>
<Text style={styles.plist}>Knowing your surroundings can be crucial to having a safe holiday, especially if you’re a traveler who likes to go off the beaten path into more “authentic” local neighborhoods. Some places may be rougher and more unwelcoming to foreigners than you may think, and there could even be the risk of fraudsters and pickpockets to contend with. Just using common sense and a bit of instinct can help you avoid any unpleasant situations.</Text>
</View>

</ImageBackground>    
</ScrollView> 
</View>  
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(247,247,247,1)"
  },
  
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 380,
    opacity: 0.55,
    marginTop: 10,
    backgroundColor:"#ffffff",
    alignSelf: "center"
  },
  image:{
    width:160,
    height: 180,
    alignSelf: "center",
    marginVertical:20
  },
  list:{
    backgroundColor: '#ffffff',
    padding:0,
    marginHorizontal:10,
    marginVertical:10,
    paddingHorizontal:10,
    paddingVertical:10,
    minHeight: 250,
    width: 370,
    borderRadius:10,
    justifyContent:"center"
    },
    hlist:{
    fontSize:18,
    color:"#000000",
    alignSelf:"center",
    fontWeight:'bold',
    marginBottom:15
    },
    plist:{
    fontSize:15,
    },

});

export default Tips;
