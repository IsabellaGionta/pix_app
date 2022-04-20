import {useState, React} from 'react';
import DataManager from '../config/DataManager';

import { View, Image, StyleSheet, TouchableOpacity, FlatList, Modal} from 'react-native'
import AppCard from './AppCard';
import AppScreen from './AppScreen';



const getPhotos = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getPhotos(user);    
}
function AppCarousel({image, name, description}) {
    const[photo, setPhotos] = useState();


    const photoList = getPhotos();
    return (
        <AppScreen style={styles.container}>
            <View style={styles.appcards}>
                <FlatList 
                    data={photoList}
                    keyExtractor = {photo => photo.photoid.toString()}
                    renderItem = {({item}) => 
                            <AppCard
                                image={item.image}
                                name={item.name}
                                description={item.description}
                            />
                    }
                />
                
            </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },
    appCards: {
        width: '90%',
        marginLeft: '6%',
    },
    
})
export default AppCarousel;