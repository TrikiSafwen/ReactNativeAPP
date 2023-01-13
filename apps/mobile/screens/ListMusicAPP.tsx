import React from 'react';
import {SectionList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'black',

  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    color:'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderWidth:1,
    borderColor:'#F3006B'
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
  function onPress () {
    console.log("en") 
    return () => navigation.navigate('Welcome')     
  }
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'ALBUM 1 : Triki Safwen', data: ['House Di Track', 'Rap2001-Video Orignale', 'Best 2022 songs']},
          {
            title: 'ALBUM 2 : Ouled Ali Mohamed',
            data: [
              'Track 1',
              'Track 2',
              'Track 3',
              'Track 4',
              'Track 5',
              'Track 6',
              'Track 7',
            ],
          },
          {
            title: 'ALBUM 3 : Mme Amina',
            data: [
              'Track 11',
              'Track 12',
              'Track 13',
              'Track 14',
              'Track 15',
              'Track 16',
              'Track 17',
            ],
          },
        ]}
        renderItem={({item}) =>  (
          <View style={styles.row}>
            <Feather name="music" size={24} color="#F3006B" />
            <TouchableOpacity onPress={onPress}>
            <Text  style={styles.item}>{item}</Text>
            </TouchableOpacity>
            <Feather name="play" size={24} color="#F3006B" />
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

