import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { OptionsItems } from "../components/OptionsItems.tsx";
import { styleMenuItemScreen } from "../style/style.tsx";
import { Button } from "../components/Button.tsx";

// @ts-ignore
function MenuItemScreen({ route, navigation }): React.JSX.Element {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    navigation.setOptions({
      title: item.name
    });
  }, []);

  const [checked, setChecked] = useState("");

  return (
    <SafeAreaView style={styleMenuItemScreen.container}>

      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: Dimensions.get("screen").width,
            aspectRatio: 1,
            padding: 5
          }}
          resizeMethod={"scale"}
        />

        <Text style={styleMenuItemScreen.text}>{item.description}</Text>

        <Text style={styleMenuItemScreen.textSubtitle}>Opções</Text>
        <FlatList data={item.flavors} renderItem={({ item }) =>
          <OptionsItems
            value={item.id}
            checked={checked}
            setChecked={() => setChecked(item.id)}
            itemName={item.name}
            price={item.price}
          />
        } />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", flex: 1 }}>
          <Button style={style.btnQuantity} onPress={() => {
            setQuantity(quantity - 1);
          }}>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>-</Text>
          </Button>
          <Text style={{ color: "black", fontWeight: "bold" }}>
            {quantity}
          </Text>
          <Button style={style.btnQuantity} onPress={() => {
            setQuantity(quantity + 1);
          }}>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>+</Text>
          </Button>
        </View>

        <Button style={styleMenuItemScreen.btnAdd} onPress={() => {
          navigation.navigate("BagScreen",{
            item: item,
            itemFlavorId: checked,
            quantity: quantity
          })
        }}>
          <Text style={styleMenuItemScreen.btnAddText}>Adicionar pedido</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  btnQuantity: {
    borderWidth: 1,
    borderColor: "rgba(200,63,59,0.69)",
    width: 24,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#C83F3B"
  }
});

export default MenuItemScreen;
