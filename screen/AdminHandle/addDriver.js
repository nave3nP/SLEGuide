import PersonSubmission from "../../components/personSubmissions";
import React from 'react';
import { View } from 'react-native';


const AddDriversScreen = () => {
  return (
    <View>
      <PersonSubmission entityType="drivers" />
    </View>
  );
};


export { AddDriversScreen };
