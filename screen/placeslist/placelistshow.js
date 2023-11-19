import  React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text,TouchableOpacity, ImageBackground,Dimensions } from "react-native";
import Placedetail from './components/placedetail';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('screen').width;
const Places = ()=>{
  
  const navigation=useNavigation();

  return (


<SafeAreaView style={{flex:1}}>
  

<View style={styles.container}>

<Placedetail ></Placedetail>

<ScrollView style={styles.scroll}>
 <ImageBackground source={require('../src/bg.png')}>
<Image source={require("../src/pls.jpg")}style={styles.image}></Image>

            
        <TouchableOpacity onPress={()=>{navigation.navigate("NineArch")}}>
        <View style={styles.list}>
        <Image source={{width:screenWidth-50,height:300,
        uri:"https://th.bing.com/th/id/R.71b9061e28a17c4ddc8ead311ee4ee6f?rik=evR3t%2bFaOUokZw&pid=ImgRaw&r=0"}} style={styles.imgliststyle}/>
        <Text style={styles.title}> Nine arch </Text></View>
        </TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("VictoriaPark")}}>
<View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://i.ytimg.com/vi/REN9NcUkk04/maxresdefault.jpg"} } style={styles.imgliststyle}/>
      <Text style={styles.title}>Victoria park</Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Gregory")}}>
<View style={styles.list}>
<Image source={{  width:screenWidth-50,height:300,
        uri:"https://digitaltravelcouple.com/wp-content/uploads/2019/12/places-to-visit-nuwara-eliya-gregory-lake.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Lake Gregory</Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Hakgala")}}>
<View style={styles.list}>
<Image source={{
         width:screenWidth-50,height:300,
        uri:"https://th.bing.com/th/id/R.3a5937d53d8f9c99df5ed40c3113ff57?rik=HKp1BZuQHxmV0A&pid=ImgRaw&r=0&sres=1&sresct=1"}} style={styles.imgliststyle}/>
<Text style={styles.title}> Hakgala </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Sigiriya")}}>
<View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://th.bing.com/th/id/R.b38a672d79d302e2bc37d796cc1d5a63?rik=CUKTCipdmE%2faRA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-pTOpQT40HY4%2fUHab9IPsxXI%2fAAAAAAAAABE%2foTVM1PhUWUs%2fs1600%2fSigiriya.jpg&ehk=yRjFpzre8mhcPGQ5wzODCwcEdbMOhStVaPDa%2fHOir4k%3d&risl=&pid=ImgRaw&r=0"}} style={styles.imgliststyle}/>
<Text style={styles.title}>Sigiriya</Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Ambuluwawa")}}>
<View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://th.bing.com/th/id/R.de94701ba1b828fc582b9b394169fef3?rik=cJxPi4MMYXUyOg&pid=ImgRaw&r=0"}} style={styles.imgliststyle}/>
<Text style={styles.title}>Ambuluwawa</Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Ambuluwawa")}}>
<View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://th.bing.com/th/id/OIP.Hup-Qjv0KyOj_7jhL210aAHaFj?pid=ImgDet&rs=1"}} style={styles.imgliststyle}/>
<Text style={styles.title}>Lotus Tower </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Yapahuwa")}}>
<View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://th.bing.com/th/id/R.6a3d835e9bd280e3c279730ed1240387?rik=zVXsfmz10Kclgg&pid=ImgRaw&r=0"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Yapahuwa </Text></View>
</TouchableOpacity>      

<TouchableOpacity onPress={()=>{navigation.navigate("Horton")}} style={styles.imgliststyle}>
        <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://duqjpivknq39s.cloudfront.net/2019/03/800x750-94.jpg"}} style={styles.imgliststyle}/>
        <Text style={styles.title}>Hortan Place </Text></View>
</TouchableOpacity>        

<TouchableOpacity onPress={()=>{navigation.navigate("Arugambay")}}>
       <View style={styles.list}>
<Image source={{  width:screenWidth-50,height:300,
        uri:"https://duqjpivknq39s.cloudfront.net/2019/03/800x750-17.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Arugambay </Text></View>
</TouchableOpacity>
      
<TouchableOpacity onPress={()=>{navigation.navigate("Yala")}}>
      <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://travelsrilankanews.files.wordpress.com/2020/07/thewayfaress_20200626_2.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Yala </Text></View>
</TouchableOpacity>      

<TouchableOpacity onPress={()=>{navigation.navigate("Udawalawa")}}>
      <View style={styles.list}>
<Image source={{  width:screenWidth-50,height:300,
        uri:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/0b/2a/7c.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Udawalawe </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("RawanaFalls")}}>
       <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://tropicalasiatours.com/wp-content/uploads/2020/12/Ravana-Falls6.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Rawana falls </Text></View>
</TouchableOpacity>     
       
       <TouchableOpacity onPress={()=>{navigation.navigate("Adam")}}>
       <View style={styles.list}>
       <Image source={{ width:screenWidth-50, height:300,
        uri:"https://images.rove.me/w_1920,q_85/xegmfct9cvwnapnptw1n/sri-lanka-adams-peak-pilgrimage.jpg"}} style={styles.imgliststyle}/>
       <Text style={styles.title}>Adam's peek </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Templetooth")}}>
       <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE57wkmBL8WgtOdBIIfUd7iU2qMgKCM6qjGA&usqp=CAU"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Temple tooth </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Templetooth")}}>
       <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://srilankawa.lk/wp-content/uploads/2021/12/Mount-Lavinia-Beach-image-1.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Mount Lavinia </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Templetooth")}}>
       <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://mahaweli.lk/wp-content/uploads/2022/03/Ella-City-Tour-Mahaweli-1080x530.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Ella </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Pinnawala")}}>
       <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://www.travelmapsrilanka.com/img/pinnawala/pinnawala-elephant-orphanage-feeding-elephants.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Pinnawala </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Mirissa")}}>
       <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://lh3.googleusercontent.com/pw/ACtC-3c0JWcQpetUuNWYau1SbSVVbt0z-mAfoNV0JHqsMLNmVqepC9SaQOaAKz0o6pYDBUwAN7dyXYA5XnvvxC_kutlpYrtMCiBN-CiGT0sHHLR3oCblAHz_N-JWq1LTdzsmwuWd2tEEzvQDSkX0Vlp0mabM=w496-h620-no?authuser=1"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Mirissa </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Peradeniya")}} style={styles.imgliststyle}>
       <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://www.attractionsinsrilanka.com/wp-content/uploads/2019/07/Royal-Botanical-Gardens-Peradeniya.jpg"}} style={styles.imgliststyle}/>
        <Text style={styles.title}>Peradeniya </Text></View>
</TouchableOpacity>
       
<TouchableOpacity onPress={()=>{navigation.navigate("Peradeniya")}} style={styles.imgliststyle}> 
       <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://lankalink.info/wp-content/uploads/beauty-of-sinharajaya.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Sinharaja </Text></View>
</TouchableOpacity>      

<TouchableOpacity onPress={()=>{navigation.navigate("Unawatuna")}} style={styles.imgliststyle}> 
      <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://static.saltinourhair.com/wp-content/uploads/2016/11/23154233/things-to-do-unawatuna-sri-lanka-beach-header.jpg"}}/>
      <Text style={styles.title}>Unawatuna </Text></View>
</TouchableOpacity> 

<TouchableOpacity onPress={()=>{navigation.navigate("BahirawaKanda")}} style={styles.imgliststyle}> 
      <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://thatswhatshehad.com/wp-content/uploads/2018/07/bahirawakanda-kandy.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Bahirawakanda </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Ruwanweliseya")}} style={styles.imgliststyle}>
      <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://duqjpivknq39s.cloudfront.net/2018/12/ruwanwelisaya-800x750.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Ruwanwalisaya </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Ruwanweliseya")}} style={styles.imgliststyle}>
      <View style={styles.list}>
<Image source={{  width:screenWidth-50,height:300,
        uri:"https://duqjpivknq39s.cloudfront.net/2018/12/800x750-zoo.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Dehiwala Zoo </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("Nallur")}}>
      <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://www.lakpura.com/images/LK94009771-03-E.JPG"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Nallur </Text></View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate("JaffnaFort")}}>
      <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://www.artra.lk/uploads/article/wide/1611191984_wide.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Jaffna fort </Text></View>
</TouchableOpacity>

      <View style={styles.list}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Koneshwaram")}}>
      <Image source={{ width:screenWidth-50,height:300,
        uri:"https://duqjpivknq39s.cloudfront.net/2019/01/800x750-16.jpg"}} style={styles.imgliststyle} />
        </TouchableOpacity>
      <Text style={styles.title}>Koneshwaram </Text></View>

      
      <TouchableOpacity onPress={()=>{navigation.navigate("Koneshwaram")}}>
      <View style={styles.list}>
<Image source={{ width:screenWidth-50,height:300,
        uri:"https://www.booqify.com/wp-content/uploads/2017/09/Galle-Fort-main-1200x556.jpg"}} style={styles.imgliststyle}/>
      <Text style={styles.title}>Gall fort </Text></View>
      </TouchableOpacity>

      
</ImageBackground> 
   
</ScrollView> 
</View>


     
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    width:screenWidth
  },
  cupertinoHeaderWithAddButton: {
    height: 64,
    width: 500,
    marginTop: 8
  },
  image: {
    height:450,
    width: 500,
  },

  placefooter: {
    height: 70,
    width: 400,
    marginTop: 26
  },
  list:{
    alignContent:'center',
    justifyContent:'center'
  },
  title:{
    margin: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 150,
    alignItems: 'center'
  },
  imgliststyle:{
    borderRadius:10,
    alignSelf:'center',
    marginTop:10,
  }
});

export default Places;