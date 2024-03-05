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
  price: string;
};

export const OptionsItems: React.FC<OptionsItemsProps> = ({ value, image, checked, setChecked, itemName, price }) => {
  return (
    <View style={styleMenuItemScreen.itemOptions}>
      {image && (<Image src={image} />)}

      <RadioButton
        value={value}
        status={checked === value ? "checked" : "unchecked"}
        onPress={setChecked}
        color={"black"}
      />
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
        <Text style={styleMenuItemScreen.itemOptionsText}>{itemName}</Text>
        <Text style={styleMenuItemScreen.itemOptionsText}>R$ {parseFloat(price).toFixed(2)}</Text>
      </View>
    </View>
  );
};
