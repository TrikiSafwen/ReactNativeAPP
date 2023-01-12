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

type AlbumProps = {
    url  : string,
    onPress: () => void,
    
	
}

export const Album : React.FC<AlbumProps> = (props) => {
    const {onPress, url} = props;

    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.image}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Adele_for_Vogue_in_2021.png'}}
        />
      </TouchableOpacity>
    </View>
    )
}




const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
})