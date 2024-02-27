import { StyleProp, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

type ButtonsProps = {
  children?: ReactNode,
  style: StyleProp<any>;
  onPress: () => void;
};

export const Button: React.FC<ButtonsProps> = ({ children, style, onPress }) =>  {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}>
      {children && (children)}
    </TouchableOpacity>
  );
}
