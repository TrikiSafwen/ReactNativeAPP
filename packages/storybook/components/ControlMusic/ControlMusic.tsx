import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, Entypo, MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';

type ControlMusicProps = {
  iconbb : string;
  iconb : string;
  iconp : string;
  iconf : string;
  iconff : string;
  backgroundColor : string
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  
  
	
}

export const ControlMusic : React.FC<ControlMusicProps> = (props) => {
    const { backgroundColor, iconb,iconbb,iconp,iconf,iconff ,onPressPlay, onPressPause,
      onBack,
      onForward,
      onPressShuffle,
      onPressRepeat,
      } = props;

    return (
      <View style={styles.container}>
        
      <TouchableOpacity style={[styles.roundButton,{backgroundColor}]} activeOpacity={0.0} onPress={onPressShuffle}>
      {iconbb}
      </TouchableOpacity>
      <View style={{width: 40}} />
      <TouchableOpacity style={[styles.roundButton,{backgroundColor}]} onPress={onBack}>
      {iconb}
      </TouchableOpacity>
      <View style={{width: 20}} />
        <TouchableOpacity style={[styles.roundButton,{backgroundColor}]} onPress={onPressPause}>
          <View style={styles.playButton}>
            {iconp}
          </View>
        </TouchableOpacity> 
        
        <View style={{width: 20}} />
      <TouchableOpacity style={[styles.roundButton,{backgroundColor}]}  onPress={onForward}
        >{iconf}
       
      </TouchableOpacity>
      <View style={{width: 40}} />
      <TouchableOpacity style={[styles.roundButton,{backgroundColor}]} activeOpacity={0.0} onPress={onPressRepeat}>
      {iconff}
      </TouchableOpacity>
    </View>
)}




const styles = StyleSheet.create({
  container: {
   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  roundButton: {
		width: 45,
		height: 45,
		borderRadius: 100,
    backgroundColor:"orange",
    justifyContent: 'center',
    alignItems: 'center'
	},
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 3,
    borderColor: '#F3006B',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})
