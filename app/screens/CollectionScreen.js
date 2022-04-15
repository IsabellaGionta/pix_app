
import {useState, React} from 'react';
import {FlatList, StyleSheet, View} from 'react-native'
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';
import AppPicker from '../components/AppPicker';


const getCollections = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    // return commonData.getCollections(user);    
    console.log(commonData.getCollections(user));
}

const collections = [
    {label: "2020", value:1, icon:"airplane-takeoff", backgroundColor: "orange"},
    {label: "2021", value:2, icon:"flash", backgroundColor: "lightblue"},
    {label: "2022", value:3, backgroundColor: "lightblue"},
];






function CollectionScreen(props) {
    const[collection, setCollection] = useState();

    const collectionList = getCollections();
    console.log(collectionList)

    return (
        <AppScreen style={styles.container}>
            <AppPicker 
                selectedItem={collection} 
                onSelectedItem = {item => setCollection(item)} 
                data={collections} 
                size={23} 
                icon="apps" 
                placeholder="Collections" 
                numColumns={3}>
            </AppPicker>
            <View style={styles.appCards}> 
                <AppCard
                    name="2022"
                    image={require('../assets/icon.png')}
                />
                <AppCard
                    name="2022"
                    image={require('../assets/icon.png')}
                />
                                
                <AppCard
                    name="2022"
                    image={require('../assets/icon.png')}
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
    appCards: {
        flexDirection: 'row',
        padding: 10, 
        justifyContent: 'space-between',
    }
    
})
export default CollectionScreen;