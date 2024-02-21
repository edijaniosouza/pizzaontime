import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { stylesLoginScreen, textInputStyle } from "../style/style.tsx";
import { Button } from "../components/Button.tsx";

// @ts-ignore
const LoginScreen = ({ navigation }) => {
  const placeHolderColor = "grey";
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <SafeAreaView style={stylesLoginScreen.container}>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Image
          source={require("../images/logo_pizza_on_time.png")}
          accessibilityLabel={"Logo Pizza on time"}
          style={{ width: 300, height: 300 }}
        />
      </View>

      <View style={{ flex: 2, justifyContent: "flex-start" }}>
        <TextInput
          value={userLogin}
          onChangeText={setUserLogin}
          placeholderTextColor={placeHolderColor}
          placeholder={"Insira seu usúario"}
          keyboardType={"default"}
          style={textInputStyle.textInputLayout}
        />
        <TextInput
          value={userPassword}
          onChangeText={setUserPassword}
          secureTextEntry={true}
          placeholderTextColor={placeHolderColor}
          placeholder={"Insira sua senha"}
          style={textInputStyle.textInputLayout}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <Button
            style={stylesLoginScreen.button}
            onPress={() => {
              navigation.navigate("Home");
            }}>
            <Text style={stylesLoginScreen.buttonText}>Entrar</Text>
          </Button>

          <Button
            style={stylesLoginScreen.buttonCadastrar}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text style={stylesLoginScreen.buttonTextSignUp}>Cadastrar</Text>
          </Button>

        </View>

        <Button
          style={stylesLoginScreen.btnSignInWithNoAccount}
          onPress={() => {
            navigation.navigate("Home");
          }}>
          <Text style={stylesLoginScreen.btnTextSignInWithNoAccount}>Entrar sem cadastro</Text>
        </Button>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
