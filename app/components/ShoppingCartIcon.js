import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {Badge} from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


const ShoppingCartIcon = () => {

    const navigation = useNavigation();

    return ( 
        <View style={{padding: 5}}>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Cart')}> 
                    <MaterialIcons name="shopping-cart" size={30} color="#000"/>
                    <Badge
                        status="primary"
                        containerStyle={{ position: 'absolute', top: -8, right: -8 }}
                        value="3"
                    />
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default ShoppingCartIcon;