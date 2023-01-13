import { StyleSheet } from "react-native";
import React from "react";
import MusicPlayerAPP from "./screens/MusicPlayerAPP";
import {ListMusic} from "./screens/ListMusicAPP";
import {MyButton}  from "@my-workspace/my-ui";
import { IITImage } from "@my-workspace/my-ui";
import { Album } from "@my-workspace/my-ui";
import { Header } from "@my-workspace/my-ui";
import { NavigationContainer } from '@react-navigation/native';

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
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import LottieViewComponent from "./screens/LottieViewComponent";


const App = () => {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container} >
    <ApplicationProvider {...eva} theme={eva.light} >
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={MusicPlayerAPP}></Stack.Screen>
         
          <Stack.Screen name="ListMusic" component={ListMusic}></Stack.Screen>
          
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({ container: {
  flex: 1,
  backgroundColor: 'rgb(4,4,4)',
}});
