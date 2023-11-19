import PersonSubmission from "../../components/personSubmissions";
import React from 'react';
import { View } from 'react-native';


const AddVehicleScreen= () => {
  return (
    <View>
      <PersonSubmission entityType="vehicles" />
    </View>
  );
};


export { AddVehicleScreen };
