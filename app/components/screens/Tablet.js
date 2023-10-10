import React from 'react'
import { View, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from 'react-native-elements'
import { Text, Button } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import ShoppingCartIcon from '../ShoppingCartIcon';
import { tablet } from './../../Data/fakeData';
import { useDispatch} from 'react-redux';
import { addToCart } from '../../features/cartSlice';


const Tablet = ({navigation}) => {

    const dispatch = useDispatch();    
    
    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={()=> navigation.goBack()}>  
                        <Ionicons name="ios-arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                }
                centerComponent={{ text: 'Tablet', style: { color: '#fff', fontSize: 20, fontWeight: "bold"} }}
                rightComponent={<ShoppingCartIcon />}
                containerStyle={{
                    backgroundColor: 'skyblue',
                    justifyContent: 'space-around',
                }}
            />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ScrollView> 
                    {tablet.map((p,i) => (
                        <TouchableOpacity key= {i}>      
                            <Button
                                onPress={() => dispatch(addToCart(p))}
                                buttonStyle={{backgroundColor: "transparent", borderBottomWidth: 1, borderBottomColor: "lightgray"}}
                                containerStyle={{width: 300, marginHorizontal: 50, marginVertical: 10}}
                            >  
                                <Text style={{fontWeight: "bold", color: "black", fontSize: 18}}> {`${p.name} - ${p.price} Euro`} </Text>
                            </Button>
                        </TouchableOpacity>))
                    }
                </ScrollView>
                
            </View>
        </View>
     );
};
 
export default Tablet;



