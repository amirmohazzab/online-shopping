import React, {useState} from 'react';
import { View } from 'react-native';
import {Header} from 'react-native-elements'
import {Icon, FAB} from '@rneui/themed';
import ShoppingCartIcon from '../ShoppingCartIcon';
import CostumButton from '../CostumButton';


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
                    <CostumButton 
                        title="Electronics" 
                        screen="Electronics" 
                        name="electrical-services" 
                        type="material-icon" 
                        backgroundColor="red"
                    />
                    <CostumButton 
                        title="Books" 
                        screen="Books" 
                        name="book" 
                        type="entypo" 
                        backgroundColor="green"
                    />
                    <CostumButton 
                        title="Stationary" 
                        screen="Stationary" 
                        name="pen-tool" 
                        type="feather" 
                        backgroundColor="orange"
                    />
                    <CostumButton 
                        title="Tablet" 
                        screen="Tablet" 
                        name="tablet" 
                        type="entypo" 
                        backgroundColor="skyblue"
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