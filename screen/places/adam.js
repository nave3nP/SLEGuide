import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


const Adam = ()=> {

  const images = [
    'https://https://www.attractionsinsrilanka.com/wp-content/uploads/2020/07/Sripada-.jpgplanetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Sigiriya.jpg',
    'https://www.dgi.gov.lk/images/Distric_/sripadhaya2017.jpg',
    'https://i2.wp.com/gotravelyourworld.com/wp-content/uploads/2019/04/adamspeak10.jpg?fit=1024%2C629&ssl=1',
    'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e6/6a/2d.jpg',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.8096,     //put latitude of the place
    longitude: 80.4994,  //put longitude of the place
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <View>
          <SliderBox images={images} dotColor="red" inactiveDotColor="black" dotStyle={{
            height:20, width:20, borderRadius:50
          }}/>
        </View>
        <View style={styles.container}>
        <ImageBackground source={require('./assets/images/bg.jpeg')} resizeMode="cover" style={{flex:1,resizeMode:'cover',height:800}}>
          <View>
            <Text style={styles.title}>Adam's Peak</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            It is 7,559 feet (2,304 metres) high and located 11 miles (18 km) northeast of Ratnapura, the capital of Sabaragamuwa province. 
            It is well known for the Sri Pada (Sinhala for “Sacred Footprint”), a hollow that is 67 inches (170 cm) long and 18 inches (46 cm) 
            wide and resembles the print of a human foot.
            
            </Text>
          </View>
          <View style={styles.mapcontain}>
            <MapView style={styles.map} region={mapRegion}>
              <Marker coordinate={mapRegion} title="Marker" />
            </MapView>
          </View>
          </ImageBackground>  
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 700,
    resizeMode: 'contain'
  },
  mapcontain: {
    alignSelf: 'center',
    flex:1,
    paddingBottom:80
  },
  description:{
    flex:2,
    paddingTop:40,

  },
  map: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical:120,
    paddingHorizontal:200,
    margin: 10,
  },
  bgimage:{
    flex:1,
  },
  title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:40
  }
});
export default Adam;