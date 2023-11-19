import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/auth/login';
import Reset from '../screen/auth/reset';
import SignUp from '../screen/auth/signup';
import Main from "../screen/main/main";
import Places from "../screen/placeslist/placelistshow";
import Authload from "../screen/authload/authload";
import Emergency from "../screen/emergency/emergency menu";
import GuideList from "../screen/guides/guides";
import Fuel from "../screen/fuelstations/fuel";
import EmergencyContact from "../screen/emergency contacts/emergencycontact";
import Tips from "../screen/Tips/tips";
import Transport from "../screen/Transport list/transport";
import Drivers from "../screen/Drivers/drivers";
import Vehicles from "../screen/Vehicles/vehicles";
import Contactus from "../screen/contact us/contactUs";
import AddDrivers from "../screen/AdminHandle/addDrivers";
import AdminPage from "../screen/AdminHandle/adminPage";
import { AddGuidesScreen } from "../screen/AdminHandle/addGuides";
import { AddDriversScreen } from "../screen/AdminHandle/addDriver";
import { AddHospitalScreen } from "../screen/AdminHandle/addHospital";
import { AddHotelScreen } from "../screen/AdminHandle/addHotel";
import HotelList from "../screen/hotels/hotelList";
import HospitalList from "../screen/Hospitals/hospitallist";
import { AddVehicleScreen } from "../screen/AdminHandle/addVehicle";
import {
Adam, 
Ambuluwawa,
Arugambay,
JaffnaFort,
Bahirawakanda,
Ella,
Gallefort,
Gregory,
Hakgala,
Hortan,
Koneshwaram,
Mirissa, 
MountLavinia,
Nallur,
LotusTower,
NineArch,
Peradeniya,
Pinnawala,
RawanaFalls,
Ruwanweliseya,
Sigiriya,
Sinharaja,
Templetooth,
Udawalawa,
Unawatuna,
VictoriaPark,
Yala,
Yapahuwa
} from '../screen/places'





const Stack = createNativeStackNavigator();



export function Authscreens(){
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authload">
        <Stack.Screen name="Authload" component={Authload} options={{headerShown:false}}/>
        <Stack.Screen name="Places" component={Places} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="Reset" component={Reset} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="AddDrivers" component={AddDrivers} options={{headerShown:false}}/>
        <Stack.Screen name="Dash" component={Main} options={{headerShown:false}}/>
        <Stack.Screen name="Emergency" component={Emergency} options={{headerShown:false}}/>
        <Stack.Screen name="Hospital" component={HospitalList} options={{headerShown:false}}/>
        <Stack.Screen name="Guides" component={GuideList} options={{headerShown:false}}/>
        <Stack.Screen name="Fuel" component={Fuel} options={{headerShown:false}}/>
        <Stack.Screen name="EmergencyContact" component={EmergencyContact} options={{headerShown:false}}/>
        <Stack.Screen name="Tips" component={Tips} options={{headerShown:false}}/>
        <Stack.Screen name="Transport" component={Transport} options={{headerShown:false}}/>
        <Stack.Screen name="Drivers" component={Drivers} options={{headerShown:false}}/>
        <Stack.Screen name="Vehicles" component={Vehicles} options={{headerShown:false}}/>
        <Stack.Screen name="Contactus" component={Contactus} options={{headerShown:false}}/>
        <Stack.Screen name="AdminPage" component={AdminPage} options={{headerShown:false}}/>
        <Stack.Screen name="Add Driver" component={AddDriversScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Add Guide" component={AddGuidesScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Add Hotel" component={AddHotelScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Add Hospital" component={AddHospitalScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HotelList" component={HotelList} options={{headerShown:false}}/>
        <Stack.Screen name="Add Vehicle" component={AddVehicleScreen} options={{headerShown:false}}/>




        
        <Stack.Screen name="Adam" component={Adam} options={{headerShown:false}}/>
        <Stack.Screen name="Ambuluwawa" component={Ambuluwawa} options={{headerShown:false}}/>
        <Stack.Screen name="Koneshwaram" component={Koneshwaram} options={{headerShown:false}}/>
        <Stack.Screen name="Arugambay" component={Arugambay} options={{headerShown:false}}/>
        <Stack.Screen name="Bahirawakanda" component={Bahirawakanda} options={{headerShown:false}}/>
        <Stack.Screen name="Ella" component={Ella} options={{headerShown:false}}/>
        <Stack.Screen name="GalleFort" component={Gallefort} options={{headerShown:false}}/>
        <Stack.Screen name="Gregory" component={Gregory} options={{headerShown:false}}/>
        <Stack.Screen name="Hakgala" component={Hakgala} options={{headerShown:false}}/>
        <Stack.Screen name="Horton" component={Hortan} options={{headerShown:false}}/>
        <Stack.Screen name="JaffnaFort" component={JaffnaFort} options={{headerShown:false}}/>
        <Stack.Screen name="Mirissa" component={Mirissa} options={{headerShown:false}}/>
        <Stack.Screen name="MountLavinia" component={MountLavinia} options={{headerShown:false}}/>
        <Stack.Screen name="Nallur" component={Nallur} options={{headerShown:false}}/>
        <Stack.Screen name="LotusTower" component={LotusTower} options={{headerShown:false}}/>
        <Stack.Screen name="NineArch" component={NineArch} options={{headerShown:false}}/>
        <Stack.Screen name="Peradeniya" component={Peradeniya} options={{headerShown:false}}/>
        <Stack.Screen name="Pinnawala" component={Pinnawala} options={{headerShown:false}}/>
        <Stack.Screen name="RawanaFalls" component={RawanaFalls} options={{headerShown:false}}/>
        <Stack.Screen name="Ruwanweliseya" component={Ruwanweliseya} options={{headerShown:false}}/>
        <Stack.Screen name="Sigiriya" component={Sigiriya} options={{headerShown:false}}/>
        <Stack.Screen name="Sinharaja" component={Sinharaja} options={{headerShown:false}}/>
        <Stack.Screen name="Templetooth" component={Templetooth} options={{headerShown:false}}/>
        <Stack.Screen name="Udawalawa" component={Udawalawa} options={{headerShown:false}}/>
        <Stack.Screen name="Unawatuna" component={Unawatuna} options={{headerShown:false}}/>
        <Stack.Screen name="VictoriaPark" component={VictoriaPark} options={{headerShown:false}}/>
        <Stack.Screen name="Yala" component={Yala} options={{headerShown:false}}/>
        <Stack.Screen name="Yapahuwa" component={Yapahuwa} options={{headerShown:false}}/>


      </Stack.Navigator>
    </NavigationContainer>
    );

}






