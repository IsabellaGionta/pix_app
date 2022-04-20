  
import {React, useState} from 'react';

import {FlatList, StyleSheet, View, TouchableWithoutFeedback, Modal} from 'react-native'
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';
import  AppListItem from "../components/AppListItem";
import AppIcon from '../components/AppIcon';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';

const getCollections = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getCollections(user);    
    // console.log(commonData.getCollections(user));
}


function ProfileScreen({navigation, route}) {

    const logout = async function () {
        await navigation.navigate("Login");
 
        }

    const collectionList = getCollections();
    // console.log(collectionList);
    const [modal, setModal] = useState(false);

    const handlePhotoClick = () => {
        navigation.navigate("Photos");
    }
    
    const handleCollectionClick = () => {
        navigation.navigate("Collection");
    }
    

   
    return (
        <AppScreen 
            icon="logout"
            style={styles.container}
            onPress={logout}
        >

            <View style={styles.profileContainer}>
                <AppListItem image={route.params.paramImage} name={route.params.paramName} description={route.params.paramEmail}/>
            </View>
            <View style={styles.logout}>
                <AppButton 
                        onPress={logout}
                        title="Logout"
                    />
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
    },
    mainButtons: {
        marginTop: 20,
    },
    logout: {
        width: '40%',
        left: '43%',
        top: '-9%',
    }
     
})
export default ProfileScreen;