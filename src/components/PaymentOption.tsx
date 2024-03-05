import { ColorValue, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";

type PaymentOptions = {
  icon: string,
  iconColor: ColorValue,
  text: string,
  selected?: string,
  setChecked?: () => void
}
export const PaymentOption: React.FC<PaymentOptions> = ({ icon, iconColor, text, selected, setChecked }) => {
  return (
    <Pressable
      style={text === selected ? [styles.paymentMethodContainer, styles.paymentMethodContainerBorder] : styles.paymentMethodContainer}
      onPress={setChecked}
    >
      <FontAwesome6Icon name={icon} size={34} color={iconColor} />
      <Text style={styles.paymentMethodtext}>{text}</Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  paymentMethodContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "rgba(255,255,255,0.39)",
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    borderRadius: 5
  },
  paymentMethodContainerBorder: {
    borderColor: "red",
    borderWidth: 1
  },
  paymentMethodtext: {
    color: "#000",
    marginStart: 10,
    fontWeight: "400"
  }
})
