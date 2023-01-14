import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft:"38%",
    marginTop:70,
    height:44,
    paddingHorizontal: 10,
    paddingVertical: 8,
   
    alignContent:"center",
    width:100,
   
    
  },
  text: { color: "white", textAlign: "center" },
});
