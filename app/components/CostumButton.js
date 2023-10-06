import React from 'react'
import {Button} from 'react-native-elements'


const CostumButton = ({title, backgroundColor, name, type}) => {
  return ( 
            <Button
              title={title}
              titleStyle={{fontWeight: "bold", color: "#fff", fontSize: 20}}
              icon={{
                name: name,
                type: type,
                size: 35,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              buttonStyle={{
                backgroundColor: backgroundColor,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
                padding: 15
              }}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
   );
}
 
export default CostumButton;


            