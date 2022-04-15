import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

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
        name: Yup.string().required("This field is required").label("Full Name"),
        email: Yup.string().required("This field is required").email("Please enter a valid email address").label("Email"),
        password: Yup.string().required("This field is required").min(6, "Password must be at least 6 characters").max(16, "Password must be max 16 characters").label("Password"), 
    }
);

function LoginScreen() {

    return (
        <AppScreen style={styles.container}>
            <ScrollView
            vertical={true} translucent={true}>
                <AppText style={styles.registerText}> Register </AppText>
                <Formik
                    initialValues={{name:'', email:'', password:'',}}
                    onSubmit = {values=>console.log(values)}
                    validationSchema={schema}
                    >
                {({handleChange, handleSubmit, errors, setErrors, touched})=> (
                    <>
                    <View style={styles.appTextInputContainer}>             
                        <AppTextInput
                            autoCapitalise="none"
                            autoCorrect={false}
                            icon="account"
                            placeholder="Full Name"
                            onBlur = {() => setErrors("name")}
                            onChangeText = {handleChange("name")}
                        />
                        {errors.name && touched.name ? (
                            <AppText style={styles.errorText}>{errors.email}</AppText>
                        ) : null}
                        <AppError  name="name" />

                        <AppTextInput
                            autoCapitalise="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            placeholder="Email Address"
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
                            onBlur = {() => setErrors("password")}
                            onChangeText = {handleChange("password")}
                        />
                        {errors.password && touched.password ? (
                            <AppText style={styles.errorText}>{errors.email}</AppText>
                        ) : null}
                        <AppError  name="password" />
                    </View> 
                <AppButton title="Register" onPress={handleSubmit}/>


                    </>
                )}
                 </Formik>
                 </ScrollView>
                
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'brown',  
    },
    appTextInputContainer:{
        marginTop: '10%',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginHorizontal: '10%',
    },
    registerText: {
        marginTop:'10%',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: AppFonts.headings,
    },

})

export default LoginScreen;