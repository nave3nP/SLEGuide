import React from "react";
import { SafeAreaView, StyleSheet,ScrollView, View, Text, ImageBackground,Image } from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";

function Contactus() {
  return (
<SafeAreaView style={{flex:1}}> 
<View style={styles.container}>
<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}></CupertinoHeaderWithAddButton>
<ScrollView>
<ImageBackground source={require('./assets/bg.png')}>    


<View style={styles.list}>
<Text style={styles.plist}>
<Image style={{width:50,height:50,alignItems:'center'}} source={{uri:"https://th.bing.com/th/id/R.32fac7801ccb6957ef6fd939e21da2ab?rik=AYhMh96bsiLLFw&pid=ImgRaw&r=0"}}/>                     4in4tech@four.lk
</Text>
</View>

<View style={styles.list}>
<Text style={styles.plist}>
<Image style={{width:50,height:50,alignItems:'center'}} source={{uri:"https://th.bing.com/th/id/R.fa780d221a2cad2c8578cd6621590b2c?rik=CD%2bU8EINL668%2bg&pid=ImgRaw&r=0"}}/>                     +94773161589
</Text>
</View>

<View style={styles.list}>
<Text style={styles.plist}>
<Image style={{width:50,height:50,}} source={{uri:"https://th.bing.com/th/id/R.d46698e62c69442a2209a23e3b2e28ae?rik=tUJvM95tyfKYVQ&pid=ImgRaw&r=0"}}/>                     4IN4Technology
</Text>
</View>

<View style={styles.list}>
<Text style={styles.plist}>
<Image style={{width:50,height:50,}} source={{uri:"https://icons.iconarchive.com/icons/social-media-icons/glossy-social/512/Twitter-icon.png"}}/>                     4IN4Technology
</Text>
</View>

<View style={styles.list}>
<Text style={styles.plist}>
<Image style={{width:50,height:50,}} source={{uri:"https://th.bing.com/th/id/R.df9b229e6b9365cd922b840a0326d98b?rik=z06gpUP64wzqdg&pid=ImgRaw&r=0"}}/>                     4IN4Technology
</Text>
</View>

<View style={styles.list1}><Text style={styles.plist}></Text></View><View style={styles.list1}><Text style={styles.plist}></Text></View>
<View style={styles.list1}><Text style={styles.plist}></Text></View><View style={styles.list1}><Text style={styles.plist}></Text></View>
<View style={styles.list1}><Text style={styles.plist}></Text></View><View style={styles.list1}><Text style={styles.plist}></Text></View>
<View style={styles.list1}><Text style={styles.plist}></Text></View><View style={styles.list1}><Text style={styles.plist}></Text></View>
<View style={styles.list1}><Text style={styles.plist}></Text></View><View style={styles.list1}><Text style={styles.plist}></Text></View>
<View style={styles.list1}><Text style={styles.plist}></Text></View><View style={styles.list1}><Text style={styles.plist}></Text></View>

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
  list:{
    backgroundColor: '#ffffff',
    padding:0,
    marginHorizontal:10,
    marginVertical:10,
    marginTop:20,
    height: 80,
    width: 370,
    borderRadius:10
    },
    plist:{
    fontSize:18,
    fontWeight:'bold',
    color:'green',
    }
    
});

export default Contactus;