import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function Udawalawa() {

    const images = [
        'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/sv4trr6f42g7a9qxzg6nb97pgfy9_1558097416_shutterstock_726294346.jpg.jpg',
        'http://walauwathevillaahungalla.com/assets/img/tour/udawalawe-national-park-day-tour/slider-2.jpg',
        'http://governorscampsrilanka.com/gc/wp-content/uploads/2014/07/wild-life-and-nbational-parks-udawalawe-2.jpg',
        'https://www.sankileisure.com/wp-content/uploads/2020/07/Udawalawe-National-Park.jpg',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 6.473889,   
    longitude: 80.898611, 
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
            <Text style={styles.title}>Udawalawe</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Udawalawe is the only national park where the Sri Lankan wild elephant, a magnificent subspecies of the Asian elephant, 
            can be seen at any time of the day. Elephants, leopards, deer's, pigs and jackals can be seen here. 
            You can also see White~Spotted Chevrotain, Porcupine, golden palm civet, Rabbits, as well as the small members of the wild cat 
            family living in Sri Lanka Rusty-spotted cat, fishing cat and the Wild cat.Big reptiles like Tortoise, Water monitor, 
            Mugger Crocodile as well as Python, and Snake, Viper live here because it is a safe habitat for every animal led by an elephant.
            It is also home to over 100 species of small reptiles, over 100 species of birds, over 100 species of butterflies, 
            amphibians and dry mixed evergreen forests.The dry lagoon forest is the most suitable garden for elephants to live in and 
            determines their survival.Therefore, the elephant is the keystone species in Udawalawe.In the controlled forest garden created 
            by all the activities of the elephant, we can see that every other animal above lives freely and safely.Udawalawe elephant is 
            therefore the umbrella species.The safety of the Udawalawa elephant means the safety of every other animal If you visit Udawalawa 
            once, you can forget all that
Also, you are contributing to the protection of the world's environment and ensuring its sustainable existence Also, the beautiful Udawalawa 
Reservoir is the water catchment protecting area of ​​this Udawalawe National Park. The other speciality of Udawalawe is that it is a 
better exchange centre for elephants because Udawalawe has two grant corridors.
One is the wetarikanda nature reserve which is connected to Lunugamwehera Yala and the Dahayiyagala sanctuary which is connected to 
Udawalawe Bogahapattiya. Therefore, the unique behaviours of elephants, herds of elephants and male elephants can be seen live. Also, 
the wonder of a sunrise in the morning and a beautiful sunset in the evening can be seen on the mountain.
Scenic surroundings with beautiful views especially based on the agrarian economy so you can enjoy fresh fruits and vegetables and 
freshwater fish so You can experience this all if you came to visit Udawalawe.

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