import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {Formik} from 'formik';
import * as Yup from 'yup';


import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppError from '../components/AppError';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppFonts from '../config/AppFonts';



const schema = Yup.object().shape(
    {
        email: Yup.string().required("This field is required").email("Email is invalid").label("Email"),
        password: Yup.string().required("This field is required").min(6, "Password must be at least 6 characters").max(16, "Password must be max 16 characters").label("Password"), 
    }
);

const users = [
    {
        name: "Isabella",
        email: "isa@gmail.com",
        password: "123456"
    },
    {
        name: "Gionta",
        email: "bel@gmail.com",
        password: "789012"
    }
]

const validateUser = ({email, password}) => {
    return (
        users.filter((user) => user.email === email && user.password === password).length>0
    );

};

function LoginScreen({navigation}) {
  

    return (
        <AppScreen style={styles.container}>
            <ScrollView
            vertical={true}>
             <AppText style={styles.loginText}> Login </AppText>

                <Formik
                    initialValues={{email:'', password:'',}}
                    onSubmit = {(values, {resetForm}) => {
                    if(validateUser(values)){
                        console.log(values);
                        navigation.navigate("Home");
                        resetForm();
                    }
                    else {
                        resetForm();
                        alert("Invalid details")
                    }
                }}
                    
                    validationSchema={schema}
                    >
                {({values, handleChange, handleSubmit, errors, setErrors, touched})=> (
                    <>
                    <View style={styles.appTextInputContainer}>             
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Email Address"
                        keyboardType="email-address"  
                        value={values.email}
                        onBlur = {() => setErrors("email")}
                        onChangeText = {handleChange("email")}
                    />
                    {errors.email && touched.email ? (
                      <AppText style={styles.errorText}>{errors.email}</AppText>
                      ) : null}
                    <AppError  name="email" />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        value={values.password}
                        onBlur = {() => setErrors("password")}
                        onChangeText = {handleChange("password")}
                    />
                    {errors.password && touched.password ? (
                      <AppText  style={styles.errorText}>{errors.password}</AppText>
                      ) : null}
                    <AppError  name="password" />
                </View> 
                <AppButton title="Login" onPress={handleSubmit}/>


                    </>
                )}     
                
                 </Formik>
                 <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <AppText style={styles.signupText}> Don't have an account? Sign up </AppText>
                </TouchableOpacity>      

 
            </ScrollView>
                
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'brown',  
    },
    loginText: {
        marginTop:'10%',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: AppFonts.headings,
    },
    appTextInputContainer:{
        marginTop: '10%',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginHorizontal: '10%',
    },
    signupText: {
        fontSize: 15,
        marginHorizontal: '20%',
        marginTop: '5%',

    }

})

export default LoginScreen;