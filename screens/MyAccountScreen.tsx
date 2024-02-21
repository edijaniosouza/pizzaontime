import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Divider } from "../components/Divider.tsx";

// @ts-ignore
function MyAccountScreen({ navigation }): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.subtitle}>Dados pessoais</Text>
      <Divider />
      <View style={styles.insideContainer}>

        <Text style={styles.text}>Nome: </Text>
        <Text style={styles.text}>E-mail: </Text>
        <Text style={styles.text}>Telefone: </Text>
        <Text style={styles.text}>Data de nascimento: </Text>
        <Text style={styles.text}>Senha: </Text>
      </View>

      <Text style={styles.subtitle}>Dados de Endereço</Text>
      <Divider />
      <View style={styles.insideContainer}>
        <Text style={styles.text}>Logradouro: </Text>
        <Text style={styles.text}>Número: </Text>
        <Text style={styles.text}>CEP: </Text>
        <Text style={styles.text}>Bairro: </Text>
        <Text style={styles.text}>Cidade: </Text>
        <Text style={styles.text}>Estado: </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE0965F"
  },
  insideContainer: {
    backgroundColor: "#FFDAD6",
    margin: 6,
    borderRadius: 10,
  },
  subtitle: {
    color: "#C83F3B",
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold'
  },
  text: {
    color: "#410003",
    fontSize: 18,
    margin: 10,
    fontWeight: '500',
  }
});

export default MyAccountScreen;
