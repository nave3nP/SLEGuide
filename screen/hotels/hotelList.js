import React from 'react';
import { View } from 'react-native';
import EntityList from '../../components/placeReciever'; // Path to your EntityList component

const HotelList = () => {
  return (
    <View>
      <EntityList entityType="hotels" />
    </View>
  );
};

export default HotelList;