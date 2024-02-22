import { ActivityIndicator, Alert, Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { stylesLoginScreen, textInputStyle } from "../style/style.tsx";
import { Button } from "../components/Button.tsx";
import { supabase } from "../api/Supabase.tsx";
import { signInWithEmail } from "../api/Auth.tsx";

export interface Resource{
  data?: any,
  error?: any
}
//@ts-ignore
const LoginScreen = ({ navigation }) => {
  const placeHolderColor = "grey";
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Resource>({})
  const [error, setError] = useState({})

  console.log(data)
  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error
    } = await supabase.auth.signUp({
      email: userLogin,
      password: userPassword
    });

    if(error) console.log(error.message)
    if (!session) console.log("E-mail não verificado")
    setLoading(false)
  }

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
          onChangeText={ (text) => setUserLogin(text)}
          placeholderTextColor={placeHolderColor}
          placeholder={"Insira seu usúario"}
          keyboardType={"default"}
          style={textInputStyle.textInputLayout}
        />
        <TextInput
          value={userPassword}
          onChangeText={(password) => setUserPassword(password)}
          secureTextEntry={true}
          placeholderTextColor={placeHolderColor}
          placeholder={"Insira sua senha"}
          style={textInputStyle.textInputLayout}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <Button
            style={stylesLoginScreen.button}
            onPress={() => {
              signInWithEmail(userLogin, userPassword).then((data) =>
                setData(data)
              )

              if(data['error']) Alert.alert('Erro de autenticação', data['error']['message'])
              if(data['data']) navigation.navigate("Home");

              // navigation.navigate("Home");
            }}>

            {loading ? <ActivityIndicator color={"#C83F3B"}/> : <Text style={stylesLoginScreen.buttonText}>Entrar</Text> }

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
