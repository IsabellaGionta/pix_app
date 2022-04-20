import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';
import AppSlider from './app/components/AppSlider';
import AppCarousel from './app/components/AppCarousel';
import ProfileScreen from './app/screens/ProfileScreen';
import PhotoScreen from './app/screens/PhotoScreen';
import DrawerNavigator from './app/navigation/DrawerNavigator';
import { AppCustomPicker } from './app/components/AppCustomPicker';


export default function App() {
  return (
    <NavigationContainer> 
      <AuthNavigator/>
    </NavigationContainer>
//  <ProfileScreen> </ProfileScreen> */}
      // <NewCollectionScreen  style={styles.container}> 
      
      // </NewCollectionScreen>

      // <PhotoScreen></PhotoScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
