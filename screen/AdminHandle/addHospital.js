import PlaceSubmission from '../../components/placeSubmissions';
import React from 'react';
import { View } from 'react-native';


const AddHospitalScreen= () => {
  return (
    <View>
      <PlaceSubmission entityType="hospitals" />
    </View>
  );
};


export { AddHospitalScreen };
