import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Electronics, Books, Stationary, Tablet, Cart}from './screens'


const Stack = createStackNavigator();


const ShoppingCart = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Electronics" component={Electronics} />
            <Stack.Screen name="Books" component={Books} />
            <Stack.Screen name="Stationary" component={Stationary} />
            <Stack.Screen name="Tablet" component={Tablet} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
};


export default ShoppingCart;


