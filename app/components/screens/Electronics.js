import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'
import ShoppingCartIcon from '../ShoppingCartIcon';
import { Ionicons } from '@expo/vector-icons';
import Products from '../Products';
import { electronics } from './../../Data/fakeData';


const Electronics = ({navigation}) => {
    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={()=> navigation.goBack()}>  
                        <Ionicons name="ios-arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                }
                centerComponent={{ text: 'Electronics', style: { color: '#fff', fontSize: 20, fontWeight: "bold"} }}
                rightComponent={<ShoppingCartIcon />}
                containerStyle={{
                    backgroundColor: 'red',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Products products={electronics} onPress={addItemToCart} />
            </View>
        </View>
        
     );
};
 
export default Electronics;