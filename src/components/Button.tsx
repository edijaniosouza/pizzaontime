import { StyleProp, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

type ButtonsProps = {
  children?: ReactNode,
  style?: StyleProp<any>;
  onPress?: () => void;
  disable?: boolean;
};

export const Button: React.FC<ButtonsProps> = ({ children, style, onPress, disable }) =>  {
  return (
    <TouchableOpacity
      disabled={disable}
      style={style}
      onPress={onPress}>
      {children && (children)}
    </TouchableOpacity>
  );
}
