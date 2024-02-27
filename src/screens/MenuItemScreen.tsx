import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, Text } from "react-native";
import { OptionsItems } from "../components/OptionsItems.tsx";
import { styleMenuItemScreen, styleMenuScreen } from "../style/style.tsx";
import { Button } from "../components/Button.tsx";
import { getProductOptions } from "../api/ProductsRepository.tsx";

// @ts-ignore

function MenuItemScreen({ route, navigation }): React.JSX.Element {
  const { id, title, image, description } = route.params;
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    navigation.setOptions({
      title: title
    });

    getProductOptions(id).then((data) => {
      if (data["error"]) console.warn(data["error"]); else setData(data["data"]);
    });
  }, []);

  const [checked, setChecked] = useState("first");

  // @ts-ignore
  return (
    <SafeAreaView style={styleMenuItemScreen.container}>
      <Image
        source={image}
        style={{
          width: "100%",
          padding: 5,
          height: 400
        }}
        resizeMethod={"scale"}
      />

      <Text style={styleMenuItemScreen.text}>{description}</Text>
      <Text style={styleMenuItemScreen.textSubtitle}>Sabores</Text>

      <FlatList data={data} renderItem={({ item, index }) =>
        <OptionsItems
          value={item.id}
          checked={checked}
          setChecked={() => setChecked(item.id)}
          itemName={item.name}
        />
      } />

      <Button style={styleMenuItemScreen.btnAdd} onPress={() => {
      }}>
        <Text style={styleMenuItemScreen.btnAddText}>Adicionar à sacola</Text>
      </Button>

    </SafeAreaView>
  );
}


export default MenuItemScreen;
