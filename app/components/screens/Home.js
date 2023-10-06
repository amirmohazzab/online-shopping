import React, {useState} from 'react'
import { View } from 'react-native';
import {Header, Button, Icon} from 'react-native-elements'
import ShoppingCartIcon from '../ShoppingCartIcon';
import { MaterialIcons } from '@expo/vector-icons';
import { FAB } from '@rneui/themed';

const Home = ({navigation}) => {

    const [active, setActive] = useState(true);

    return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Header
                centerComponent={{ text: 'Online Shopping', style: { color: '#000', fontSize: 20, fontWeight: "bold" } }}
                rightComponent={<ShoppingCartIcon />}
                containerStyle={{
                    backgroundColor: 'lightgray',
                }}
            />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Button
                    title="Electronics"
                    titleStyle={{fontWeight: "bold", color: "#fff", fontSize: 20}}
                    onPress={() => navigation.navigate('Electronics')}
                    icon={{name: "electrical-services", type: "material-icon", size: 35, color: 'white'}}
                    iconRight
                    iconContainerStyle={{ marginLeft: 10 }}
                    buttonStyle={{backgroundColor: "red", borderRadius: 30, padding: 15}}
                    containerStyle={{width: 300, marginHorizontal: 50, marginVertical: 10}}
                />
                <Button
                    title="Book"
                    titleStyle={{fontWeight: "bold", color: "#fff", fontSize: 20}}
                    onPress={() => navigation.navigate('Books')}
                    icon={{name: "book", type: "entypo", size: 35, color: 'white'}}
                    iconRight
                    iconContainerStyle={{ marginLeft: 10 }}
                    buttonStyle={{backgroundColor: "green", borderRadius: 30, padding: 15}}
                    containerStyle={{width: 300, marginHorizontal: 50, marginVertical: 10}}
                />
                <Button
                    title="Stationary"
                    titleStyle={{fontWeight: "bold", color: "#fff", fontSize: 20}}
                    onPress={() => navigation.navigate('Stationary')}
                    icon={{name: "pen-tool", type: "feather", size: 35, color: 'white'}}
                    iconRight
                    iconContainerStyle={{ marginLeft: 10 }}
                    buttonStyle={{backgroundColor: "orange", borderRadius: 30, padding: 15}}
                    containerStyle={{width: 300, marginHorizontal: 50, marginVertical: 10}}
                />
                <Button
                    title="Tablet"
                    titleStyle={{fontWeight: "bold", color: "#fff", fontSize: 20}}
                    onPress={() => navigation.navigate('Tablet')}
                    icon={{name: "tablet", type: "entypo", size: 35, color: 'white'}}
                    iconRight
                    iconContainerStyle={{ marginLeft: 10 }}
                    buttonStyle={{backgroundColor: "skyblue", borderRadius: 30, padding: 15}}
                    containerStyle={{width: 300, marginHorizontal: 50, marginVertical: 10}}
                />
            </View>
            <View>
                <FAB
                    visible={active}
                    onPress={() => navigation.navigate('Cart')}
                    placement="left"
                    icon={{ name: 'shopping-cart', color: 'black' }}
                    color="lightgray"
                />
                <FAB
                    active={!active}
                    onPress={() => setActive(!active)}
                    placement="right"
                    color="skyblue"
                >  
                    <Icon type='font-awesome' name='share' color="white" />
                </FAB>
            </View>
        </View>
        

     );
};
 
export default Home;