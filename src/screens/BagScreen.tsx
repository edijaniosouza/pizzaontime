import {
  FlatList,
  Image,
  ImageURISource,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Divider } from "react-native-paper";
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ProductInTheBag, bagList } from "../helpers/dataHelper.tsx";
import { BagItemCard } from "../components/BagItemCard.tsx";



function BagScreen({ route, navigation }: any): React.JSX.Element {
  const [total, setTotal] = useState<any>(0);
  const totalList: any = [];
  const [bagListLocal, setBag] = useState<ProductInTheBag[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={() => {
          setBag([]);
          bagList.splice(0, bagList.length);
        }} style={bagScreenStyle.headerClean}>Limpar</Text>
      )
    });
  }, [route]);

  useEffect(() => {
    setBag(bagList);
  }, [bagList]);


  useEffect(() => {
    const initialValue = 0;
    const sum = totalList.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue, initialValue
    );
    setTotal(sum.toFixed(2));
  }, [totalList]);

  return (
    <SafeAreaView style={bagScreenStyle.container}>
      {
        bagListLocal.length !== 0 ?
          <View style={{ flex: 1, padding: 10 }}>

            <FlatList
              data={bagListLocal}
              style={{ flex: 1 }}
              renderItem={({ item: product, index: index }) =>
                <BagItemCard
                  productInTheBag={
                    {
                      // @ts-ignore
                      image: { uri: product.image },
                      name: product.name,
                      flavor: product.flavor,
                      price: product.price,
                      quantity: product.quantity
                    }
                  } />
              }
              ListHeaderComponent={
                <View>
                  <Text style={bagScreenStyle.subtitle}>Itens adicionados</Text>
                  <Divider bold={true} style={{ backgroundColor: "#000" }} />
                </View>
              }
              contentContainerStyle={{ flexGrow: 1 }}
              ListFooterComponentStyle={{ flex: 1 }}
              ListFooterComponent={
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                  <View>
                    <Text style={bagScreenStyle.moreProductsText} onPress={() => {
                      navigation.navigate("Menu");
                    }}>Adicionar mais produtos</Text>
                    <Text style={bagScreenStyle.subtitle}>Entrega</Text>

                    <View style={bagScreenStyle.deliveryContainer}>
                      <View>
                        <Text style={bagScreenStyle.deliveryText}>Avenida Escola Politécnica, 2200 - Apto 53F</Text>
                        <Text style={bagScreenStyle.deliveryText}>Rio Pequeno, São Paulo - SP </Text>
                      </View>

                      <AntDesign name={"edit"} style={{ color: "black", fontSize: 32 }} />
                    </View>
                  </View>

                  <View style={bagScreenStyle.priceInfoContainer}>
                    <View style={bagScreenStyle.priceInfoTextContainer}>
                      <Text style={bagScreenStyle.priceInfotext}>Produtos</Text>
                      <Text style={bagScreenStyle.priceInfotext}>R$ {total}</Text>
                    </View>
                    <View style={bagScreenStyle.priceInfoTextContainer}>
                      <Text style={bagScreenStyle.priceInfotext}>Taxa de entrega</Text>
                      <Text style={bagScreenStyle.priceInfotext}>R$ 9,00</Text>
                    </View>
                    <View style={bagScreenStyle.priceInfoTextContainer}>
                      <Text style={bagScreenStyle.priceInfoTextTotal}>Total a pagar</Text>
                      <Text style={bagScreenStyle.priceInfoTextTotal}>R$ {parseFloat(total) + 9}</Text>
                    </View>

                    <TouchableOpacity style={bagScreenStyle.btnContainer} onPress={() => {
                      navigation.navigate("PaymentScreen");
                    }}>
                      <Text style={bagScreenStyle.btnText}>SELECIONAR FORMA DE PAGAMENTO</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              }
            />
          </View> :
          <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text style={{ color: "#000" }}> Ainda não há produtos em seu carrinho</Text>
            <Text style={bagScreenStyle.moreProductsText} onPress={() => {
              navigation.navigate("Menu");
            }}>Adicionar produtos</Text>
          </View>
      }
    </SafeAreaView>
  );
}

const bagScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: "#FFE0965F",
    flex: 1,
    justifyContent: "space-between",
  },
  headerClean: {
    color: "#C83F3B"
  },
  subtitle: {
    color: "#C83F3B",
    fontSize: 24
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
