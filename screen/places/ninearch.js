import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function NineArch() {

  const images = [
    'https://th.bing.com/th/id/OIP.XaDulCJgG65jEfERSOw5KQHaFj?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.8fF8LjX9BT7PqB84tA8xmwHaE7?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.Sqmww0DFmG2jH2eKQVTriAHaJQ?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.J2xpEjfQdzLn4oNvEffR5wHaEK?pid=ImgDet&w=2048&h=1151&rs=1',
  ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.876672,    
    longitude: 81.06138, 
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
            <Text style={styles.title}>Nine Arch</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            The Nine Arch Bridge in Ella is on the Demodara loop and spans 91 meters at a height of 24m. The beautiful nine arches make it a very picturesque spot especially as it is located in a dense jungle and agricultural setting. 
            Behind the railway, a forest is booming, and below, tea leaves are being cultivated. It’s truly one of the most amazing placesto visit in Sri Lanaka.

The Nine Arch Bridge, built under British rule in 1921, stands as a remarkable example of the engineering and design genius of the early 20th century. 
People who choose to walk along the bridge will be treated to sights of undulating hills and dense vegetation while they do so, as it is conveniently located between the Ella and Demodara railway stations.

The Nine Arch Bridge, sometimes referred to as the “Bridge in the Sky,” was built by joining two bog mountains when the Badulla-Colombo railway was being built. 
The dimensions of this bridge are 300 feet long, 25 feet wide, and 80 to 100 feet high. One of the nation’s outstanding examples of railroad construction from the colonial era is this one. 
2 kilometers on Gotuwala road, beginning at Halpe Textile Center on Badulla Bandarawela road, will bring you to the Bridge. The innovative design of the bridge 
and the abundance of vegetation on the adjoining hillsides have led to a steady rise in tourism in the area.

It is advisable to verify the train schedule in advance because it is debatably ideal to go outside when the locomotives are chugging along. However, 
make sure you bring your dependable camera along so you can record every moment as it unfolds in front of you.

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