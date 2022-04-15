import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';


import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppText from './AppText';


function AppError({name}) {

    return (
        <AppText>
            <View style={styles.appError}>
                <AppText> </AppText>
            </View>
        </AppText>

    );
}

const styles = StyleSheet.create({
    appError: {
        flex: 1,
        width: '100%',
        marginLeft: 10,
    },
})

export default AppError;
