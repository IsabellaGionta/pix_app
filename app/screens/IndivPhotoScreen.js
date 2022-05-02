import * as ImagePicker from 'expo-image-picker';
import { React, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';





const getPhotos = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getPhotos(user);    
}


const getLabels = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getLabels(user);    
}



function IndivPhotoScreen({navigation, onPress}) {
    const[photo, setPhoto] = useState("");
    const[refreshing, setRefreshing] = useState(false);
    const[name, setName] = useState("");
    const[image, setImage] = useState(null);
    const[description, setDescription] = useState(null);

    const photoList = getPhotos();

    const labelList = getLabels();
    const[labels, setLabels] =  useState(labelList);
    const[photos, setPhotos] =  useState(photoList);

    

    const [visible, setVisible] = useState(false);

    //Attemping filter button
    
    // const filterCollections = (collectionid) => {
        
    //    const newFilteredCollections =  collections.filter(item => labels.collectionid === item.collectionid).length>0
    //     return (
    //         newFilteredCollections,
    //         console.log(newFilteredCollections)
    //     )
        
    // };

    const profile = async function () {
        await navigation.navigate("Profile");
 
    }

    const handleOverlay = () => {
        setVisible(!visible)    
    }




    const handleDelete = (photo) => {

        const newPhotoList =  photos.filter (item => item.photoid !== photo.photoid);
        setPhotos(newPhotoList);
         return (
            newPhotoList,
             console.log(newPhotoList)

         )
    }

    
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    
        if (pickerResult.cancelled === true) {
            return;
        }
        setImage({path: pickerResult.uri});
        console.log("picker result", pickerResult);


    }

    const addPhotos = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const photos = commonData.getPhotos(user);
        const photoID = photos.length+1;
        const newPhoto = {
            name: name,
            photoid: photoID,
            userid: user,
            image: image.path,
        };

        console.log(newPhoto);
        commonData.addPhotos(newPhoto);
        console.log("new list",  photos)

    }

    return (
        <AppScreen 
            icon="account"
            onPress={profile}
        >
            <View style={styles.container}>

                <View style={{borderWidth:2, marginLeft: '10%', marginRight: '10%', borderRadius: 1,borderColor: 'black', borderStyle: 'dotted',margin: 10,}}/>
                
    
                <FlatList style={styles.flatListContainer}
                    data={photos}
                    keyExtractor = {photo => photo.collectionid.toString()}
                    refreshing={refreshing}
                    onRefresh={() => setPhotos(photoList)}
                    renderItem = {({item}) => 
                            <View>
                                <AppCard
                                name={item.name}
                                image={item.image}
                                style={styles.appcardOverlay}
                                
                            /> 
                            </View>            

                    }

                    />



            </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    appcardOverlay: {
        width: 50,
    }

    
})
export default IndivPhotoScreen;