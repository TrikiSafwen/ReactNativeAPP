import { StyleSheet } from "react-native";
import React from "react";
import {MyButton}  from "@my-workspace/my-ui";
import { IITImage } from "@my-workspace/my-ui";
import { Album } from "@my-workspace/my-ui";
import { Header } from "@my-workspace/my-ui";
import { NavigationContainer } from '@react-navigation/native';
import { ListMusic } from "@my-workspace/my-ui";
import { Test } from "@my-workspace/my-ui";
import { ControlMusic } from "@my-workspace/my-ui";
import { TrackDetails } from "@my-workspace/my-ui";
import { SeekBar } from "@my-workspace/my-ui";
import {SliderMusic} from "@my-workspace/my-ui";
import {  View } from 'react-native'
import { Control }  from "@my-workspace/my-ui";
import { PlayButton }  from "@my-workspace/my-ui";
import { RoundButton } from "@my-workspace/my-ui";
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

import LottieView from 'lottie-react-native';

import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";



const MusicPlayerAPP = ({ navigation }) => {
  return (
    <View style={styles.container} >
    <ApplicationProvider {...eva} theme={eva.light} >
    <Header
  message="Now Playing"
  onQueuePress={() => navigation.navigate('Home')}

/>
      <Album
      url ="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80"
      />
      <TrackDetails
      title= "Safwen"
      artiste= "POP Music 2023 explicit"
      />
      
    
      
      <ControlMusic
      iconp={<AntDesign name="pause" size={36} color="white" />}
      iconbb={<AntDesign name="play" size={24} color="white" />}
      iconb={<AntDesign name="pause" size={24} color="white" />}
      iconf={<AntDesign name="pause" size={24} color="white" />}
      iconff={<AntDesign name="pause" size={24} color="white" />}
      />
     
    
    </ApplicationProvider>
    </View>
  );
};

export default MusicPlayerAPP 

const styles = StyleSheet.create({ container: {
  flex: 1,
  backgroundColor: 'rgb(4,4,4)',
}});
