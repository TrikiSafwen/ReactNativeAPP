import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
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
      
      <ImageBackground style={styles.image}
        source={{ uri: url }}
        
      ></ImageBackground>
  
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