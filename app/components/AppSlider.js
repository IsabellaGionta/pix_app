import {useState, React} from 'react';

import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import Carousel from "react-native-snap-carousel";
import AppScreen from "./AppScreen";
import AppCarouselItem from "./AppCarouselItem";
import DataManager from "../config/DataManager";
import AppPageIndex from './AppPageIndex';

const { width } = Dimensions.get("window");

const getPhotos = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getPhotos(user);    
    // console.log(commonData.getCollections(user));
}


export default function AppSlider({data}) {
    const[photo, setPhotos] = useState();

    const [slideIndex, setSlideIndex] = useState(0);
    const photoList = getPhotos();
    console.log("AppSlider Log:", photoList)

    // const[photo, setPhotos] = useState();

    // const photoList = getPhotos();
    // console.log(photoList)

  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: AppCarouselItem,
    hasParallaxImages: true,
    onSnapToItem: (index) => setSlideIndex(index),
  };
  console.log("AppSlide Log:",data)

  return (
    <View style={styles.container}>
        <FlatList 
                            data={photoList}
                            keyExtractor = {photo => photo.photoid.toString()}
                            renderItem = {({item}) => 
                            <View>
                                <Carousel {...settings}    />
                                {/* <AppPageIndex data={data} activeSlide={slideIndex} /> */}
                            </View>
                            
                            }
                        />
  
   
    </View>

  );
}
const styles = StyleSheet.create({ 
    
  });