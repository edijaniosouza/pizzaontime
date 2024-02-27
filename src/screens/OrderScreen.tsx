import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { OrderCard } from "../components/OrderCard.tsx";

function OrderScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <OrderCard orderNumer={"002"}
                 order={"Pizza de frango"}
                 orderStatus={"Em preparação"}
                 dateTime={"19/02 - 11:03"}
                 cardStyle={styles.cardInProgress}
                 cardTitleRowStyle={styles.cardTitleRow}
                 cardTitleStyle={styles.cardContentTitleInProgress}
                 cardtextStyle={styles.cardContentInProgress}
      />
      <Text style={styles.textTopic}>Histórico</Text>
      <View style={styles.divider}></View>

      <OrderCard orderNumer={"001"}
                 order={"Pizza de Mussarela"}
                 orderStatus={"CONCLUIDO"}
                 dateTime={"17/02 - 21:10"}
                 cardStyle={styles.cardHistory}
                 cardTitleRowStyle={styles.cardTitleRow}
                 cardTitleStyle={styles.cardContentTitle}
                 cardtextStyle={styles.cardContent} />
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
