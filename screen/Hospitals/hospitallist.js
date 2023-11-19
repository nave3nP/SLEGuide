import React from 'react';
import { View } from 'react-native';
import EntityList from '../../components/placeReciever'; // Path to your EntityList component

const HospitalList = () => {
  return (
    <View>
      <EntityList entityType="hospitals" />
    </View>
  );
};

export default HospitalList;