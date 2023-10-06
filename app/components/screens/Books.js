import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'
import ShoppingCartIcon from '../ShoppingCartIcon';
import { Ionicons } from '@expo/vector-icons';
import { books } from '../../Data/fakeData';


const Books = ({navigation}) => {
    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={()=> navigation.goBack()}>  
                        <Ionicons name="ios-arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                }
                centerComponent={{ text: 'Books', style: { color: '#fff', fontSize: 20, fontWeight: "bold"} }}
                rightComponent={<ShoppingCartIcon />}
                containerStyle={{
                    backgroundColor: 'green',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Products products={books} onPress={addItemToCart} />
            </View>
        </View>
     );
};
 
export default Books;