import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

type PlayButtonProps = {
    backgroundColor: string
    icon: React.ReactNode,
    onClickButton : () => void 
     
}

export const PlayButton: React.FC<PlayButtonProps> = (props) => {
    const { backgroundColor, icon , onClickButton} = props;


  //  const OnPressButton = () => {
    //    onClickButton()
   // }
    return (
        <View>
            
            <TouchableOpacity style={[styles.roundButton]}
           // onPress = {OnPressButton}
            >
            <View style={{flex : 1 , backgroundColor : "white"}}>
             {icon} </View>
             <AntDesign name="play" size={24} color="red" />
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
roundButton : {
    icon :  <AntDesign name="play" size={24} color="white" />,
    backgroundColor : 'red',
    width: 100,
    height: 100, 
    borderRadius : 100, 
    justifyContent : 'center',
    alignItems : 'center'
}


})