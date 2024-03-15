import React, { useState, useEffect } from "react";
import { FlatList, StyleProp, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { ProductInTheBag, STATUS, productIntheOrder } from "../helpers/dataHelper";

type OrderCardProps = {
  orderData: productIntheOrder,
}


export const OrderCard: React.FC<OrderCardProps> = ({ orderData }) => {
  const [status, setStatus] = useState(false)

  const textColor = (status: boolean) => {
    return status ? "#000" : "#FFF"
  }
  var textColorChange = textColor(status)
 
  useEffect(() => {
    // Se nao tiver concluido o fluxo de entrega, continua falso
    if(orderData.status != STATUS[4]){
      setStatus(false)}
    else {
      setStatus(true)
    }
  }, [orderData.status])

  return (
    <View style={status ? [styles.container, {backgroundColor: "#FFE096"}] : styles.container}>
      <View style={styles.cardFirstColumn}>
        <Text style={[styles.cardTitle, {color: textColorChange}]}>{status ? "Concluido": "Pedido em andamento"}</Text>
        <FlatList
          style={styles.flatListContainer}
          data={orderData.productList}
          renderItem={({ item }) => (
            <View style={styles.itemsContainer}>
              <Text style={[styles.flatListText, { flex: 1, color: textColorChange }]}>{item.quantity}</Text>
              <Text style={[styles.flatListText, { flex: 3, flexWrap: "nowrap", color: textColorChange }]}>{item.name}</Text>
              <Text style={[styles.flatListText, { flex: 2, color: textColorChange}]}>{item.flavor}</Text>
            </View>
          )}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />

        <Text style={status ? [styles.statusText, {color: "#C83F3B"}] : styles.statusText}>{orderData.status}</Text>
      </View>
      <View style={styles.cardSecondColumn}>
        <View style={{alignItems: "flex-end"}}>
          <Text style={[styles.secondColumnText, { fontSize: 16, marginVertical: 5, color: textColorChange}]}>{orderData.orderId}</Text>
          <Text style={[styles.secondColumnText, { fontSize: 12, color: textColorChange }]}>{orderData.date}</Text>
          <Text style={[styles.secondColumnText, { fontSize: 12, color: textColorChange }]}>{orderData.time}</Text>
        </View>
        <Text style={[styles.secondColumnText, { fontSize: 16, color: textColorChange }]}>R$ {orderData.priceTotal}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C83F3B",
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#FFF"
  },
  cardFirstColumn: {
    flexDirection: "column",
    flex: 2
  },
  cardSecondColumn: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginHorizontal: 10,
  },
  secondColumnText: {
    fontWeight: 'bold',
  },
  flatListContainer: {
  },
  itemsContainer: {
    flexDirection: "row",
    alignItems: 'center',
    flexWrap: "nowrap",
    justifyContent: "space-between",
    gap: 5,
  },
  flatListText: {
    fontSize: 12,
    fontWeight: '500'
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: "#E4FF40",
    elevation: 10,
    marginTop: 6,
  }
})