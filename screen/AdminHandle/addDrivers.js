import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { firestore } from '../../router/configs/config';
import { db } from '../../router/configs/config';
import { collection, addDoc } from "firebase/firestore"; 
import { storage } from '../../router/configs/config';
import { ref } from "firebase/storage";

const AddDrivers = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');


  const handleSubmit = async() => {
    if (!name || !address || !phone || !experience) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
    const docRef = await addDoc(collection(db, "drivers"), {
        name: name,
        address: address,
        phone: phone,
        experience: experience
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }



    // Clear the form fields after submission
    setName('');
    setAddress('');
    setPhone('');
    setExperience('');
  };

  return (
    <View style={{marginTop:60}}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Experience"
        value={experience}
        onChangeText={text => setExperience(text)}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddDrivers;
