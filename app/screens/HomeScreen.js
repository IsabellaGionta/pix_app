
import {React, useState} from 'react';

import {FlatList, StyleSheet, View, TouchableWithoutFeedback, Modal} from 'react-native'
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';


const getCollections = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    // return commonData.getCollections(user);    
    console.log(commonData.getCollections(user));
}

function HomeScreen({navigation}) {
    const collectionList = getCollections();
    console.log(collectionList);

    const [modal, setModal] = useState(false);

   
    return (
        <AppScreen style={styles.container}>
            <View style={styles.appCards}> 
                <TouchableWithoutFeedback onPress={() => setModal(true)}>
                    <AppCard
                        name="photo 1"
                        image={require('../assets/logo.png')}
                    />
                </TouchableWithoutFeedback>
                <AppCard
                    name="photo 2"
                    image={require('../assets/icon.png')}
                />
                                
                <AppCard
                    name="photo 3"
                    image={require('../assets/plant.jpg')}
                />

                {/* <FlatList 
                    data={collectionList}
                    keyExtractor = {collection => collection.collectionid.toString()}
                    renderItem = {({item}) => 
                            <AppCard
                                name={item.name}
                                image={item.image}
                            />}
                    /> */}
            </View>
    
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },

    appCards: {
        flexDirection: 'row',
        // padding: 10, 
        justifyContent: 'space-between', 
    },
    
    
})
export default HomeScreen;