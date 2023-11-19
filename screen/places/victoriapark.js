import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function VictoriaPark() {

    const images = [
        'https://www.trawell.in/admin/images/upload/140958818Nuwara_Eliya_Victoria_Park.jpg',
        'https://i.ytimg.com/vi/REN9NcUkk04/maxresdefault.jpg',
        'https://th.bing.com/th/id/OIP.Sqmww0DFmG2jH2eKQVTriAHaJQ?pid=ImgDet&rs=1https://duqjpivknq39s.cloudfront.net/2018/12/800x750-32.jpg',
        'https://mahaweli.lk/wp-content/uploads/2022/04/Victoria-Park-Nuwara-Eliya.jpg',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 51.5400, 
    longitude: -0.0340,  
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
            <Text style={styles.title}>Victoria Park Nuwara-Eliya</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Few places in Sri Lanka could compete with Victoria Park’s extensive array of flowering plants, with rare endemic flora to 
            more intrepid blooms making an experience across the expanse of the park.
The park comes under the local municipal council’s jurisdiction, which carefully maintains the many gardens within its parameters.

The park is accessible to the public all year round, but it’s highly recommended to pay a visit during the months of March to May, 
and again in August to September, when the flowers are in full bloom, in order to get the most out of the experience.
Grab a pair of binoculars on your way there as you’re sure to find dozens of wonderful tropical birds perched on the trees around. 
You could spot the Sri Lanka scimitar babbler (Pomatorhinus melanurus) or the yellow-eared bulbul (Pycnonotus penicillatus), 
and many more, so it’s a spotting experience you mustn’t miss!

Towards the far end of the park, you will find the children’s section, with a play area and even a miniature train! Though it’s a 
lovely spot for a picnic, be sure to clear things up once you’re done so as to ensure the splendid view stays splendid! The park is 
open from 7 a.m. to 6 p.m. every day, and the entrance fee is Rs. 300.

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