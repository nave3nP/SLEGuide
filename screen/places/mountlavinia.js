import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function MountLavinia() {

  const images = [
    'https://pix10.agoda.net/hotelImages/44543/-1/8186d1484853b65b557da2aec520800c.jpg?ca=7&ce=1&s=1024x768',
    'https://visitcolombo.com/images/post/15/1421538777.jpg',
    'https://styleinsrilanka.files.wordpress.com/2019/03/dsc_8694-3.jpg?w=825&h=510&crop=1',
    'https://i.pinimg.com/originals/12/a3/c9/12a3c9340f1b615291630d37a4de6e94.jpg',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.8301,     //put latitude of the place
    longitude:  79.8801,  //put longitude of the place
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
            <Text style={styles.title}>Mount Lavinia</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            It is one of the most liberal regions in Sri Lanka and plays host to the island's annual Gay Pride and Rainbow Kite Festival 
            since 2005. The area's name arose when the second Governor of Ceylon, Sir Thomas Maitland, acquired land at 
            "Galkissa" (Mount Lavinia) and decided in 1806 to construct a personal residence there.
            
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
