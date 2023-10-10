import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import ShoppingCart from './app/components/ShoppingCart';
import {Provider} from 'react-redux'
import store from './app/store';


const App = () => {
    return ( 
        <NavigationContainer>
            <Provider store={store}> 
                <ShoppingCart />
            </Provider>
        </NavigationContainer>
     );
};
 
export default App;