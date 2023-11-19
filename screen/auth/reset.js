import React ,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView ,Text, Image, StyleSheet, View, ImageBackground, TextInput ,TouchableOpacity,Alert } from "react-native";
import { emailValidator } from "../src/helper/emailValidator";
import { sendEmailWithPassword } from "../src/api/authapi";

const Reset = ()=>{


    const navigation = useNavigation();

    const [email, setEmail] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState(false)
    const sendResetPasswordEmail = async () => {
        const emailError = emailValidator(email.value)
        if (emailError) {
          setEmail({ ...email, error: emailError })
          return
        }
        setLoading(true)
        const response = await sendEmailWithPassword(email.value)
        if (response.error) {
          Alert.alert("Response error")
        }
        setLoading(false)
      }


    return(
        <SafeAreaView>
            <ImageBackground source={require('../../screen/src/bg.png')} style={styles.bgimg}>
            <ScrollView>
                <View style={StyleSheet.container}>
                
                <View style={{padding:20, paddingTop:100}}>
                <Text style={{textAlign:'center',fontWeight:'bold',color:'#1ee868', fontSize:40, marginBottom:50 }}>Reset Password</Text>   
                <View style={{paddingLeft:70}}>
                    <Image source={require('../src/reset.png')} style={{width:220 , height: 200}}/>
                </View>
                <View style={styles.formInput}>
                    <TextInput 
                    style={styles.textInput} 
                    placeholder="Enter email address"
                    label="E-mail address"
                    returnKeyType="done"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    description="You will receive email with password reset link."
                    />
                </View>
                <TouchableOpacity 
                style={styles.resetButton} 
                loading={loading}
                mode="contained"
                onPress={sendResetPasswordEmail}
                 >
                    <Text style={styles.resetText}>Send Reset Link</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
                    <Text style={styles.create }>Create a new account</Text>
                </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bgimg:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',

    },
    formInput:{
        marginTop:10,
        padding:10
    },
    textInput:{
        padding:10,
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        borderRadius:10
    },
    resetButton:{
        padding:15,
        marginTop:30,
        borderRadius:15,
        backgroundColor:'#31aeb5',
        width:'100%',
        
    },
    resetText:{
        color:'#4728a6',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20

    },
    create:{
        color:'#311bbf',
        textAlign:'left',
        fontWeight:'bold',
        padding:10,
        marginTop:20
    }
    


});

export default Reset;