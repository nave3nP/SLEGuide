import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


const Arugambay=()=> {

  const images = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f8/5f/0f/beach.jpg?w=1200&h=-1&s=1',
    'https://www.srilankatravelandtourism.com/places-sri-lanka/arugam-bay/arugam-bay-images/arugam-bay-3-sri-lanka.jpg',
    'https://lp-cms-production.imgix.net/2019-06/f0275838e5f1a765d23f3d1835d4c541-arugam-bay-beach.jpg',
    'https://api.travelql.com/images/99f7bda5-680e-473c-9fe7-d7c3e391e8eb.webp',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.8404,     //put latitude of the place
    longitude:  81.8368,  //put longitude of the place
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
            <Text style={styles.title}>Arugam Bay</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Arugam Bay is a bay situated on the Indian Ocean in the dry zone of Sri Lanka's southeast coast. The bay is located 320 km due 
            east of Colombo. It is a popular surfing and tourist destination.
            
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

export default Arugambay;
