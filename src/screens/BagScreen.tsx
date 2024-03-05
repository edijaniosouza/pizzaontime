import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

// @ts-ignore
function BagScreen({ route, navigation }): React.JSX.Element {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={bagScreenStyle.headerClean}>Limpar</Text>
      )
    });
  }, [route]);


  return (
    <SafeAreaView style={bagScreenStyle.container}>

      <View style={{ padding: 10 }}>

        <Text style={bagScreenStyle.subtitle}>Itens adicionados</Text>
        <Divider bold={true} style={{ backgroundColor: "#000" }} />

        <TouchableOpacity style={bagScreenStyle.card}>
          <Image style={bagScreenStyle.cardImage} source={require("../images/logo_pizza_on_time.png")} />
          <View style={bagScreenStyle.cardTextContainer}>
            <Text style={bagScreenStyle.cardTextItemName}>
              Pizza 8 pedaços
            </Text>
            <Text style={bagScreenStyle.cardTextItemFlavor}>
              Calabresa
            </Text>
            <Text style={bagScreenStyle.cardTextItemPrice}>
              R$ 40,99
            </Text>
          </View>

          <View style={bagScreenStyle.cardQuantityContainer}>
            <TouchableOpacity style={bagScreenStyle.cardQuantityTextContainer}>
              <Text style={bagScreenStyle.cardQuantityText}>+</Text>
            </TouchableOpacity>
            <Text style={bagScreenStyle.cardQuantityText}>1</Text>
            <TouchableOpacity style={bagScreenStyle.cardQuantityTextContainer}>
              <Text style={bagScreenStyle.cardQuantityText}>-</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <Text style={bagScreenStyle.moreProductsText} onPress={() => {
          navigation.navigate("Menu");
        }}>Adicionar mais produtos</Text>
        <Text style={bagScreenStyle.subtitle}>Entrega</Text>

        <View style={bagScreenStyle.deliveryContainer}>
          <View>
            {/*<Text style={bagScreenStyle.deliveryPlaceName}>Casa</Text>*/}
            <Text style={bagScreenStyle.deliveryText}>Avenida Escola Politécnica, 2200 - Apto 53F</Text>
            <Text style={bagScreenStyle.deliveryText}>Rio Pequeno, São Paulo - SP </Text>
          </View>

          <AntDesign name={"edit"} style={{ color: "black", fontSize: 32 }} />
        </View>

      </View>
      <View style={bagScreenStyle.priceInfoContainer}>
        <View style={bagScreenStyle.priceInfoTextContainer}>
          <Text style={bagScreenStyle.priceInfotext}>Produtos</Text>
          <Text style={bagScreenStyle.priceInfotext}>R$ 81,00</Text>
        </View>
        <View style={bagScreenStyle.priceInfoTextContainer}>
          <Text style={bagScreenStyle.priceInfotext}>Taxa de entrega</Text>
          <Text style={bagScreenStyle.priceInfotext}>R$ 9,00</Text>
        </View>
        <View style={bagScreenStyle.priceInfoTextContainer}>
          <Text style={bagScreenStyle.priceInfoTextTotal}>Total a pagar</Text>
          <Text style={bagScreenStyle.priceInfoTextTotal}>R$ 90,00</Text>
        </View>

        <TouchableOpacity style={bagScreenStyle.btnContainer} onPress={() => {
          navigation.navigate("PaymentScreen");
        }}>
          <Text style={bagScreenStyle.btnText}>SELECIONAR FORMA DE PAGAMENTO</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const bagScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: "#FFE0965F",
    flex: 1,
    justifyContent: "space-between"
  },
  headerClean: {
    color: "#C83F3B"
  },
  subtitle: {
    color: "#C83F3B",
    fontSize: 24
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C83F3B",
    marginVertical: 10,
    height: 100,
    borderRadius: 10,
    elevation: 1
  },
  cardImage: {
    flex: 2,
    aspectRatio: 1,
    marginHorizontal: 10
  },
  cardTextContainer: {
    flex: 5
  },
  cardTextItemName: {
    color: "#FFF",
    fontWeight: "bold"
  },
  cardTextItemFlavor: {
    color: "#FFF"
  },
  cardTextItemPrice: {
    color: "#FFF",
    fontWeight: "500"
  },
  cardQuantityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardQuantityTextContainer: {
    aspectRatio: 1, alignItems: "center", backgroundColor: "rgba(255,255,255,0.25)"
  },
  cardQuantityText: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 16,
    margin: 2
  },
  moreProductsText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#881111",
    alignSelf: "center",
    margin: 10
  },
  deliveryContainer: {
    backgroundColor: "rgba(255,255,255,0.39)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginVertical: 15
  },
  deliveryPlaceName: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16
  },
  deliveryText: {
    color: "#000",
    fontSize: 14
  },
  priceInfoContainer: {
    flexDirection: "column",
    backgroundColor: "#A52B0510",
    borderRadius: 10,
    padding: 10
  },
  priceInfoTextContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-between"
  },
  priceInfotext: {
    color: "#000",
    fontSize: 14
  },
  priceInfoTextTotal: {
    color: "#4F2020",
    fontWeight: "bold",
    fontSize: 16
  },
  btnContainer: {
    backgroundColor: "#CA5252",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    margin: 10
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold"
  }
});

export default BagScreen;
