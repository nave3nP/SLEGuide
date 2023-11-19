import PersonSubmission from "../../components/personSubmissions";
import React from 'react';
import { View } from 'react-native';


const AddGuidesScreen= () => {
  return (
    <View>
      <PersonSubmission entityType="guides" />
    </View>
  );
};


export { AddGuidesScreen };
