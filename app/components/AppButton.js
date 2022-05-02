import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppText from './AppText';



function AppButton({title, onPress}) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.appButton}>
                {<AppText style={styles.appButtonText}> {title}  </AppText>}
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    appButton: {
        backgroundColor: AppColors.buttonColor,
        borderRadius: 20,
        width: '80%',
        padding: 15,
        marginHorizontal: '10%',
        alignItems: 'center',
        borderWidth: 2,
    },
    appButtonText: {
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontFamily: AppFonts.headings,
        color: AppColors.FeatureTextColor


    },
})

export default AppButton;
