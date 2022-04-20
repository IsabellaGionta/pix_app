
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { React, useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import AppButton from '../components/AppButton';
import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';
import AppOverlay from '../components/AppOverlay';






const getPhotos = () => {

    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getPhotos(user);    
}



function PhotoScreen({props, overlayid ,navigation, onPress}) {
    const[refreshing, setRefreshing] = useState(false);
    const[name, setName] = useState("");
    const[description, setDescription] = useState("");
    const [overlayVisible, setOverlayVisible] = useState(false);
    const[image, setImage] = useState(null);

    const[editName, setEditName] = useState("");
    const[editDescription, setEditDescription] = useState("");
    const[editImage, setEditImage] = useState(null);



    const photoList = getPhotos();

    const[photos, setPhotos] =  useState(photoList);

    // const profile = () => {
        
    //      console.log('clicked')
    //      navigation.navigate("Login")
 
    // }

    const handleDelete = (photo) => {
        const newPhotoList =  photos.filter (item => item.photoid !== photo.photoid);
        setPhotos(newPhotoList);
         return (
             newPhotoList,
             console.log(newPhotoList)

         )
    }

    const profile = async function () {
        await navigation.navigate("Profile");
 
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
        setEditImage({path: pickerResult.uri});
        console.log(pickerResult);


    }

    const addPhoto = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const photos = commonData.getPhotos(user);
        const photoID = photos.length+1;
        const newPhoto = {
            name: name,
            photoid: photoID,
            userid: user,
            description: description,
            // image: image.path,

        };

        console.log(newPhoto);
        commonData.addPhoto(newPhoto);

    }

    const editPhoto = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();
        let photoID = commonData.getPhotos().photoid;
        let collectionID = commonData.getCollections().collectionid;
    

    
        const photos = commonData.getPhotos(user);
        
        const updatedPhoto = {
            photoid: photos.photoid,
            userid: user,
            collectionid: photos.collectionid,
            // editImage: image.path,
            editName: name,
            editDescription: description
        }
        
        console.log(updatedPhoto);
    
    }

    return (
        <AppScreen 
            icon="account"
            onPress={profile}

            style={styles.container}
        >
                    <View style={styles.appCards}> 
  
                    <FlatList 
                        data={photos}
                        keyExtractor = {photo => photo.photoid.toString()}
                        refreshing={refreshing}
                        onRefresh={() => setPhotos(photoList)}
                        renderItem = {({item}) => 
                                <AppListItem 
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                    onSwipeLeft={ () => (
                                        <View style={styles.container}> 
                                            <View style={styles.iconContainer}>
                                                <TouchableOpacity onPress={() => handleDelete(item)}>
                                                    <AppIcon
                                                        name="trash-can"
                                                        backgroundColor={AppColors.primaryColor}
                                                        iconColor={AppColors.otherColor}
                                                    />
                                                </TouchableOpacity>

                                                <View style={{marginTop: 10,}}>
                                                    <AppOverlay 
                                                        text="Edit Photo"
                                                        appicon="image-edit-outline"
                                                        placeholder="Edit Photo Name"
                                                        placeholder2="Edit Photo Description"
                                                        appicon3="camera"
                                                        iconColor={AppColors.otherColor}
                                                        title="Edit Photo"
                                                        onChangeText1={(inputText) => setEditName(inputText)}
                                                        onChangeText2={(inputText) => setEditDescription(inputText)}
                                                        onPress={() => {
                                                            editPhoto()
                                                            navigation.navigate("Photos");
                                                            console.log(editPhoto)
                                                        }}
                                                    />      
        
                                                </View>
                                            </View>
  
                                        </View>
                                    )}
                                    />
                        }
                    />
                    <AppOverlay
                        text="Add Photo"
                        icon="plus-box-outline"
                        size={180}
                        placeholder="Photo Name"
                        placeholder2="Photo Description"
                        appicon3="camera"
                        iconColor={AppColors.otherColor}
                        title="Add Photo"
                        onChangeText1={(inputText) => setName(inputText)}
                        onChangeText2={(inputText) => setDescription(inputText)}
                        onPress={() => {
                            addPhoto()
                            navigation.navigate("Photos"); 
                          

                        }}
                    /> 
            </View>
        </AppScreen>

    );
}
const styles = StyleSheet.create({
    overlay: {
        marginTop: '50%',
        position:'absolute',
    },
    editIcon: {
        top: '-15%',
    },
    icon: {
        top: 0,
        left: 0,
        backgroundColor: 'red',
        width: 40,
    },
    container: {
        height:'100%',
    },
    iconContainer:{
        backgroundColor:AppColors.secondaryColor,
        width:75,   
        height: '100%',
        justifyContent:"center",
        alignItems:"center",
    },
    editIcon: {
        marginTop: 10,
    },
    imageButton: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
    addPhoto: {
        marginLeft: 40,
    }
  
    
})
export default PhotoScreen;