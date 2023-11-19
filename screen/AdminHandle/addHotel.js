import PlaceSubmission from '../../components/placeSubmissions';
import React from 'react';
import { View } from 'react-native';


const AddHotelScreen= () => {
  return (
    <View>
      <PlaceSubmission entityType="hotels" />
    </View>
  );
};


export { AddHotelScreen };
