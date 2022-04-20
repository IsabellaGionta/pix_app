import React from 'react';
import { TouchableOpacity, StyleSheet, View} from 'react-native';


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
        backgroundColor: AppColors.primaryColor,
        borderRadius: 20,
        width: '80%',
        padding: 15,
        marginHorizontal: '10%',
        alignItems: 'center',
    },
    appButtonText: {
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontFamily: AppFonts.headings,


    },
})

export default AppButton;
