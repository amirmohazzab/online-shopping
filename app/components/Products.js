import React from 'react'
import { View } from 'react-native';
import {Button, ListItem, List, Text} from 'react-native-elements'


const Products = ({products}) => {

    const renderProducts = products => {
        return products.map((item, index) => {
            return (
                <ListItem key={index}>
                    <Button onPress={() => onPress(item)}>
                        <Text style={{fontSize: 30}}>{`${item.name} - ${item.price} Euro`}</Text>
                    </Button>
                </ListItem>
            )
        })
    };

    return ( 
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <List>{renderProducts(products)}</List>
            </View>
    );
};
 
export default Products;