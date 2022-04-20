import * as React from 'react'
import { Alert, View } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
 
export class AppCustomPicker extends React.Component {
  render() {
    const collections = [
        {label: "2020", id:1, icon:"airplane-takeoff", backgroundColor: "orange"},
        {label: "2021", id:2, icon:"flash", backgroundColor: "lightblue"},
        {label: "2022", id:3, backgroundColor: "lightblue"},
    ];    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
          options={collections}
          onValueChange={value => {
              if(value.id === collections.id ) {
                  alert("hi there")
              }
            Alert.alert('Selected Item', value || 'No item were selected!')
          }}
        />
      </View>
    )
  }
}