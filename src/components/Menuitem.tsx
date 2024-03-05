import React from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styleMenuItem } from "../style/style.tsx";

type MenuItemProps = {
  title: string;
  description?: string;
  image?: string;
  navigation: () => any;
  price?: string
};
export function MenuItem(props: MenuItemProps): React.JSX.Element {
  return (
    <TouchableOpacity style={styleMenuItem.menuItem} onPress={props.navigation}>
      <View style={{ flex: 3 }}>
        <Text style={styleMenuItem.title}>{props.title}</Text>
        <Text
          style={styleMenuItem.description}
          numberOfLines={2}
          lineBreakMode={"clip"}>
          {props.description}{" "}
        </Text>
      </View>

      <Image source={{ uri: props.image }} style={styleMenuItem.image} />
    </TouchableOpacity>
  );
}
