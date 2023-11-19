import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Yapahuwa() {

    const images = [
        'https://static.saltinourhair.com/wp-content/uploads/2020/07/23113216/Yapahuwa-Rock-sri-lanka.jpg',
        'https://koonholidays.com/wp-content/uploads/2018/08/671a7244-cb44-40c2-99bd-ddc1c4f16ae1.jpg',
        'https://www.tourslanka.com/wp-content/uploads/2018/06/Yapahuwa-banner.jpg',
        'https://www.reddottours.com/uploads/Activities/Yapahuwa/Yapahuwa-gallery-pop-up-(2)-min.jpg',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.816667,   
    longitude: 80.316667, 
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
            <Text style={styles.title}>Yapahuwa </Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Strong, dry breezes ruffle the quiet serenity of the temperate country side. Wild grass thrust through pleasantly 
            undulating ground while a lone lizard revels in brilliant sunshine, poised on one of many ancient stone ruins. 
            Overhead looms the Yapahuwa rock, 300-foot isolated fortified wonder with a history dating back to the 13th Century.

In that era, Yapahuwa was Sri Lanka’s seat of governance and home to the Sacred Tooth Relic of the  Buddha. Today it is one of the 
country’s most unique and important sites of historic interest containing abundant traces of ancient battlements and remnants of king 
Buvenekabahu’s (1273-1284 AD) kingdom.

It is also home to the singular Chinese-looking ‘Yapahuwa Lion’ stone sculpture, the likeness of which is reproduced in the country’s 
newest Rs. 10 note. Historians compare Yapahuwa to the Sigiriya rock fortress but note that it was built on a much smaller scale.

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