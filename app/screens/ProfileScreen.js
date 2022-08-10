import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native'
import AppButton from '../components/AppButton';
import  AppListItem from "../components/AppListItem";
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import DataManager from '../config/DataManager';
import AuthNavigator from '../navigation/AuthNavigator';



const getCollections = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getCollections(user);    
}

const getPhotos = () => {

    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getPhotos(user);    
}



function ProfileScreen({navigation, route}) {

    
    const photoList = getPhotos();

    const[photos, setPhotos] =  useState(photoList);
    const[refreshing, setRefreshing] = useState(false);
    const { user } = route.params


    const logout = async function () {
        await navigation.navigate("Welcome");
 
        }


    const collectionList = getCollections();
    const [modal, setModal] = useState(false);

    const handlePhotoClick = () => {
        navigation.navigate("Photo");
    }
    
    const handleCollectionClick = () => {
        navigation.navigate("Collections");
    }
    

   
    return (
        <AppScreen 
            icon="logout"
            style={styles.container}
            onPress={logout}
            source={require('../assets/logo.png')}
        >

            <View style={styles.profileContainer}>
            <Text style={styles.welcome}> Hi, </Text>

             {user && <Text style={styles.name}> { user.username } </Text>}
{/* 
                <AppListItem 
                    // firstName={route.params.paramFirstName} 
                    // image={route.params.paramImage} 

                    // lastName={route.params.paramLastName} 
                    // description={route.params.paramEmail}
                    // width='100%'
                    // flexDirection='row'
                    // alignItems='center'
                    // justifyContent='center'
                /> */}
            </View>

            <View style={styles.mainButtons}>

                <AppButton 
                    onPress={handlePhotoClick}
                    title="My Photos"
                />
                <View style={{marginTop: 40,}}>
                    <AppButton
                        onPress={handleCollectionClick}
                        title="My Collections"
                    />
                </View>

            </View>
    
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        position: 'absolute',
    },
    profileContainer: {
        marginTop: '10%',
        marginLeft: '-2%',
        width: '100%',
        height: 300,
    },
    mainButtons: {
        marginTop: 20,
    },
    logout: {
        width: '40%',
        left: '43%',
        top: '-9%',
    },
    name: {
        fontSize: 40,
        fontFamily: AppFonts.text,
        left: '20%',
        color: AppColors.buttonColor
    
    },
    welcome: {
        fontSize: 40,
        fontFamily: AppFonts.headings,
        left: '10%',
        color: AppColors.FeatureTextColor,
      },
     
})
export default ProfileScreen;