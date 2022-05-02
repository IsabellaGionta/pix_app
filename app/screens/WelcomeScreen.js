import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';



function WelcomeScreen({navigation, route}) {



    return (
    <AppScreen 
        handleMenuButton={{}}
        style={styles.container}
        source={require('../assets/logo.png')}
        imageBackground={require('../assets/plant.jpg')}

 
    > 
        <View>
            <AppText style={styles.welcomeText}> Welcome </AppText>
            <AppText style={styles.welcomeSubtext}> Login to see your memories</AppText>
        </View>

         <View style={styles.buttons}> 
            <View style={styles.login}> 
                <AppButton title="Login" onPress={() => navigation.navigate("Login")}> </AppButton>
            </View>
            <View style={styles.register}> 
                <AppButton title="Register" onPress={() => navigation.navigate("Register")}> </AppButton>
            </View>
         </View>

        

    </AppScreen>       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    appTextInput: {
        marginTop: '25%',
        marginLeft: '10%',
    },
    welcomeText: {
        marginTop: '20%',
        marginHorizontal: '20%',
        fontSize: 40,
        fontFamily: AppFonts.headings,
        color: AppColors.FeatureTextColor,
        fontWeight: 'bold',
    },
    welcomeSubtext: {
        width: '100%',
        fontSize: 15,
        marginHorizontal: '25%',
        marginTop: '1%',
        fontFamily: AppFonts.text,
        color: AppColors.highlightColor,
        fontWeight: 'bold',
    },
    buttons: {
        marginTop: '10%',
        width: '100%',

    },
    register: {
        marginTop: '5%',
    },


})
export default WelcomeScreen;