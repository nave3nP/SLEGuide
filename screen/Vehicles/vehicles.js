import React from 'react';
import { View } from 'react-native';
import EntityList from '../../components/personReceiver'; // Path to your EntityList component

const Vehicles = () => {
  return (
    <View>
      <EntityList entityType="vehicles" />
    </View>
  );
};

export default Vehicles;