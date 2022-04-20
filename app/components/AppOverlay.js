import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { React, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import AppButton from './AppButton';
import AppColors from '../config/AppColors';
import AppIcon from './AppIcon';
import AppText from './AppText';
import AppTextInput from './AppTextInput';







function AppOverlay({ text, title, placeholder, placeholder2, onChangeText1, onChangeText2, size, appicon, appicon2, appicon3, description, icon, path, children, onPress}) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const[image, setImage] = useState(null);


  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();


    if (pickerResult.cancelled === true) {
        return;
    }
    setImage({path: pickerResult.uri});
    console.log(pickerResult);
}


  return (
      <>

        <View style={styles.container}>
            <TouchableOpacity onPress={() => setOverlayVisible(true)} > 
                { icon && <MaterialCommunityIcons size={size} name={icon}/> }
                { appicon && <AppIcon name={appicon} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}> </AppIcon>}
                { appicon2 && <AppIcon name={appicon2} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}> </AppIcon>}
            </TouchableOpacity>
        </View>

        <Overlay style={styles.overlay} isVisible={overlayVisible} onBackdropPress={() => setOverlayVisible(!overlayVisible)}>
            <View style={styles.overlayContainer}> 
                <AppText style={{textAlign: 'center', marginBottom: 10,}}> {text} </AppText>
                <View style={styles.textOverlay}> 
                    <AppTextInput onChangeText={onChangeText1} placeholder={placeholder} style={styles.photoNameOverlay}/>
                    {placeholder2 && <AppTextInput  onChangeText={onChangeText2} placeholder={placeholder2} style={styles.photoTextOverlay}/>}
                </View>
                <AppText style={{textAlign: 'center', fontSize:16,}}> Choose a Photo:</AppText>
                    <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                        <AppIcon  name={appicon3} size={80}/>
                        {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
                    </TouchableOpacity>
                <View style={styles.buttonOverlay}>
                    <AppButton 
                        title={title} 
                        onPress={onPress}
                    />
                </View>
            </View>
        </Overlay> 
    </>

  );
};

const styles = StyleSheet.create({
    icon: {
        marginLeft: '22%',
        marginTop: '0%',

    },
    imageButton: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
    
})

export default AppOverlay;