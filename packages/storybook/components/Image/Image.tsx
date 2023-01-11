import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

type IITImageProps = {
	
	title: string
	description: string
    image: string
	button:string

}

export const IITImage: React.FC<IITImageProps> = (props) => {
	const { title, description, image, button  } = props

	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
             <Image style={{ width: "100%" , height: 600, borderRadius: 50 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Adele_for_Vogue_in_2021.png' }} />
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 32,
		
		textAlign: "center"
	},
	image:{
		flex: 1, justifyContent: 'center' ,

	},
	description:{
		fontSize: 32,
		
		
		

	}
})