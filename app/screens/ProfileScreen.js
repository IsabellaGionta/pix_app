import React, {useState} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItem';
import AppIcon from '../components/AppIcon';


const initialAuthorList = [
    {
        id:1,
        name:"Jane Harper",
        image: require("../assets/plant.jpg"),
    },
    {
        id:2,
        name:"J.K.Rowling",
        image: require("../assets/logo.png"),
    },

]



function MyAuthorsScreen(props) {

    const[refreshing, setRefreshing] = useState(false);
    const[authors, setAuthors] =  useState(initialAuthorList);

    const handleDelete = (author) => {
        const newAuthorList =  authors.filter (item => item.id !== author.id);
        setAuthors(newAuthorList);
    }

    return (
        <AppScreen style={styles.container}>
            <FlatList
            data = {authors}
            keyExtractor = { author => author.id.toString()}
            refreshing={refreshing}
            onRefresh={() => setAuthors(initialAuthorList)}
            renderItem = {({item}) => 
                <AppListItem 
                    title={item.name}
                    image={item.image}
                    onPress={() => console.log(item)}
                    onSwipeLeft={ () => (
                    <View style={styles.deleteView}>
                        <TouchableOpacity onPress={() => handleDelete(item)}>
                            <AppIcon name="trash-can" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/> 
                        </TouchableOpacity>
                    </View>)}
    
                />}
            ItemSeparatorComponent = { () =>
                <View style={styles.seperator}/>
            }
            />
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        flex:1,
    },
    seperator:{
        width:"100%",
        height:2,
        backgroundColor: AppColors.secondaryColor,
    },
    deleteView:{
        backgroundColor:AppColors.secondaryColor,
        width:75,   
        justifyContent:"center",
        alignItems:"center",
    }
})

export default MyAuthorsScreen;