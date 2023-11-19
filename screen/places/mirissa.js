import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Mirissa() {

  const images = [
    'https://somethingoffreedom.com/wp-content/uploads/2018/01/Palm-tree-grove-Mirissa.jpg',
    'https://destinationlesstravel.com/wp-content/uploads/2019/04/DSC_8686.jpg.webp',
    'https://previews.agefotostock.com/previewimage/medibigoff/6ec344e3344812b1e4b761c21d5655aa/esy-031488583.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRY5d1Z6hG0rpuhSaBMwPUL4r_r5f4ivFR7g&usqp=CAU',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 5.9483,     //put latitude of the place
    longitude:  80.4716,  //put longitude of the place
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
            <Text style={styles.title}>Mirissa</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Mirissa is a small town on the south coast of Sri Lanka, situated in the Southern Province of Matara. It is about 150 kilometers 
            (93 mi) south of Colombo and is located at an elevation of 4 meters (13 ft) above sea level. The beach and nightlife of Mirissa 
            make it an attractive holiday destination.
            
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
