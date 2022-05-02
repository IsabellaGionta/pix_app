
import { React, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppCard from '../components/AppCard';
import AppColors from '../config/AppColors';
import AppOverlay from '../components/AppOverlay';
import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';






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
    const[imagePath, setImagePath] = useState(null);


    const[editName, setEditName] = useState("");
    const[editDescription, setEditDescription] = useState("");
    const[editImage, setEditImage] = useState(null);



    const photoList = getPhotos();

    const[photos, setPhotos] =  useState(photoList);

    const handlePhotoClick = () => {
        
         console.log('clicked')
         navigation.navigate("IndivPhotoScreen")
 
    }
    

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
        setImagePath({path: pickerResult.uri});
        setEditImage({path: pickerResult.uri});
        console.log("picker result", pickerResult);


    }

    const addPhoto = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const photos = commonData.getPhotos(user);
        const collections = commonData.getCollections(user)

        const photoID = photos.length+1;
        const newPhoto = {
            name: name,
            photoid: photoID,
            userid: user,
            description: description,
            image: image.path,
            imagePath: image.path,

        };

        console.log("new photo", newPhoto);
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
            editName: name,
            editDescription: description
        }
        
        console.log(updatedPhoto);
    
    }

    return (
        <AppScreen 
            onPress={addPhoto}
            title="Photos"
            style={styles.container}
        >

            <View style={{borderWidth:2, marginLeft: '10%', marginRight: '10%', borderRadius: 1,borderColor: 'black', borderStyle: 'dotted',margin: 10,}}/>
            <View style={styles.appCards}> 

                <FlatList 
                    data={photos}
                    numColumns={3}
                    key={3}
                    keyExtractor = {photo => photo.photoid.toString()}
                    refreshing={refreshing}
                    onRefresh={() => setPhotos(photoList)}
                    renderItem = {({item}) => 
                    <View> 
                        <View style={styles.appCardsContainer}>
                            <TouchableOpacity onPress={handlePhotoClick}>
                                <AppCard 
                                    image={item.image}
                                    width={200}
                                    flexDirection='row'
                                    alignItems='center'
                                    justifyContent='center'
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.trash} >
                                                    <View>
                                                        <AppOverlay
                                                            title="Delete"
                                                            text="Delete Collection"
                                                            question="Are you sure you want to delete this collection?"
                                                            appicon="trash-can"
                                                            sizeAppIcon={100}
                                                            size={50}
                                                            onPress={() => handleDelete(item)}> 
                                                        </AppOverlay>   
                                                    </View>            
                                                </TouchableOpacity> 
                 
                        </View>

                    </View>
                                
                    }
                />
            <View style={styles.addPhotoButton}>
                <AppOverlay
                    text="Add Photo"
                    icon="plus-circle-outline"
                    size={90}
                    colorIcon={AppColors.FeatureTextColor}
                    placeholder="Photo Name"
                    placeholder2="Photo Description"
                    choose="Choose a Photo:"
                    icon1="account"
                    appicon3="camera"
                    ImagePickerClick={openImagePickerAsync}
                    // imagePath={{uri: image.path}}
                    iconColor={AppColors.otherColor}
                    title="Add Photo"
                    onChangeText1={(inputText) => setName(inputText)}
                    onChangeText2={(inputText) => setDescription(inputText)}
                    onPress={() => {
                        addPhoto()
                        navigation.navigate("PhotosScreen"); 
                    }}
                /> 
            </View>
               
            </View>
        </AppScreen>

    );
}
const styles = StyleSheet.create({
    container: {
        height:'100%',
        overflow: 'hidden',
    },
    overlay: {
        marginTop: '50%',
        position:'absolute',
    },


    icon: {
        top: 0,
        left: 0,
        backgroundColor: 'red',
        width: 40,
    },
    iconContainer:{
        backgroundColor:AppColors.secondaryColor,
        width:75,   
        height: '100%',
        justifyContent:"center",
        alignItems:"center",
    },

    imageButton: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
    addPhoto: {
        marginLeft: 40,
    },

    addPhotoButton: {
        position: 'relative',
            left: '70%',
            bottom: '105%',
    },
    trash: {
        marginLeft: '10%',
    },
    edit: {
        left: '56%',
        top:'-16%',
    },
  
  
    
})
export default PhotoScreen;