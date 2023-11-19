import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Gregory() {

  const images = [
    'https://www.trawell.in/admin/images/upload/140958556Nuwara_Eliya_Gregory_Lake.jpg',
    'https://www.dailynews.lk/sites/default/files/news/2020/10/08/z_p03-Public-parks.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a8/Gregory_lake_-_Nuwara_Eliya.jpg',
    'https://www.thingstodosrilanka.com/wp-content/uploads/2020/05/gregory-lake-floating-restaurant.jpg',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.9567,     //put latitude of the place
    longitude:  80.7783,  //put longitude of the place
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
            <Text style={styles.title}>Gregory Lake</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Spanning 225 acres, Lake Gregory is the place to go for water activities in Nuwara Eliya, with the park serving as a great spot for 
            picnics. You can find little ponies trotting along on the grass and boats that you could hire to go out on the lake and enjoy some 
            serenity away from the noise.
            
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
