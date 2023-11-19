import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function JaffnaFort() {

    const images = [
        'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1566405276559-Y3NJ34X05PKEAVY3JFCF/The_Common_Wanderer_jaffna_things_to_know-7.jpg',
        'https://i.pinimg.com/originals/f4/6e/e3/f46ee37916f1bfc5e8dce7d34d2f08d1.jpg',
        'https://www.travellankaconnection.com/images/blogs/Jaffna-Fort-Sri-Lanka1.jpg',
        'https://www.jaffnatours.lk/sites/default/files/styles/place_main_pictures/public/places/jaffnatours-dutch%20fort.jpg?itok=GKcA3B4J',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 9.660889,   
    longitude: 80.00917, 
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
            <Text style={styles.title}>Jaffna fort </Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Today, the 400-year-old fort is a visceral reminder of Sri Lanka’s colonial past, as well as a maritime heritage. 
            The massive fort complex overlooks the Jaffna lagoon, and while much of it remains intact, a certain part of the fort had to undergo 
            extensive restoration efforts.

The fort is known as one of the greatest Dutch forts in Asia, owing to the extensive alterations they made to the original Portuguese design, 
including adding defensive triangles to mirror something similar to a snowflake (which is especially visible from an aerial vantage point).

The gorgeous fort is settled within the borders of a pentagon, which is, in turn, surrounded by a moat. The fort’s walls were constructed with a 
combination of mortar, brick, stone and coral, and to this day, are mostly hidden underneath grassy slopes.

If you’re into history and the exciting architectural wonders it has gifted us with, a visit to Jaffna Fort would be ideal for you!

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