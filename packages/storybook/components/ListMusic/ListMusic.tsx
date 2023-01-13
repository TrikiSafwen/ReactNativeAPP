import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
    color:'white'
  },
  row: {
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
});



export const ListMusic = (navigation) => {

  function onPress (){
 
   navigation.navigate('Home')
    
  }
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'ALBUM : Triki Safwen', data: ['House Di Track', 'Rap2001-Video Orignale', 'Best 2022 songs']},
          {
            title: 'ALBUM : Ouled Ali Mohamed',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) =>  (
          <View style={styles.row}>
            <Feather name="music" size={24} color="white" />
            <Text onPress={onPress} style={styles.item}>{item}</Text>
            <Feather name="play" size={24} color="white" />
          </View>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

