import { StyleSheet } from "react-native";
import React from "react";
import { MyButton } from "@my-workspace/my-ui";
import { IITImage } from "@my-workspace/my-ui";

import { SliderMusic } from "@my-workspace/my-ui";
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
    <ApplicationProvider {...eva} theme={eva.light}>

      
      <MyButton
        bgColor="black"
        onPress={() => { }}
        text="MusicApp"
        textColor="white"
      />
      
      <IITImage></IITImage>
     
      <RoundButton></RoundButton>
     
      
      <MyButton
        bgColor="black"
        onPress={() => { }}
        text="MusicApp"
        textColor="white"
      />
      <Text>
        hello
      </Text>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
