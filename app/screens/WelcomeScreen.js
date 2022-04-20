import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppFonts from '../config/AppFonts';
import {useNavigation} from '@react-navigation/native';
import AppText from '../components/AppText';
import {DrawerActions } from '@react-navigation/native';


function WelcomeScreen({navigation, route}) {

    
    // const menu = () => {
    //     navigation.toggleDrawer();
 
    // }

    return (
    <ImageBackground style={{width: '100%', height: '100%'}} blurRadius={7} source={(require('../assets/plant.jpg'))} resizeMode="cover" >
    <AppScreen 
        handleMenuButton={{}}
        style={styles.container}
    > 
{/* <        View style={styles.backdropView}>
            <Text style={styles.headline}>Headline</Text>
          </View> */}

        <View>
            <AppText style={styles.welcomeText}> Welcome </AppText>
            <AppText style={styles.welcomeSubtext}> Log in to see your memories</AppText>
        </View>
        {/* <View  style={styles.appTextInput} >
            <AppTextInput icon="email" > </AppTextInput>
         </View> */}
         <View style={styles.buttons}> 
            <View style={styles.login}> 
                <AppButton title="Login" onPress={() => navigation.navigate("Login")}> </AppButton>
            </View>
            <View style={styles.register}> 
                <AppButton title="Register" onPress={() => navigation.navigate("Register")}> </AppButton>
            </View>
         </View>

        

    </AppScreen>       
    </ImageBackground>
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
    // headline: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     backgroundColor: 'rgba(0,0,0,0)',
    //     color: 'red'
    //   },
    //   backdropView: {
    //     height: 320,
    //     width: 320,
    //     marginTop: 30,
    //     backgroundColor: 'white',
    //     opacity: 0.5, 
    //   },

})
export default WelcomeScreen;