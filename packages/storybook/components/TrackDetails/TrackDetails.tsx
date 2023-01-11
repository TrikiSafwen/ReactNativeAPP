import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { AntDesign, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

type TrackProps = {
    title  : string,
    artiste  : string,
    onAddPress: () => void,
    onMorePress: () => void,
    onTitlePress: () => void,
    onArtistPress: () => void,
   
	
}

export const TrackDetails : React.FC<TrackProps> = (props) => {
    const { title, artiste, onAddPress, onMorePress, onArtistPress, onTitlePress  } = props;

    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={onAddPress}>
      <Ionicons name="add-circle" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.detailsWrapper}>
        <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
        <Text style={styles.artist} onPress={onArtistPress}>{artiste}</Text>
      </View>
      <TouchableOpacity onPress={onMorePress}>
        <View style={styles.moreButton}>
        <MaterialIcons name="more" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
    )
}




const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  artist: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    opacity: 0.72,
  },
  moreButton: {
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIcon: {
    height: 17,
    width: 17,
  }
});