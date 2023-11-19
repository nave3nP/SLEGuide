import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Unawatuna() {

  const images = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/17/f0/2d/20190407-165442-largejpg.jpg?w=1200&h=-1&s=1',
    'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/c1.jpg',
    'https://villamarinahikkaduwa.com/wp-content/uploads/2016/06/unawatuna-beach.jpg',
    'https://cocobayunawatuna.com//wp-content/uploads/2018/10/Layer-55.png',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.0097,     //put latitude of the place
    longitude:  80.2484,  //put longitude of the place
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
            <Text style={styles.title}>Unawatuna Beach</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Unawatuna is a major tourist attraction in Sri Lanka and known for its beach and corals. It is a suburb of Galle, about 5 kilometres (3.1 mi) southeast 
            to the city center and approximately 108 kilometres (67 mi) south of Colombo. Unawatuna is situated at an elevation of 5 metres (16 ft) above the sea level.
            
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
