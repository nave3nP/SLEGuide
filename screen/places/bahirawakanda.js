import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Bahirawakanda() {

  const images = [
    'https://www.lovidhu.com/uploads/posts/2021/05//bahirawakanda-temple-sri-lanka-945x630.jpg',
    'https://www.kandyescapes.com/wp-content/uploads/2020/04/bahirawakanda-mob.jpg',
    'https://lh3.googleusercontent.com/pw/ACtC-3dRyUXEySnmEjs2ycwN3iXFW1F_K9x9retk-HAvrAXq5GRqXRDzOHBrWbg_d5D8AE0AQqpVGeydh2j7DOzW9Q6YLK5mEyV2X_uKNgpesqF3qW4YARjE6ThtDW9oGLYu2Uy-vne_Dh2Ldq0fkxaN7ktf=w864-h490-no?authuser=2',
    'https://thumbs.dreamstime.com/z/family-sri-lanka-family-father-son-exploring-bahirawakanda-temple-kandy-sri-lanka-178597181.jpg',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.2955,     //put latitude of the place
    longitude:  80.6298,  //put longitude of the place
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
            <Text style={styles.title}>Bahirawakanda</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            The temple on the hill of Bahirawakanda, called the Sri Maha Bodhi Viharaya, is most well-known to tourists for its giant Buddha statue, which can be seen 
            from almost any point in the city of Kandy. Built in 1972, the statue shows Lord Buddha seated in the Nirvana pose, which is the position associated with 
            his first Enlightenment. Reaching a height of more than 25 metres, it is one of the tallest statues of Buddha in Sri Lanka.
            
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
