import React from "react";
import { Image, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { styleMenuItemScreen } from "../style/style.tsx";

type OptionsItemsProps = {
  value: string;
  image?: string
  checked: string;
  setChecked: () => any;
  itemName: string;
};

export const OptionsItems : React.FC<OptionsItemsProps> = ({ value, image, checked, setChecked, itemName }) => {
  return (
    <View style={styleMenuItemScreen.itemOptions}>

      {image && (<Image src={image} />)}

      <Text style={styleMenuItemScreen.itemOptionsText}>{itemName}</Text>
      <RadioButton
        value={value}
        status={checked === value ? 'checked' : 'unchecked'}
        onPress={setChecked}
        color={'black'}
      />
    </View>
  );
}
