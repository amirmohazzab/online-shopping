import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {useSelector} from 'react-redux'
import {Badge} from '@rneui/themed'
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


const ShoppingCartIcon = () => {

    const navigation = useNavigation();
    const {cart} = useSelector(store => store);

    return ( 
        <View style={{padding: 5}}>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Cart')}> 
                    <MaterialIcons name="shopping-cart" size={25} color="#000"/>
                    <Badge
                        status="primary"
                        containerStyle={{ position: 'absolute', top: -2, right: -12 }}
                        value={cart.length}
                    />
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default ShoppingCartIcon;