import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../components/Button.tsx";
import { PaymentOption } from "../components/PaymentOption.tsx";
// @ts-ignore
export default function PaymentScreen({ navigation }): React.JSX.Element {
  const [selected, setSelected] = useState("");
  const [moneyChange, setMoneyChange] = useState("");
  const presentialCreditCard = "Cartão de Debito ou Crédito";
  const money = "Dinheiro";
  const onlineCreditCard = "Cartão de Crédito";
  const pix = "Pix";

  const isChecked = (text: string) => {
    if (selected === text) setSelected("");
    else setSelected(text);
  };

  const finishBuy = "FINALIZAR COMPRA"

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.paymentContainer}>
        <Text style={styles.title}>PAGAMENTO NA ENTREGA</Text>
        <PaymentOption icon={"credit-card"} iconColor={"#000"} text={presentialCreditCard}
                       selected={selected}
                       setChecked={() => {
                         isChecked(presentialCreditCard);
                       }} />
        <PaymentOption icon={"money-bill"} iconColor={"#000"} text={money}
                       selected={selected}
                       setChecked={() => {
                         isChecked(money);
                       }} />

        {selected === money ?
          <View style={styles.moneyChangeContainer}>
            <Text style={styles.moneyChangeTextTitle}>Qual o valor para troco?</Text>
            <TextInput
              style={styles.moneyChangeTextInput}
              placeholder="R$ 50,00"
              placeholderTextColor={"rgba(0,0,0,0.45)"}
              value={moneyChange}
              onChangeText={(text) => setMoneyChange(text)}
              keyboardType={"numeric"}
              numberOfLines={1}
              maxLength={7}
            />
          </View>
          : null
        }
      </View>

      <View style={styles.paymentContainer}>
        <Text style={styles.title}>PAGAMENTO NO APLICATIVO</Text>
        <PaymentOption icon={"credit-card"} iconColor={"#000"} text={onlineCreditCard}
                       selected={selected}
                       setChecked={() => {
                         isChecked(onlineCreditCard);
                       }} />
        <PaymentOption icon={"pix"} iconColor={"#77dd77"} text={pix}
                       selected={selected}
                       setChecked={() => {
                         isChecked(pix);
                       }} />
      </View>

      {
        selected === "" ?
          <Button
            style={[styles.btnFinish, styles.btnFinishDisable]} disable={true}
            >
            <Text style={[styles.btnFinishText, styles.btnFinishTextDisable]}>{finishBuy}</Text>
          </Button>
          :
          <Button
            style={styles.btnFinish} disable={false}
            onPress={() => {
              if (selected === money && moneyChange === "") return console.warn("Por favor, insira o valor do troco");
              return navigation.navigate("OrderScreen");
            }}>
            <Text style={styles.btnFinishText}>{finishBuy}</Text>
          </Button>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE0965F",
    padding: 10,
    paddingVertical: 10
  },
  paymentContainer: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  title: {
    color: "#C83F3B",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10
  },
  btnFinish: {
    backgroundColor: "#C83F3B",
    borderRadius: 50,
    margin: 10,
    padding: 15,
    alignItems: "center"
  },
  btnFinishDisable: {
    backgroundColor: "#dddddd"
  },
  btnFinishText: {
    fontWeight: "bold",
    color: "#FFF"
  },
  btnFinishTextDisable: {
    color: "#858585"
  },
  moneyChangeTextTitle: {
    fontSize: 16,
    color: "#000",
    marginVertical: 10
  },
  moneyChangeTextInput: {
    borderWidth: 1,
    width: "50%",
    borderColor: "rgba(255,255,255,0.65)",
    backgroundColor: "rgba(255,255,255,0.46)",
    color: "#000",
    padding: 10,
    textAlign: "center"
  },
  moneyChangeContainer: {
    marginHorizontal: 10,
    alignItems: "center"
  }

});
