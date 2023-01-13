import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';


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

export const ListMusic = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'Triki Safwen', data: ['House Di Track', 'Rap2001-Video Orignale', 'Best 2022 songs']},
          {
            title: 'Ouled Ali Mohamed',
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
            <Entypo name="music" size={24} color="white" />
            <Text style={styles.item}>{item}</Text>
            <AntDesign name="play" size={24} color="white" />
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

