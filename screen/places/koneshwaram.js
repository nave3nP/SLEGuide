import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Koneshwaram() {

    const images = [
        'https://static.wixstatic.com/media/ba255b_7496b67253b14054beed568a514b80b7~mv2.jpg/v1/fill/w_640,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ba255b_7496b67253b14054beed568a514b80b7~mv2.jpg',
        'https://scantravelsrilanka.com/wp-content/uploads/2020/04/61a0d8d5153667c38f97d5ab6e91736c.jpg',
        'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/Trincomalee-beach-top-view.jpg',
        'https://duqjpivknq39s.cloudfront.net/2019/01/800x750-16.jpg',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 8.58223870026,   
    longitude: 81.2452508003, 
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
        <ImageBackground source={require('./assets/images/bg.jpeg')} resizeMode="cover" style={{flex:1,resizeMode:'cover'}}>
          <View>
            <Text style={styles.title}>Koneshwaram </Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15, lineHeight:25}}> 
             
            ON A SPECTACULAR PROMONTORY OVERLOOKING one of the world’s largest natural harbours, there is an ancient temple dedicated to the 
            Hindu god Shiva. It is at the head of Konesar Malai (Swami Rock) on the dramatic Gokarna Bay, a seasonal home to blue whales.{'\n'}

Surrounded by jaw-dropping scenery on all sides, the colourful Koneswaram temple sits high above the bay, a classical-medieval complex in the 
Eastern Province city of Trincomalee. The site is a religious pilgrim centre, and is one of the five “Pancha Ishwarams” (abodes of Shiva) that 
were built in coastal regions of Sri Lanka to honor the supreme god of Hinduism.{'\n'}


The dates of the temple have been debated, with some scholars citing the original to around 400 BC, and later construction from as 
early as the 5th century to as late as the 18th. {'\n'}

At one time the complex was as large and grand as any in India or Sri Lanka. The grandeur was mostly lost in the 17th century at the 
hands of the colonial Portuguese, who razed structures, dumped some into the sea, destroyed objects, and smashed ornamentation. To salvage 
what they could, priests and devotees of the temple scrambled to bury their sacred objects, even taking advantage of the sea itself rather than 
seeing them crushed in the raid.  {'\n'}
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
    resizeMode: 'contain',
    minHeight:700
  },
  mapcontain: {
    alignSelf: 'center',
    flex:1,
  },
  description:{
    flex:2,
    paddingTop:40,
    paddingBottom:40,
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