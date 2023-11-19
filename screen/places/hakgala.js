import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Hakgala() {

  const images = [
    'https://www.destinationsrilanka.travel/images/hill_Country/Hakgala_Botanical_Garden/01.jpg',
    'https://api.travelql.com/images/5eac7ac7-d738-40ce-8374-1f48c025c90e.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iyA792ZOYDJmxLdvTy_3wIL2bbKSarEe4g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEBTjmsSao5xJ8VaekQW_Aa5q1UJnWxlWEukjM_Z-8W3SjeXvWW6tTRhvK-g4xh-Smr4&usqp=CAU',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.9266,     //put latitude of the place
    longitude:  80.8215,  //put longitude of the place
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
            <Text style={styles.title}>Hakgala Botanical Garden</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Hakgala is a temperate hill-country garden, where the lovely low-country lotus and water lily mingles in their serene simplicity 
            with sophisticated English roses, pre-historic looking ferns, and endemic orchids. The intimidating Hakgala rock provides an awe 
            inspiring backdrop to the garden, rising 450 meters over it.
            
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
