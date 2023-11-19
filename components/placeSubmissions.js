import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  ToastAndroid,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../router/configs/config";

const PlaceSubmission = ({ entityType }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [popPackage, setPopPackage] = useState("");
  const [packagePrice, setPackagePrice] = useState("");

  const handleSubmit = async () => {
    if (!name || !address || !phone || !popPackage || !packagePrice) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, entityType), {
        name: name,
        address: address,
        phone: phone,
        popPackage: popPackage,
        packagePrice: packagePrice,
      });
      console.log("Document written with ID: ", docRef.id);
      ToastAndroid.show("Successfully Added", ToastAndroid.SHORT);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // Clear the form fields after submission
    setName("");
    setAddress("");
    setPhone("");
    setPopPackage("");
    setPackagePrice("");
  };

  return (
    <ImageBackground
      source={require("../assets/Images/bg.png")}
      style={styles.rec}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 40,
          justifyContent: "center",
          alignSelf: "center",
          paddingVertical: "10%",
        }}
      >
        {entityType.toUpperCase()}
      </Text>
      <View style={{ marginTop: 40 }}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />
        <View style={styles.phoneField}>
          <Text style={{ fontSize: 15, paddingRight: 10, paddingVertical: 10 }}>
            +94
          </Text>
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="numeric"
            style={{ height: 40, paddingVertical: 5, width: "80%" }}
          />
        </View>

        <TextInput
          placeholder="Popular Package Details"
          value={popPackage}
          onChangeText={(text) => setPopPackage(text)}
          multiline
          style={styles.input}
        />
        <TextInput
          placeholder="Package Price"
          value={packagePrice}
          onChangeText={(text) => setPackagePrice(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
          <Text style={{ fontSize: 18, alignSelf: "center", color: "#fff" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rec: {
    width: "100%",
    height: "100%",
  },
  input: {
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  phoneField: {
    flexDirection: "row",
    rowGap: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 10,
    height: 40,
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  submit: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#1769C0",
    padding: 10,
    marginVertical: 30,
    borderRadius: 12,
  },
});

export default PlaceSubmission;
