import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  name: {
    fontSize: 20,
  },
  item: {
    width: '100%',
    height: screenWidth - 20, //height will be 20 units less than screen width.
  },
    imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
  },
image: {
    width: '100%',
    height: 400,
  },
//   dotContainer: {
//     backgroundColor: 'rgb(230,0,0)',
//   },
dotContainer: {
    marginTop: 10,
},
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: 'darkgrey',
  },
});
export default styles;