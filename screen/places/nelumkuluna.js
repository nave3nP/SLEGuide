import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function LotusTower() {

  const images = [
    'http://www.yamu.lk/wp-content/uploads/2022/10/Image-1.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1c/85/0c/2b/nelum-kuluna.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/19/57/77/0b/blooming-colombo.jpg',
    'http://english.lankapuvath.lk/wp-content/uploads/2019/09/Nelun-Kuluna.png',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.9271,     //put latitude of the place
    longitude:  79.8583,  //put longitude of the place
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
            <Text style={styles.title}>Lotus Tower</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            It has been called a symbolic landmark of Sri Lanka. As of 2019, the tower is the tallest self-supported structure in South Asia; 
            the second tallest structure in South Asia after the guy-wire-supported INS Kattabomman in India; the 11th tallest tower in Asia 
            and the 19th tallest tower in the world.
            
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
