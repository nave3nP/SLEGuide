import React from 'react';
import { View } from 'react-native';
import EntityList from '../../components/personReceiver'; // Path to your EntityList component

const Drivers = () => {
  return (
    <View>
      <EntityList entityType="drivers" />
    </View>
  );
};

export default Drivers;