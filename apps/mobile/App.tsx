import { StyleSheet } from "react-native";
import React from "react";
import { MyButton } from "@my-workspace/my-ui";
import { IITImage } from "@my-workspace/my-ui";
import { Album } from "@my-workspace/my-ui";
import { Header } from "@my-workspace/my-ui";
import { Test } from "@my-workspace/my-ui";
import { ControlMusic } from "@my-workspace/my-ui";
import { TrackDetails } from "@my-workspace/my-ui";

import {SliderMusic} from "@my-workspace/my-ui";
import {  View } from 'react-native'
import { Control }  from "@my-workspace/my-ui";
import { PlayButton }  from "@my-workspace/my-ui";
import { RoundButton } from "@my-workspace/my-ui";
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

import LottieView from 'lottie-react-native';

import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import LottieViewComponent from "./screens/LottieViewComponent";


const App = () => {
  return (
    <View style={styles.container} >
    <ApplicationProvider {...eva} theme={eva.light} >
      <Header
         message="NOW PLAYING"
      />
      <Album></Album>
      <TrackDetails
      title= "Safwen"
      artiste= "Safwen"
      />

        <SliderMusic></SliderMusic>
      
      <ControlMusic></ControlMusic>
    
      
    </ApplicationProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({ container: {
  flex: 1,
  backgroundColor: 'rgb(4,4,4)',
}});
