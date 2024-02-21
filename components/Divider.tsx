import { StyleSheet, View } from "react-native";
import React from "react";

export function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    marginHorizontal: 10
  }
})
