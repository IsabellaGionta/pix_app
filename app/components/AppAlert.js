
const React = require('react');
const { Text, Button, View } = require('react-native');
const { Navigation } = require('react-native-navigation');
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppButton from './AppButton';


function AppAlert({ alertid, name, description, icon }) {
  const close = () => Navigation.dismissOverlay(alertid);


  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        {icon && <MaterialCommunityIcons name={icon} size={35} style={styles.icon} />} 
        <AppButton style={styles.close} title="OK" onPress={close} />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
 
  },
  alert: {
    alignItems: 'center',
    // backgroundColor: 'whitesmoke',
    width: '100%',
    height: 350,
    marginTop: 500,
    elevation: 4,
  },
  name: {
    // fontSize: 18,
  },
  description: {
    marginVertical: 8,
  },

};

AppAlert.options = (props) => {
  return {
    overlay: {
      interceptTouchOutside: true,
    },
  };
};

export default AppAlert;