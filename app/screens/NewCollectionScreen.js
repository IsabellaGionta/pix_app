 import {useState, React} from 'react';

import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';

const collections = [
    {label: "2020", value:1, icon:"airplane-takeoff", backgroundColor: "orange"},
    {label: "2021", value:2, icon:"flash", backgroundColor: "lightblue"},
    {label: "2022", value:3, backgroundColor: "lightblue"},
];


 function NewCollectionScreen(props) {
    const[collection, setCollection] = useState();

     return (
         <AppScreen>
             <AppPicker 
                selectedItem={collection} 
                onSelectedItem = {item => setCollection(item)} 
                data={collections} 
                size={23} 
                icon="apps" 
                placeholder="Collections" 
                numColumns={3}>
            </AppPicker>
            
         </AppScreen>
     );
 }
 
 export default NewCollectionScreen;