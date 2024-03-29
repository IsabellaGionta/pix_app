import {React, useState} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppButton from './AppButton';
import AppColors from '../config/AppColors';
import AppPickerItem from './AppPickerItem';
import AppText from './AppText';

function AppPicker({data, icon, placeholder, numColumns, selectedItem, onSelectedItem, onPress}) {

    const [modalVisible, setModalVisible]= useState(false);


    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={22}/>}
                    {<AppText style={styles.text}> {selectedItem? selectedItem.label : placeholder} </AppText>}
                    {<MaterialCommunityIcons name="chevron-down" size={22}/>}

                </View>
            </TouchableWithoutFeedback>
             
            <Modal visible={modalVisible} animationType="fade" style={styles.dropdown}>
                <View>
                        <AppButton title="Close" onPress={() => setModalVisible(false)}/>
                        <FlatList
                            numColumns={numColumns}
                            data={data}
                            keyExtractor={(item) => item.labelid.toString()}
                            renderItem = {({item}) => 
                            <AppPickerItem 
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectedItem(item);
                                    {onPress}
                                }}
                                label={item.label}
                                icon={item.icon}  
                                backgroundColor={item.backgroundColor}>
                            </AppPickerItem>
                        }
                        />
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',
        borderRadius: 40, 
        padding: 15,
        width:'80%',
        backgroundColor: AppColors.secondaryColor,
        marginVertical: 10,
        // marginTop: 50,
        marginLeft: '10%',


    },
    text:{
        flex: 1,
        color: AppColors.FeatureTextColor,
        marginLeft: '2%',

    },
    dropdown: {
        backgroundColor: 'white',
        margin: 15, 
        alignItems: undefined,
        justifyContent: undefined,

    }
})
export default AppPicker;