import * as ImagePicker from 'expo-image-picker';
import { React, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItem';
import AppOverlay from '../components/AppOverlay';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';




const getCollections = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getCollections(user);    
}


const getLabels = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getLabels(user);    
}



function CollectionScreen({navigation, onPress}) {
    const[collection, setCollection] = useState("");
    const[refreshing, setRefreshing] = useState(false);
    const[name, setName] = useState("");
    const[image, setImage] = useState(null);
    const collectionList = getCollections();

    const labelList = getLabels();
    const[labels, setLabels] =  useState(labelList);
    const[collections, setCollections] =  useState(collectionList);

    

    const [collectionOverlayVisible, setCollectionOverlayVisible] = useState(false);

    
    const filterCollections = (collectionid) => {
        
       const newFilteredCollections =  collections.filter(item => labels.collectionid === item.collectionid).length>0
        return (
            newFilteredCollections,
            console.log(newFilteredCollections)
        )
        
    };

    const profile = async function () {
        await navigation.navigate("Profile");
 
    }

    const handlePhotos = () => {
        navigation.navigate("IndivCollectionList")
    }




    const handleDelete = (collection) => {

        const newCollectionsList =  collections.filter (item => item.collectionid !== collection.collectionid);
        setCollections(newCollectionsList);
         return (
            newCollectionsList,
             console.log(newCollectionsList)

         )
    }


    const handleFilter = (label) => {
        const newLabelList =  collections.filter (item => item.name === label.name);
        setCOllections(newLabelList);
        return (
            newLabelList,
            console.log(newLabelList)
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
        // setImagePath({path: pickerResult.uri});
        console.log("picker result", pickerResult);


    }

    const addCollection = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const collections = commonData.getCollections(user);
        const collectionID = collections.length+1;
        const newCollection = {
            name: name,
            collectionid: collectionID,
            userid: user,
            image: image.path,
        };

        console.log(newCollection);
        commonData.addCollection(newCollection);
        console.log("new list",  collections)

    }

    return (
        <AppScreen 
            // icon="account"
            onPress={profile}
            title="Collections"   
        >
            <View style={styles.container}>

                <View style={{borderWidth:2, marginLeft: '10%', marginRight: '10%', borderRadius: 1,borderColor: 'black', borderStyle: 'dotted',margin: 10,}}/>
  
     

                <View style={styles.topContainer}> 
                    <AppPicker 
                        selectedItem={collection} 
                        onSelectedItem = {item => setCollection(item)} 
                        data={labels} 
                        size={23} 
                        icon="apps" 
                        placeholder="Collections" 
                        numColumns={3}
                        onPress={() => handleFilter(label)}
                    />
                    
                <View style={styles.newCollection}>
                    <AppOverlay
                        text="Add Collection"
                        icon="folder-multiple-plus"
                        size={60}
                        colorIcon={AppColors.FeatureTextColor}
                        title="Create Collection"
                        choose="Choose a Photo:"
                        placeholder="Photo Name"
                        appicon3="camera"
                        ImagePickerClick={openImagePickerAsync}
                        onChangeText1={(inputText) => setName(inputText)}
                        onPress={() => {
                             navigation.navigate("Collections");
                             addCollection();

                             console.log("clicked",addCollection)
                            }}> 
                    </AppOverlay>
                </View>
            </View>
            {/* <View style={styles.appCards}>  */}
                <FlatList style={styles.flatListContainer}
                    data={collections}
                    keyExtractor = {collection => 
                        collection.collectionid.toString()
                    }
                    
                    refreshing={refreshing}
                    onRefresh={() => setCollections(collectionList)}
                    renderItem = {({item}) => 
            
                        <TouchableOpacity onPress={(item) => {
                            if(item.collectionid === collection.collectionid) {
                                navigation.navigate("IndivCollectionScreen1")
                                console.log("collectionid:", collection)

                        
                        }
                        console.log(collection.collectionid)
                        }}>
                            <View style={styles.addCardsContainer}>
                                <AppListItem
                                    title={item.name}
                                    image={item.image}
                                    name={item.name}
                                    onPress={() => navigation.navigate("Photos")}
                                    onSwipeLeft={ () => (
                                        <View style={styles.AppListItemContainer}> 
                                            <View style={styles.iconContainer}>
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
                 

                                                <View style={{marginTop: 10,}}>
                                                    <AppOverlay 
                                                        text="Edit Photo"
                                                        appicon="image-edit-outline"
                                                        sizeAppIcon={100}
                                                        placeholder="Edit Photo Name"
                                                        placeholder2="Edit Photo Description"
                                                        appicon3="camera"
                                                        ImagePickerClick={openImagePickerAsync}
                                                        // imagePath={{uri: image.path}}
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
                            </View>
                        </TouchableOpacity>

                    }

                    />


            </View>


        {/* </View> */}
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textOverlay: {
        width: '100%',
    },
    appTextInput: {
        textAlign: 'center',
        marginLeft: 10,
    },
    seperator:{
        width:"100%",
        height:2,
        backgroundColor: AppColors.secondaryColor,
    },
    appCards: {
        flexDirection: 'row',
        // padding: 10, 
        // justifyContent: 'space-between',
        flex:1,
    },
    imageButton: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
    newCollection: {
        position: 'relative',
            left: '75%',
            bottom: '120%',
    

    },
    iconContainer:{
        height: '100%',
        marginHorizontal: '-3%',
        top: '-6%',
        justifyContent:"center",
        alignItems:"center",
    },

    AppListItemContainer: {
        height:'100%',
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 20,
    },
    // flatListContainer: {
    //     flexDirection: 'row',
    //     flex: 1,
    // },
    addCardsContainer: {
        width: '80%',
        left: '8%',
        marginBottom: 30,
    }

    
})
export default CollectionScreen;