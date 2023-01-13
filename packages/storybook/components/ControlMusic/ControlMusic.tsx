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
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  
	
}

export const ControlMusic : React.FC<ControlMusicProps> = (props) => {
    const { iconb,iconbb,iconp,iconf,iconff ,onPressPlay, onPressPause,
      onBack,
      onForward,
      onPressShuffle,
      onPressRepeat,
      } = props;

    return (
      <View style={styles.container}>
        
      <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      {iconbb}
      </TouchableOpacity>
      <View style={{width: 40}} />
      <TouchableOpacity onPress={onBack}>
      {iconb}
      </TouchableOpacity>
      <View style={{width: 20}} />
        <TouchableOpacity onPress={onPressPause}>
          <View style={styles.playButton}>
            {iconp}
          </View>
        </TouchableOpacity> 
        
        <View style={{width: 20}} />
      <TouchableOpacity style={{width: 20}} onPress={onForward}
        >{iconf}
       
      </TouchableOpacity>
      <View style={{width: 40}} />
      <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
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
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 2,
    borderColor: 'white',
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
