import {React, useState} from 'react';
import * as Yup from 'yup';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {Formik} from 'formik';
import AppButton from '../components/AppButton';
import AppError from '../components/AppError';
import AppFonts from '../config/AppFonts';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import DataManager from '../config/DataManager';



const schema = Yup.object().shape(
    {
        firstName: Yup.string().required("This field is required").label("First Name"),
        lastName: Yup.string().required("This field is required").label("Last Name"),
        email: Yup.string().required("This field is required").email("Please enter a valid email address").label("Email"),
        password: Yup.string().required("This field is required").min(6, "Password must be at least 6 characters").max(16, "Password must be max 16 characters").label("Password"), 
    }
);

const users = [
    {
        id: "user1",
        firstName: "Isabella",
        lastName: "Paine",
        email: "isa@gmail.com",
        password: "123456",
        image: require('../assets/NYC.jpeg'),

    },
    {
        id: "user2",
        firstName: "Floral",
        lastName: "Plants",
        email: "bel@gmail.com",
        password: "789012",
        image: require('../assets/plant.jpg'),

    },
];


const getUsers = () => {

    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getUsers(user);    
    // console.log(commonData.getCollections(user));
}

const getUser = ({email}) => {
    return users.find((user) => user.email === email);
}

const validateUser = ({email, password}) => {
    return (
        users.filter((user) => user.email === email && user.password === password).length>0
    );

};

function RegisterScreen({navigation}) {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");


    const userList = getUsers();

    const addUser = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();
    
        const users = commonData.getUsers(user);
        const userID = users.length+1;
        const newUser = {
            id: userID,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password    
    };
    
        commonData.createUser(newUser);
    
    }
    console.log()
    

    return (
        <AppScreen 
            style={styles.container}
            back="arrow-left"
            handleBackClick={() => {navigation.goBack(null)}}
        >
            <ScrollView
            vertical={true} translucent={true}>
                <AppText style={styles.registerText}> Register </AppText>
                <Formik
                    initialValues={{firstName:'', lastName:'', email:'', password:'',}}
                    onSubmit = {(values, {resetForm}) => {
                        if(!validateUser(values)){
                            resetForm(); 
                            addUser(values);
                            alert("You have successfully registered");
                            console.log(values);

                        navigation.navigate("ProfileScreen", {
                            screen: "Profile",
                            params:{
                                screen:"Profile2",
                                params:{ 
                                    paramEmail: values.email,
                                    paramFirstName: getUsers(values).firstName,
                                    paramLastName: getUsers(values).lastName,
                                    paramImage: getUsers(values).image,
                                },
                            }
                        }
                        );
                }
                else {
                    resetForm();
                    alert("Invalid details, please try again")
                }}
            }
                    validationSchema={schema}
                    >
                {({values, handleChange, handleSubmit, errors, setErrors, touched})=> (
                    <>
                    <View style={styles.appTextInputContainer}>             
                        <AppTextInput
                            autoCapitalise="none"
                            autoCorrect={false}
                            icon="account"
                            placeholder="First Name"
                            onBlur = {() => setErrors("firstName")}
                            onChangeText = {handleChange("firstName")}
                        />
                        {errors.firstName && touched.firstName ? (
                            <AppText style={styles.errorText}>{errors.email}</AppText>
                        ) : null}
                        <AppError  name="firstName" />

                        <AppTextInput
                            autoCapitalise="none"
                            autoCorrect={false}
                            icon="account"
                            placeholder="Last Name"
                            onBlur = {() => setErrors("lastName")}
                            onChangeText = {handleChange("lastName")}
                        />
                        {errors.lastName && touched.lastName ? (
                            <AppText style={styles.errorText}>{errors.email}</AppText>
                        ) : null}
                        <AppError  name="lastName" />


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
                 <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <AppText style={styles.signinText}> Already have an account? Sign in </AppText>
                </TouchableOpacity>   
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
        marginTop:'0%',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: AppFonts.headings,
    },
    signinText: {
        fontSize: 15,
        marginHorizontal: '20%',
        marginTop: '5%',
    }

})

export default RegisterScreen;