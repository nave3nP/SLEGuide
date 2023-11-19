import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Ella() {

  const images = [
    'http://ruhirutours.lk/wp-content/uploads/2020/03/Blog1_Ruhiru-Tours-scaled.jpg',
    'https://destinationlesstravel.com/wp-content/uploads/2019/05/DSC_9600-1-1024x684-1024x684.jpg',
    'https://static.saltinourhair.com/wp-content/uploads/2016/11/23155637/Things-to-do-Ella-Sri-Lanka-Nine-arch-bridge-view-2.jpg',
    'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1551068909788-D42JJSD0ZKF61FIOIKF2/The_Common_Wanderer_Things_to_do_ella-22.jpg',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.8667,     //put latitude of the place
    longitude:  81.0466,  //put longitude of the place
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
            <Text style={styles.title}>Ella</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, 
            due to its elevation. The Ella Gap allows views across the southern plains of Sri Lanka. On a sunny morning, you can even see the glow 
            from the lighthouses along the southern coast.
            
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
