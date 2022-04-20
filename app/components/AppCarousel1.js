import React from 'react'; 
import { StyleSheet,Text, Image, View, TouchableHighlight, FlatList} from 'react-native'; 
import Carousel from 'react-native-snap-carousel'; 
import {MaterialCommunityIcons} from '@expo/vector-icons';
import DataManager from '../config/DataManager';

const getPhotos = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getPhotos(user);    
    // console.log(commonData.getCollections(user));
}


function AppCarousel1({image, name, subtitle, IconComponent, onPress, onSwipeLeft}) {

    const photoList = getPhotos();

                carouselItems: [ 
                    { 
                        title:"Item 1",
                        image: require('../assets/plant.jpg') 
                    }, 
                    { 
                        title:"Item 2",
                        image: require('../assets/icon.png')  
                    }, 
                    { 
                        title:"Item 3",
                        image: require('../assets/plant.jpg')  
                    }, 
                    { 
                        title:"Item 4",
                        image: require('../assets/icon.png')  
                    }, 
                    { 
                        title:"Item 5",
                        image:require('../assets/plant.jpg')  
                    } 
                ]
            
                    
                    // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                    //     <Image source={image} style={styles.images} /> 
                    //     <Text style={{color:'#fff'}} >{item.title}</Text> 
                    // </View> 
   


                return ( 
                    <View style={styles.container}>
                        <TouchableHighlight onPress={ () => { this.carousel._snapToItem(this.state.activeIndex-1)} }> 
                            <MaterialCommunityIcons name="arrow-left-thick" size={35} style={styles.icon} />                        
                        </TouchableHighlight> 
                        <View style={styles.carousel}> 
                        <FlatList 
                                data={photoList}
                                keyExtractor = {photo => photo.photoid.toString()}
                                renderItem = {({item}) => 
                                    <Carousel ref={ref => this.carousel = ref} data={this.state.carouselItems} sliderWidth={250} itemWidth={250} renderItem={this._renderItem} onSnapToItem = { index => this.setState({activeIndex:index}) } /> 
                                }
                        />
                        
                        </View> 
                        <TouchableHighlight onPress={ () => { this.carousel._snapToItem(this.state.activeIndex+1)} }> 
                            <MaterialCommunityIcons name="arrow-right-thick" size={35}  />                        
                        </TouchableHighlight> 
                    </View> 

                    
                )
            };


//        render() { 
//         return ( 
//             <View style={styles.container}>
//                 <TouchableHighlight onPress={ () => { this.carousel._snapToItem(this.state.activeIndex-1)} }> 
//                     <MaterialCommunityIcons name="arrow-left-thick" size={35} style={styles.icon} />                        
//                 </TouchableHighlight> 
//                 <View> 
//                     <Carousel ref={ref => this.carousel = ref} data={this.state.carouselItems} sliderWidth={250} itemWidth={250} renderItem={this._renderItem} onSnapToItem = { index => this.setState({activeIndex:index}) } /> 
//                 </View> 
//                 <TouchableHighlight onPress={ () => { this.carousel._snapToItem(this.state.activeIndex+1)} }> 
//                     <MaterialCommunityIcons name="arrow-right-thick" size={35}  />                        
//                 </TouchableHighlight> 
//             </View> 
//         )
//     }

// };

const styles = StyleSheet.create({ 
    carouselContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // width: '20%',
        backgroundColor: 'white',
    },
    container: { 
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    images: {
        backgroundColor: 'red',
    }
});

export default AppCarousel1;

// export default class App extends React.Component { 
//     constructor(props){ 
//         super(props); 
//         this.state = { carouselItems: [ { title:"Item 1" }, { title:"Item 2" }, { title:"Item 3" }, { title:"Item 4" }, { title:"Item 5" } ]} }
//          _renderItem({item,index}){ return ( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
//          <Text style={{color:'#fff'}} >{item.title}</Text> </View> ) } render() { return ( <SafeAreaView style={styles.container}> 
//          <Carousel data={this.state.carouselItems} sliderWidth={250} itemWidth={250} renderItem={this._renderItem} /> </SafeAreaView> ); } } 
//          const styles = StyleSheet.create({ container: { flex: 1, backgroundColor:'#131420', alignItems: 'center', justifyContent: 'center', }, });

//          const styles = StyleSheet.create({
//         });

