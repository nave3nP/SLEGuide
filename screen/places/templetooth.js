import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Templetooth() {

    const images = [
        'https://nexttravelsrilanka.com/wp-content/uploads/2021/01/The-Temple-of-the-Tooth-Relic.jpg',
        'https://www.archaeology.lk/wp-content/uploads/2020/11/the_chamber.jpg',
        'https://i.pinimg.com/736x/c8/2d/a5/c82da57609bf9e0352697f898ca40d93.jpg',
        'https://sridaladamaligawa.lk/wp-content/uploads/2021/12/SDM_Elephant-Group-Img_web_72p.jpg',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.293627,   
    longitude: 80.641350,  
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
            <Text style={styles.title}>Templetooth</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Entering the shrine over a moonstone step, you pass a stone depicting the Indian goddess Lakshmi and a wall with frescoes 
            illustrating the Buddhist conception of hell.  The upper stories house the relic of the tooth, caged behind the gilded 
            iron bars.  Behind the tooth relic sanctuary is a hall with a number of golden Buddha statues and modern paintings, 
            showing Buddha’s life and the arrival of Buddhism in the land.  We end our tour just before the evening drumming begins, 
            which precedes the ceremonious opening of the window for the public viewing of the casket with the tooth.

            While you probably won’t be able to see the tooth itself, you can stretch to view the casket it is contained in with 
            hundreds of other pilgrims. The temple itself is worth it for sheer aesthetic overload—vibrant colors, fragrant flowers 
            and ornate designs line the walls and ceilings.

            Held every day at 5:30 am, 9:30am and 6:30 pm, the puja ceremonies may be more crowded than other times of the day at the 
            temple, but it’s worth it! And make sure you’re dressed appropriately! As with all temples in Sri Lanka, you shouldn’t wear 
            anything shorter than the knee (especially the ladies), and your shoulders should be covered. A scarf, sarong, or pashmina 
            are great items to pack for just the purpose!



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