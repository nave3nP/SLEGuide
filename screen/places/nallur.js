import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Nallur() {

    const images = [
        'https://srilankatravelpages.com/media/2022/07/Nallur-temple-festival-jaffna-2022.jpg',
        'https://live.staticflickr.com/2946/15481827771_8770f60a29_b.jpg',
        'https://i.pinimg.com/originals/ee/f1/9f/eef19fce8daae652eca7adbcdd23752b.jpg',
        'https://visitsrilanka.com/vs-discover/wp-content/uploads/2017/06/5760951022_cec3c2fcfd_b.jpg',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 9.6667 ,   
    longitude: 80.0333, 
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
            <Text style={styles.title}>Nallur </Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
            Nallur Kandaswamy Kovil is the largest temple complex of Sri Lanka's Tamil community. 
            It deserves to be called Jaffna's spiritual centre of Hinduism. Nallur is a suburb of Jaffna city and also one of the town's two 
            divisional secretariats. Although Nallur division encompasses the entire northern half of the municipality of Jaffna, Nallur in a 
            narrrow sense is only one of these boroughs, situated 2.5 km northeast to the centre of Jaffna city. Historically, today's Nallur was 
            the capital of the late medieval and early modern Tamil principality known as 'Jaffna Kingdom'.

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