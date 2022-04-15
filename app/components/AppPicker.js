import {React, useState} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppButton from './AppButton';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppPickerItem from './AppPickerItem';
import AppText from './AppText';

function AppPicker({data, icon, placeholder, numColumns, selectedItem, onSelectedItem}) {

    const [modalVisible, setModalVisible]= useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={22}/>}
                    <AppText style={styles.text}> {selectedItem? onSelectedItem.label : placeholder} </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={22}/>

                </View>
            </TouchableWithoutFeedback>
             
            <Modal visible={modalVisible} animationType="slide">
                    <AppButton title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                    numColumns={numColumns}
                        data={data}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem = {({item}) => 
                        <AppPickerItem 
                            onPress={() => {
                                setModalVisible(false);
                                onSelectedItem(item);
                                console.log(item)
                            }}
                            label={item.label}
                            icon={item.icon}  
                            backgroundColor={item.backgroundColor}>
                        </AppPickerItem>
                        
                        
                       }
                    />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',
        borderRadius: 40, 
        padding: 15,
        width:'90%',
        backgroundColor: AppColors.secondaryColor,
        marginVertical: 10,
        marginTop: 50,
        marginLeft: '5%',


    },
    text:{
        flex: 1,
        color: AppColors.FeatureTextColor,
        marginLeft: '2%',

    },
})
export default AppPicker;