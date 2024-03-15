import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { OrderCard } from "../components/OrderCard.tsx";
import { STATUS, bagList, productIntheOrder } from "../helpers/dataHelper.tsx";

function OrderScreen(): React.JSX.Element {
  const [order, setOrder] = useState<productIntheOrder>()

  const randomNumber: () => string = () => {
    return (Math.random() * 10).toFixed(0)
  }
  useEffect(() => {

    /*
      const sum = totalList.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue, initialValue
    );
    */

    // const da : []= bagList.map((productInTheBag) => ({
    //   value: productInTheBag.price
    // }))

    // const initialValue = 0
    // const a = da.reduce(
    //   (accumulator: number, currentValue: number) => accumulator + currentValue, initialValue
    //   )


    if (bagList.length != 0) {
      const a = bagList
      const newOrder = {
        "productList": a,
        "status": STATUS[0],
        "orderId": randomNumber(),
        "date": "13/01/24",
        "time": "18:03",
        "priceTotal": 15,
      }
      setOrder(newOrder)

      // bagList.splice(0, bagList.length)
    }

  }, [])



  return (
    <SafeAreaView style={styles.container}>
      {
        order ?
          <OrderCard
            orderData={order}
          />
          : <View></View>
      }

      <Text style={styles.textTopic}>Histórico</Text>
      <View style={styles.divider}></View>

      {    /*
    export type productIntheOrder = {
      productList: ProductInTheBag[],
      status: string,
      orderId: number,
      dateTime: string,
    }

    --- 

      image?: ImageURISource,
      name: string,
      flavor: string,
      price?: number,
      quantity: number,
    */}

      <OrderCard
        orderData={{
          productList: [{
            name: "Pizza 8 pedaços",
            flavor: "Mussarela",
            quantity: 1,
            image: {uri: ""},
            price: 43
          }],
          status: STATUS[4],
          orderId: "84",
          date: "13/02/23",
          time: "19:03",
          priceTotal: 49.29
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE0965F"
  },
  // FFE096 - amarelo
  // C83F3B - vermelho
  // #FF902C - laranja cheddar
  textTopic: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    margin: 16
  },
  divider: {
    borderWidth: 1,
    marginHorizontal: 15,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "black"
  },
  cardHistory: {
    backgroundColor: "#FFE096",
    height: 100,
    marginTop: 10,
    marginHorizontal: 10,
    padding: 3
  },
  cardTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20
  },
  cardContentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  cardContent: {
    alignSelf: "center",
    marginHorizontal: 20,
    marginTop: 10,
    color: "black",
    fontSize: 15,
    fontWeight: "500",
  },
  cardInProgress: {
    backgroundColor: "#C83F3B",
    height: 100,
    marginTop: 10,
    marginHorizontal: 10,
    padding: 3,
  },
  cardContentTitleInProgress: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  cardContentInProgress: {
    alignSelf: "center",
    marginHorizontal: 20,
    marginTop: 10,
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default OrderScreen;
