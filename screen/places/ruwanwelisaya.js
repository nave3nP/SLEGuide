import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Ruwanweliseya() {

  const images = [
    'https://www.talesofceylon.com/wp-content/uploads/2020/04/Ruwanweliseya_800x520.jpg',
    'https://www.thingstodosrilanka.com/wp-content/uploads/2020/03/Ruwanweli-Maha-Seya.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/RuwanwelisayaFromSky.jpg/285px-RuwanwelisayaFromSky.jpg',
    'https://t4.ftcdn.net/jpg/01/70/40/15/360_F_170401545_Iz3m01bZOPgejwfa0lAOJbaa0drXC4tK.jpg',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 8.3500,     //put latitude of the place
    longitude:  80.3964,  //put longitude of the place
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
            <Text style={styles.title}>Ruwanweli Maha Seya</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            The Ruwanweli Maha Seya, also known as the Mahathupa ( lit. 'the Great Thupa'), is a stupa (a hemispherical structure containing relics) in Anuradhapura, 
            Sri Lanka. Two quarts or one Dona of the Buddha's relics are enshrined in the stupa, making it the largest collection of his relics anywhere.
            
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
