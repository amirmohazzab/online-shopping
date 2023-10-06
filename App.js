import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import ShoppingCart from './app/components/ShoppingCart';


const App = () => {
    return ( 
        <NavigationContainer>
            <ShoppingCart />
        </NavigationContainer>
     );
}
 
export default App;