import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Hortan() {

  const images = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/85/1c/01/horton-plains-national.jpg?w=1200&h=-1&s=1',
    'https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/Horton-Plains-National-Park1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZd1e3cyMSz0PSSdCrOwxCCZWz6PzZoV4KMg&usqp=CAU',
    'https://www.steuartholidays.com/wp-content/uploads/2019/02/Bakers-Falls-Hortan-Plains-3-1.jpg',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.8028,     //put latitude of the place
    longitude:  80.8091,  //put longitude of the place
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
            <Text style={styles.title}>Horton Plains National Park</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Horton Plains in Sri Lanka, is the coldest and windiest location in the country. It consists of ecosystems such as Montane 
            evergreen forests, grasslands, marshy lands and aquatic ecosystem.
            
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
