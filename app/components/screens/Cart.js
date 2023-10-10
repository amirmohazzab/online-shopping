import React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native';
import {Header} from 'react-native-elements';
import { Text, Button } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../../features/cartSlice'

const Cart = ({navigation}) => {

    const {cart} = useSelector(store => store);
    const dispatch = useDispatch();

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header 
                leftComponent={
                    <TouchableOpacity onPress={()=> navigation.goBack()}>  
                        <Ionicons name="ios-arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                }
                centerComponent={{ text: 'Your Card', style: { color: '#fff', fontSize: 20, fontWeight: "bold"} }}
                containerStyle={{
                    backgroundColor: '#f0ad4e',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ScrollView> 
                    { cart.length > 0 ? 
                        (cart.map((p,i) => (
                            
                                <TouchableOpacity key= {i}>
                                    <Button
                                        onPress={() => dispatch(removeFromCart(p))}
                                        buttonStyle={{backgroundColor: "transparent", borderBottomWidth: 1, borderBottomColor: "lightgray"}}
                                        containerStyle={{width: 300, marginHorizontal: 50, marginVertical: 10}}
                                    >  
                                        <Text style={{fontWeight: "bold", color: "black", fontSize: 18}}> {`${p.name} - ${p.price} Euro`} </Text>
                                    </Button>
                                </TouchableOpacity>
                           
                            ))) : 
                        (<Text style={{fontSize: 20, fontWeight: "bold"}}> Your cart is empty </Text>)
                    }
                     </ScrollView>
            </View>
        </View>
     );
};
 
export default Cart;