import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import AppIcon from './AppIcon';
import AppText from './AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';

// interface Props {
//   label: string;
// }


function AppDropdown({label, icon}) {
    const [visible, setVisible] = useState(false);
  
  
  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
          <Text style={styles.dropdown}>
            This is where the dropdown will be rendered.
          </Text>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <AppText style={styles.buttonText}>{label}</AppText>
      {icon && <MaterialCommunityIcons name={icon} size={22}/>}    
      <MaterialCommunityIcons name="chevron-down" size={22}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    marginTop: 70,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  },
});

export default AppDropdown;