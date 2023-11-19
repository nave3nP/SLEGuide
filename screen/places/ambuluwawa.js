import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Ambuluwawa() {

  const images = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/60/ff/c5/ambuluwawa-tower-is-the.jpg?w=1200&h=-1&s=1',
    'https://srilankafinder.com/wp-content/uploads/2017/12/ambuluwawa-view.jpg',
    'https://www.laurewanders.com/wp-content/uploads/2022/03/Ambuluwawa-Tower-Gampola.jpg',
    'https://www.aquadunhinda.com/assets/images/attractions/8/2.jpg',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.1611,     //put latitude of the place
    longitude: 80.5471,  //put longitude of the place
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
            <Text style={styles.title}>Ambuluwawa</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            It is considered as the fourth botanical garden in Sri Lanka. It is a multi-religious centre where followers of all faiths 
            practiced in Sri Lanka come to practice their religion. It consists of a Buddhist Temple, Hindu Temple, a Church, and a Mosque. 
            You can travel by train to visit Ambuluwawa Tower.
            
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
