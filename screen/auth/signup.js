import React, {Component, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView ,Text, StyleSheet, View, Image, ImageBackground, StatusBar, TextInput ,TouchableOpacity,Alert } from "react-native";
import { emailValidator } from "../src/helper/emailValidator";
import { passwordValidator } from "../src/helper/passwordValidator";
import { signUpUser } from "../src/api/authapi";


const SignUp = ()=>{ 
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({value:'',error: ''})
    const [loading, setLoading] = useState()
    const [error, setError] = useState() 
           
    const navigation = useNavigation();

    const onSignUpPressed = async () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (password.value !== confirmPassword.value) {
            setConfirmPassword({ ...confirmPassword, error: 'Passwords do not match' });
            return (Alert.alert("Passwords not matching"));
          }
        if (emailError || passwordError) {
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          return(Alert.alert("Check if email and password are valid"))
        }
        setLoading(true)
        const response = await signUpUser({
          email: email.value,
          password: password.value,
        })
        if (response.error) {
          setError(response.error)
          
        }
        setLoading(false)
      }
    return(
        <SafeAreaView>
             <ImageBackground source={require('../../screen/src/bg.png')} style={styles.bgimg}>
            <ScrollView>
                <View style={StyleSheet.container}>
                <View style={{padding:20, paddingTop:50}}>
                <Text style={{textAlign:'center',fontWeight:'bold',color:'#1ee868', fontSize:40, marginBottom:20 }}>Create  a new account</Text>   
                <View style={{paddingLeft:70}}>
                    <Image source={require('../src/create.png')} style={{width:220 , height: 220}}/>
                </View>
                <View style={styles.formInput}>
                    <TextInput 
                            label="Email"
                            returnKeyType="next"
                            onChangeText={(text) => {setEmail({ value: text, error: '' })}}
                            value={email.value}
                            error={!!email.error}
                            errorText={email.error}
                            autoCapitalize="none"
                            autoCompleteType="email"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            style={styles.textInput} placeholder="Enter email address"
                    />
                </View>
                
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} 
                    placeholder="Enter password"
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    secureTextEntry={true}
                    />
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} 
                    placeholder="Confirm password" 
                    onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
                    error={!!confirmPassword.error}
                    errorText={confirmPassword.error}
                    secureTextEntry={true}/>
                </View>
                <TouchableOpacity style={styles.signButton} onPress={onSignUpPressed}>
                    <Text style={styles.signupText}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("Login")}} >
                    <Text style={styles.loginhere}>Already have an account? Login here</Text>
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
    signButton:{
        padding:15,
        marginTop:15,
        borderRadius:15,
        backgroundColor:'#0c1d6b',
        width:'100%',
        
    },
    signupText:{
        color:'#0c686b',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20

    },
    loginhere:{
        color:'#311bbf',
        textAlign:'left',
        fontWeight:'bold',
        padding:10,
        marginTop:15
    }
    


});

export default SignUp;