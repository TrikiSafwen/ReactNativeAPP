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
    marginLeft:'38%',
    marginTop:10,
    backgroundColor: "white",
    width:101,
    height:44,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    display:"flex",
    borderRadius:30,
  },
  text: { color: "black", textAlign: "center" },
});
