import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Pinnawala() {

    const images = [
        'https://www.travelwithdearsrilanka.com/wp-content/uploads/2020/05/pinnawala-10.jpg',
        'https://www.travelmapsrilanka.com/img/pinnawala/pinnawala-elephant-orphanage-feeding-elephants.jpg',
        'https://www.worldbesttourism.com/wp-content/uploads/2021/05/Pinnawala-Elephant-Orphanage.jpg',
        'https://i0.wp.com/elephantorphanagesrilanka.com/wp-content/uploads/2021/09/edengardentours_Pinnawala-Elephant-Orphanage-1.jpg?fit=1080%2C1347&ssl=1',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.2920,    
    longitude: 80.3845, 
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
            <Text style={styles.title}>Pinnawala</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Pinnawala Elephant Orphanage is just as the name suggests holds a unique disposition in the ex-situ animal care. 
             success and fame has travelled not just within the country but throughout the world to an extent where Pinnawala 
             synonymous with the Sri Lankan Elephant.

Currently being a home to 93 elephants the concept was actualized by the late Hon. Minister Kalugalle on the 16th of February 1975.  
Pinnawala at the time was a very remote area with lush coconut plantations and most importantly an area where the availability of 
mahouts was not lacking. Also the immense amount of water required by the elephants is supplemented with the availability of “Ma oya” 
running close by.

Each animal is also given around 76 kg of green matter a day and around 2 kg from a food bag containing rice bran and maize. 
The orphanage which boasts to have the largest herd of captive elephants in the world is very popular and visited daily by many 
Sri Lankan and foreign tourists. The main attraction is clearly to observe the elephants bathing which is quite a spectacle.

The success story of Pinnawala has drawn the attention of animal activists and scientists from all over the world. 
A considerable number of books and research articles on Pinnawala have been published in several languages. 
The elephants of the Pinnawala herd have been filmed, videoed and photographed thousands of times by professionals, 
and millions of times by amateurs. The message of conservation from Pinnawala has been passed on to thousands, if not millions of people,
 after their visit to the orphanage.

A visitor to Sri Lanka who is passionate about wildlife of the island should not miss out on an opportunity to experience the 
Pinnawala Elephant Orphanage. Visitors will have the opportunity to witness the beauty of the rural parts of Sri Lanka and to grab 
the perfect souvenir to carry home.
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