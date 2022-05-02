import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppIcon from './AppIcon';
import AppText from './AppText';


function AppPickerItem({onPress, label, icon, backgroundColor}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppIcon name={icon} backgroundColor={backgroundColor}> </AppIcon>
            <AppText> {label} </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    }
    
})
export default AppPickerItem; 