import React from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {SliderProps} from '@react-native-community/slider';



export const Sliders: React.FC = (props: SliderProps) =>{
  const [value, setValue] = useState(props.value ?? 0);
  return (
    <View>
      <Text style={styles.text}>{value && +value.toFixed(3)}</Text>
      <Slider
    style={styles.slider}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
    thumbTintColor='#F3006B'
    
/>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    opacity: 1,
    height: 50,
    marginTop: 10,
  },
  text: {
    
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 0,
  },
});
