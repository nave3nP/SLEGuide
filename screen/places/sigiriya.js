import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Sigiriya() {

    const images = [
        'https://static.toiimg.com/photo/65934851.cms',
        'https://www.srilankaecotourism.lk/location_img/98867.jpg',
        'https://www.travellankaconnection.com/images/destinations/gallery_Sigiriya-Rock.jpg',
        'https://voyageinstyle.net/wp-content/uploads/2020/01/sigiriya-pond4-scaled.jpg',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.956944,    
    longitude: 80.759720,  
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
            <Text style={styles.title}>Sigiriya</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Perched on a slab of rock that juts dramatically over the forests of central Sri Lanka, Sigiriya is as imposing a sight now as it must have been when it was first built by a fierce king in the fifth century A.D. 
            Meaning “lion’s rock,” Sigiriya (designated a UNESCO World Heritage site in 1982) is accessed by way of 
            passageways cut into the rock face between a monumental pair of lion paws.

            The fortress was later swallowed by the forest, and only familiar to local villagers.
             Outsiders used knowledge of its past, preserved in Buddhist texts, to search for the ancient site. 
             British historians rediscovered its astonishing buildings and frescoes in the 19th century.

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