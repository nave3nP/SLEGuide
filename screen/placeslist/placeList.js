import React from 'react';
import { FlatList, TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import placeData from './FlatListData';

const PlacesList = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const { title, image } = item;

    const handlePress = () => {
      navigation.navigate('PlaceDetails', { place: item });
    };

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={placeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
  },
});

export default PlacesList;