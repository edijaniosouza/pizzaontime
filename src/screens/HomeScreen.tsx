import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Button } from "../components/Button.tsx";
import { styleHomeScreen } from "../style/style.tsx";
import { getCategories } from "../api/ProductsRepository.tsx";


// @ts-ignore
function HomeScreen({ route, navigation }): React.JSX.Element {
  const {userData} = route.params // dados do usuario

  return (
    <SafeAreaView style={styleHomeScreen.container}>
      <Image
        source={require("../images/logo_pizza_on_time.png")}
        accessibilityLabel={"Logo Pizza on time"}
        style={styleHomeScreen.imgStyle}
      />
      <View>
        <Button
          style={styleHomeScreen.buttonsStyle}
          onPress={() => {
            navigation.navigate("Menu", {
              userData: userData
            });
          }}
        >
          <Text style={styleHomeScreen.btnText}>MENU</Text>
        </Button>
        <Button
          style={styleHomeScreen.buttonsStyle}
          onPress={() => {
            navigation.navigate("OrderScreen", {
              userData: userData
            });
          }}
        >
          <Text style={styleHomeScreen.btnText}>PEDIDOS</Text>
        </Button>
        <Button
          style={styleHomeScreen.buttonsStyle}
          onPress={() => {
            navigation.navigate("MyAccountScreen", {
              userData: userData
            });
          }}
        >
          <Text style={styleHomeScreen.btnText}>MINHA CONTA</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
