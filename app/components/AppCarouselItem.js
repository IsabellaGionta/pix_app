import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import styles from '../styles/styles';



function AppCarouselItem({ item, index, photos }, parallaxProps) {
  return (
    <Pressable onPress={() => alert('Image description:' + item.description)}>
      <View style={styles.item}>
        <Image
          source={item.image}          
          style={styles.image}
          {...parallaxProps} /* pass in the necessary props */ 
        />
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
}
// const styles = StyleSheet.create({ 
//   container: {
//     paddingTop: 30,
//   },
//   name: {
//     fontSize: 20,
//   },
//   item: {
//     width: '100%',
//     //height will be 20 units less than screen width.
//   },
//     imageContainer: {
//     flex: 1,
//     borderRadius: 5,
//     backgroundColor: 'lightblue',
//     marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
//   },
//   image: {
//    width: '100%',
//    height: 400,
//   },
//   dotContainer: {
//     backgroundColor: 'rgb(230,0,0)',
//   },
//   dotStyle: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'black',
//   },
//   inactiveDotStyle: {
//     backgroundColor: 'rgb(255,230,230)',
//   },
// });

export default AppCarouselItem;