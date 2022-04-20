
import {useState, React} from 'react';
import {FlatList, StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity, Image} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';
import AppPicker from '../components/AppPicker';
import AppText from '../components/AppText';
import PhotoScreen from '../screens/PhotoScreen';
import {Overlay} from 'react-native-elements';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import * as ImagePicker from 'expo-image-picker';
import AppIcon from '../components/AppIcon';
import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItem';
import AppOverlay from '../components/AppOverlay';


const getCollections = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getCollections(user);    
}

const collections = [
    {label: "2020", value:1, icon:"airplane-takeoff", backgroundColor: "orange"},
    {label: "2021", value:2, icon:"flash", backgroundColor: "lightblue"},
    {label: "2022", value:3, backgroundColor: "lightblue"},
];


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

    
    // const filterCollection = (id) => {
    //     return(
    //         collections.filter((collection) => labels.labelid === collection.id).length>0
    //     );
    // };

    const profile = async function () {
        await navigation.navigate("Profile");
 
    }

    const handleFilter = (label) => {
        const newLabelList =  collections.filter (item => item.collectionid === label.collectionid);
        setCOllections(newLabelList);
        return (
            newLabelList,
            console.log(newLabelList)

        )
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
            // image: image.path,
        };

        console.log(newCollection);
        commonData.addCollection(newCollection);

    }

    return (
        <AppScreen 
            icon="account"
            onPress={profile}
        >
            <View style={styles.container}> 

            <View style={styles.topContainer}> 
                <AppPicker 
                    selectedItem={collection} 
                    onSelectedItem = {item => setCollection(item)} 
                    data={collections} 
                    size={23} 
                    icon="apps" 
                    placeholder="Collections" 
                    numColumns={3}
                />
                
                <View style={styles.newCollection}>
                    <AppOverlay
                        text="Add Collection"
                        icon="folder-multiple-plus"
                        size={40}
                        title="Create Collection"
                        placeholder="Photo Name"
                        appicon3="camera"
                        onChangeText1={(inputText) => setName(inputText)}
                        onPress={() => {
                             addCollection();
                             navigation.navigate("Collections");
                             console.log(addCollection)
                            }}> 
                    </AppOverlay>
                </View>
            </View>
            {/* <View style={styles.appCards}>  */}
                <FlatList style={styles.flatListContainer}
                    data={collections}
                    keyExtractor = {collection => collection.collectionid.toString()}
                    refreshing={refreshing}
                    onRefresh={() => setCollections(collectionList)}
                    renderItem = {({item}) => 
                        <TouchableOpacity onPress={() => navigation.navigate("Photos")}>
                            {/* <View style={styles.addCardsContainer}> */}
                                <AppCard
                                    image={item.image}
                                    name={item.name}
                                    description={item.description}
                                />
                            {/* </View> */}
                        </TouchableOpacity>
                    }
                    />
            {/* </View> */}


        </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
    },
    textOverlay: {
        width: '100%',
    },
    appTextInput: {
        textAlign: 'center',
        marginLeft: 10,
    },
    // appCards: {
    //     flexDirection: 'row',
    //     padding: 10, 
    //     justifyContent: 'space-between',
    //     flex:1,
    // },
    imageButton: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
    newCollection: {
        left: '83%',
        top: '-38%',

    },
    flatListContainer: {
        flex: 1,
    },
    // addCardsContainer: {
    //     // width: '100%',
    //     // height:'50%',
    //           width: '40%',
    //     height: 200,
    //     marginTop:10,
    //     flexDirection:'row',
    //     backgroundColor:'red',

    // }
    
})
export default CollectionScreen;