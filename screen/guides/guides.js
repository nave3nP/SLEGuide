import React from 'react';
import { View } from 'react-native';
import EntityList from '../../components/personReceiver'; // Path to your EntityList component

const GuideList = () => {
  return (
    <View>
      <EntityList entityType="guides" />
    </View>
  );
};

export default GuideList;