import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Divider } from "../components/Divider.tsx";
import { stylesMyAccountScreen } from "../style/style.tsx";

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
    <SafeAreaView style={stylesMyAccountScreen.container}>

      <Text style={stylesMyAccountScreen.subtitle}>Dados pessoais</Text>
      <Divider />
      <View style={stylesMyAccountScreen.insideContainer}>

        <Text style={stylesMyAccountScreen.text}>Nome: {name} </Text>
        <Text style={stylesMyAccountScreen.text}>E-mail: {email}</Text>
        <Text style={stylesMyAccountScreen.text}>Telefone: {phone}</Text>
        <Text style={stylesMyAccountScreen.text}>Data de nascimento: {birthDate}</Text>
        <Text style={stylesMyAccountScreen.text}>Senha: {password}</Text>
      </View>

      <Text style={stylesMyAccountScreen.subtitle}>Dados de Endereço</Text>
      <Divider />
      <View style={stylesMyAccountScreen.insideContainer}>
        <Text style={stylesMyAccountScreen.text}>Logradouro: {address}</Text>
        <Text style={stylesMyAccountScreen.text}>Número: {number}</Text>
        <Text style={stylesMyAccountScreen.text}>CEP: {cep}</Text>
        <Text style={stylesMyAccountScreen.text}>Bairro: {neighborhood}</Text>
        <Text style={stylesMyAccountScreen.text}>Cidade: {city}</Text>
        <Text style={stylesMyAccountScreen.text}>Estado: {state}</Text>
      </View>

    </SafeAreaView>
  );
}


export default MyAccountScreen;
