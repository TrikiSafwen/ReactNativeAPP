import React from 'react';
import { View, Text , StyleSheet , Image , TouchableOpacity } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';

type HeadProps = {
    message  : string,
    onDownPress: () => void,
    onQueuePress: () => void,
    onMessagePress: () => void,
	
}

export const Header : React.FC<HeadProps> = (props) => {
    const { message, onDownPress, onQueuePress, onMessagePress } = props;

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onDownPress}>
               
                    <AntDesign name="caretdown" size={20} color="white" />
            </TouchableOpacity>
            <Text onPress={onMessagePress}
                style={styles.message}>{message}</Text>
            <TouchableOpacity onPress={onQueuePress}>
            <Entypo name="menu" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}




const styles = StyleSheet.create({
  container: {
  
    height: 60,
    paddingTop: 30,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    opacity: 0.72
  }
});