import React from 'react'
import {Button} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';


const CostumButton = ({title, screen, name, type, backgroundColor}) => {

  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const screenWidth = 0.9*width;

  return ( 
            <Button
              title={title}
              titleStyle={{fontWeight: "bold", color: "#fff", fontSize: 20}}
              onPress={() => navigation.navigate(`${screen}`)}
              icon={{name: name, type: type, size: 35, color: 'white'}}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              buttonStyle={{backgroundColor: backgroundColor, borderRadius: 30, padding: 15}}
              containerStyle={{width: screenWidth, marginHorizontal: 50, marginVertical: 10}}
            />
   );
}
 
export default CostumButton;


            