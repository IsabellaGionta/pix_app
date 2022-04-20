import CollectionScreen from "../screens/CollectionScreen";
import PhotoScreen from "../screens/PhotoScreen";
import HomeNavigator from "./HomeNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PhotosNavigator from "./PhotosNavigator";
import AuthNavigator from "./AuthNavigator";

const DrawerNav = createDrawerNavigator();

const DrawerNavigator = () => (
      <DrawerNav.Navigator  screenOptions={{headerShown: false}}>
        <DrawerNav.Screen name="Profile" component={AuthNavigator} />
        <DrawerNav.Screen name="Photos" component={PhotosNavigator} /> 
        <DrawerNav.Screen name="Collections" component={CollectionScreen}/>
      </DrawerNav.Navigator>

)

export default DrawerNavigator;
