import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Image,
  Linking
} from "react-native";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../router/configs/config";

const EntityList = ({ entityType }) => {
  const [data, setData] = useState([]);

  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const entityImages = {
    guides: require("../assets/Images/guides.png"),
    drivers: require("../assets/Images/driver.png"),
    vehicles: require("../assets/Images/vehicle.png"),
    // Add other entity types and their respective image paths here
  };

  const getImageSource = (entityType) => {
    // Check if the entityType exists in the mapping object
    if (entityImages.hasOwnProperty(entityType)) {
      return entityImages[entityType];
    }
    // Return a default image or handle missing image scenarios
    return require("../assets/Images/default.png"); // Replace with your default image path
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, entityType)));
        const entities = [];
        querySnapshot.forEach((doc) => {
          entities.push({ id: doc.id, ...doc.data() });
        });
        setData(entities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [entityType]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {/* Customize how each item is displayed */}
      <View style={styles.adapter}>
        <Image
           source={getImageSource(entityType)}
          style={styles.icon}
        />
        <View style={styles.details}>
        <Text style={{fontWeight:"bold", fontSize:18, alignSelf:"center"}}>{item.name}</Text>
        <Text style={styles.detailsText}>{item.address}</Text>
        <Text style={styles.detailsText}>Experience: {item.experience} years</Text>
        <TouchableOpacity onPress={() =>handleCall(item.phone)}>
        <View style={styles.callButton}>
            <Text style={styles.callButton}>Call Now</Text>
        </View>
        </TouchableOpacity>
        {/* Display other information as needed */}
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ paddingTop: StatusBar.currentHeight || 0 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require("../assets/Images/bg.png")}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            justifyContent: "center",
            alignSelf: "center",
            paddingVertical:"10%",
            borderBottomColor:"#000",
            borderBottomWidth:2
          }}
        >
          {entityType.toUpperCase()}
        </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rect: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  adapter: {
    flexDirection: "row",
  },
  icon: {
    height: 100,
    width: 90,
    marginRight: 15,
  },
  details: {
    flexDirection: "column",
    paddingHorizontal: 10,
    width:270
  },
  detailsText: {
    fontSize: 18,
    alignSelf:"flex-start",
    paddingVertical:5
    },
    callButton:{
        backgroundColor:"#000",
        color:"#fff",
        borderRadius:5,
        textAlign:"center",
        marginVertical:5,
        marginHorizontal:10,
    }
});

export default EntityList;
