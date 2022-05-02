import { MaterialCommunityIcons } from '@expo/vector-icons';
import { React, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import AppColors from '../config/AppColors';
import AppButton from './AppButton';
import AppIcon from './AppIcon';
import AppText from './AppText';
import AppTextInput from './AppTextInput';







function AppOverlay({ text, title, placeholder, placeholder2, colorIcon, sizeAppIcon, name, photo, description, onChangeText1, onChangeText2, size, appicon, appicon2, appicon3, question, icon, icon1, choose, children, onPress, ImagePickerClick, image}) {
  const [overlayVisible, setOverlayVisible] = useState(false);


  return (
      <>

        <View style={styles.container}>
            <TouchableOpacity onPress={() => setOverlayVisible(true)} > 
                { icon && <MaterialCommunityIcons size={size} color={colorIcon} name={icon}/> }
                { appicon && <AppIcon name={appicon} size={sizeAppIcon} iconColor={AppColors.otherColor} > </AppIcon>}
                { appicon2 && <AppIcon name={appicon2} iconColor={AppColors.otherColor} backgroundColor={AppColors.buttonColor}> </AppIcon>}
            </TouchableOpacity>
        </View>

        <Overlay style={styles.overlay} isVisible={overlayVisible} onBackdropPress={() => setOverlayVisible(!overlayVisible)}>
            <View style={styles.overlayContainer}> 
                <AppText style={{textAlign: 'center', marginBottom: 10,}}> {text} </AppText>
                <View style={styles.textOverlay}> 
                    {question ? <AppText style={{textAlign: 'center', top: 40, left: '15%',width: '70%',}}> {question} </AppText> : null}
                    {placeholder ? <AppTextInput onChangeText={onChangeText1} placeholder={placeholder} style={styles.photoNameOverlay}/>: null}
                    {placeholder2 ? <AppTextInput  onChangeText={onChangeText2} placeholder={placeholder2} style={styles.photoTextOverlay}/>: null}
                </View>
       
                    { choose ? <AppText style={{textAlign: 'center', fontSize:16,}}> {choose} </AppText> : null }
                    <TouchableOpacity style={styles.imageButton} onPress={ImagePickerClick}>
                        <AppIcon  name={appicon3} size={80}/>
                        {image ? <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/> : <View/>}
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

    icon1: {
        top: 20,

    },
    imageButton: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
    photoNameOverlay: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 30, 
        width: '90%',
        alignSelf: 'stretch',
        backgroundColor: AppColors.secondaryColor,
        marginVertical: 10,
      
        borderWidth:2,
    },
    photoTextOverlay: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 30, 
        width: '90%',
        alignSelf: 'stretch',
        backgroundColor: AppColors.secondaryColor,
        marginVertical: 10,
      
        borderWidth:2,
    }
    
})

export default AppOverlay;