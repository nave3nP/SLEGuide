import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Peradeniya() {

    const images = [
        'https://www.attractionsinsrilanka.com/wp-content/uploads/2019/07/Royal-Botanical-Gardens-Peradeniya.jpg',
        'https://www.greatgardensoftheworld.com/wp-content/uploads/2020/01/GALLERY_RBG-5.jpg',
        'https://i.pinimg.com/originals/ec/19/4b/ec194bf7ceeadff9691d18cd70bcebc6.jpg',
        'https://api.travelql.com/images/20c603ef-8246-4398-abe7-20110606ce14.webp',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.2693,    
    longitude: 80.5907,  
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
            <Text style={styles.title}>Peradeniya Botanic Garden</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Peradeniya Botanic Gardens, botanical garden in Peradeniya, near Kandy, Sri Lanka, noted for its rich and varied collections
             of tropical woody plants. Occupying 59 hectares (146 acres), it has about 4,000 species of plants. The most important 
             specimens of the garden include palms, some of which are planted in impressive avenues. Significant, too, are the 
             collections of orchids, gymnosperms, and flowering trees.

The gardens were founded in 1821 primarily to introduce coffee trees and various other tropical plants of economic importance to the 
region. Even after it took on a more botanical emphasis in the 1840s, the garden remained a centre for horticultural activities. 
Under the directorship of the botanist George H.K. Thwaites, the garden played a pivotal role in establishing the country’s 
flourishing tea industry in the late 1870s. Thwaites also brought in and cultivated the Brazilian rubber tree, which became a crop 
producer vital to Sri Lanka’s economy. 
The botanical collection has developed into one of the finest in the region.

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