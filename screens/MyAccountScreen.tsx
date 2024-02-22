import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Divider } from "../components/Divider.tsx";

// @ts-ignore
function MyAccountScreen({ navigation }): React.JSX.Element {
  // dados pessoais
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [password, setPassword] = useState("")
  // address
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [cep, setCEP] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.subtitle}>Dados pessoais</Text>
      <Divider />
      <View style={styles.insideContainer}>

        <Text style={styles.text}>Nome: {name} </Text>
        <Text style={styles.text}>E-mail: {email}</Text>
        <Text style={styles.text}>Telefone: {phone}</Text>
        <Text style={styles.text}>Data de nascimento: {birthDate}</Text>
        <Text style={styles.text}>Senha: {password}</Text>
      </View>

      <Text style={styles.subtitle}>Dados de Endereço</Text>
      <Divider />
      <View style={styles.insideContainer}>
        <Text style={styles.text}>Logradouro: {address}</Text>
        <Text style={styles.text}>Número: {number}</Text>
        <Text style={styles.text}>CEP: {cep}</Text>
        <Text style={styles.text}>Bairro: {neighborhood}</Text>
        <Text style={styles.text}>Cidade: {city}</Text>
        <Text style={styles.text}>Estado: {state}</Text>
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
