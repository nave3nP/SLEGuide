import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Yala() {

    const images = [
        'https://s1.it.atcdn.net/wp-content/uploads/2018/12/yala.jpg',
        'https://www.sankileisure.com/wp-content/uploads/2020/09/yala-sri-lanka.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/26/10/d1/bathing-time-july2017.jpg?w=1200&h=900&s=1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oXZu0rEN2AVssNTV5M4_s-lpfC4YqnCvJqpfZvAQ0CM3wUMSO12B3JLfbK85zWpGWu4&usqp=CAU',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.5400,      
    longitude: 101.2813,  
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
            <Text style={styles.title}>Yala National Park</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Yala combines a strict nature reserve with a national park. Divided into 5 blocks, the park has a protected area of nearly 
            130,000 hectares of land consisting of light forests, scrubs, grasslands, tanks and lagoons. Two blocks are currently 
            opened to the public.

Situated in Sri Lanka’s south-east hugging the panoramic Indian Ocean, Yala was designated a wildlife sanctuary in 1900 and was 
designated a national park in 1938. Ironically, the park was initially used as a hunting ground for the elite under British rule. 
Yala is home to 44 varieties of mammal and 215 bird species. Among its more famous residents are the world’s biggest concentration of 
leopards, majestic elephants, sloth bears, sambars, jackals, spotted dear, peacocks, and crocodiles. The best time to visit Yala is 
between February and July when the water levels of the park are quite low, bringing animals into the open.

Yala is in a hot, semi-arid environment despite its lush greenish look, especially during the monsoon season. Temperature ranges 
from 260C to about 300C. The North-east monsoon season is when Yala gets most of its rainfall from September to December.

It’s home to Panthera pardus kotiya, a majestic leopard endemic to Sri Lanka. But among the glorious spectacle of wildlife, you’d also 
witness the tell-tale signs of a lost civilization. The Monastic settlement of Sithulpawwa, an important pilgrim site, is said to have
 housed 12,000 inhabitants seeking solace, some 2000 years ago. The restored rock Temple, among a series of well-preserved ancient 
 temples offers a glimpse into a glittering past. What is today a pristine wildlife kingdom, Yala was home to a thriving civilization,
  dating back to the glory days of Sri Lankan Kings. Hundreds of tanks, most in dilapidated state today, are testimony to an agri-based 
  civilization. The large, thriving tanks now provide a lifeline to the animal kingdom, especially during dry season.

Yala combines a strict nature reserve with a national park. Divided into 5 blocks, the park has a protected area of nearly 
130,000 hectares of land consisting of light forests, scrubs, grasslands, tanks and lagoons. Two blocks are currently opened to 
the public.



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