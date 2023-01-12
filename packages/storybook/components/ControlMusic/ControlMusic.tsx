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
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
	
}

export const ControlMusic : React.FC<ControlMusicProps> = (props) => {
    const { paused,  onPressPlay, onPressPause,
      onBack,
      onForward,
      onPressShuffle,
      onPressRepeat,
      forwardDisabled,} = props;

    return (
      <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <Entypo name="shuffle" size={24} color="white" />
      </TouchableOpacity>
      <View style={{width: 40}} />
      <TouchableOpacity onPress={onBack}>
        <AntDesign name="stepbackward" size={24} color="white" />
      </TouchableOpacity>
      <View style={{width: 20}} />
      {!paused ?
        <TouchableOpacity onPress={onPressPause}>
          <View style={styles.playButton}>
            <AntDesign name="pause" size={40} color="white" />
          </View>
        </TouchableOpacity> :
        <TouchableOpacity onPress={onPressPlay}>
          <View style={styles.playButton}>
          <AntDesign name="play" size={24} color="white" />
          </View>
        </TouchableOpacity>
      }
      <View style={{width: 20}} />
      <TouchableOpacity onPress={onForward}
        disabled={forwardDisabled}>
       <AntDesign name="stepforward" size={24} color="white" />
      </TouchableOpacity>
      <View style={{width: 40}} />
      <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
        <Feather name="repeat" size={24} color="white" />
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
