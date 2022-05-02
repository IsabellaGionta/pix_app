import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

function AppTextInput({icon, ...otherProps}) {

    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={22}/>}
            <TextInput  style={styles.textInput} {...otherProps}/>

        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',
        padding: 15,
        width:'80%',
        marginVertical: 10,
        marginLeft: '10%',
         marginLeft: '10%', marginRight: '10%', borderRadius: 30, borderStyle: 'solid',margin: 10,


    },
    InputTextLine: {
        borderWidth:2,


    },
    textInput:{
        flex: 1,
        fontSize: 20,
        fontFamily: AppFonts.text,
        color: AppColors.FeatureTextColor,
        marginLeft: '2%',
        width:'80%',
        alignSelf: 'stretch',
        borderBottomColor:'black',
        borderBottomWidth:1,

    },
})
export default AppTextInput;