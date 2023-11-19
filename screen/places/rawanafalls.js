import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function RawanaFalls() {

    const images = [
        'https://www.jonnymelon.com/wp-content/uploads/2018/02/P1250066-2-e1518870958124.jpg',
        'https://www.jonnymelon.com/wp-content/uploads/2018/02/P1250043.jpg',
        'https://static.wixstatic.com/media/ba255b_a811933e8f8e429d89518fc737c984f6~mv2.jpg/v1/fill/w_1280,h_859,al_c,q_85/Sri%20Lanka_1148.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrioG5lJ4_NGpt8usoy2oUs2lsi0Tvp_bUQ&usqp=CAU',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.9023,   
    longitude: 81.0510, 
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
            <Text style={styles.title}>Rawana Falls</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Rawana falls is one of the country’s broadest. Seen from the Ella-Wellawaya road, the falls seem to spring from nothing 
            halfway up a granite cliff-face but are actually fed by a natural cave system. The falls are connected to the epic Ramayana,
             and takes its name from King Ravana, who is believed to have kidnapped and held captive Queen Sita in these caves.

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