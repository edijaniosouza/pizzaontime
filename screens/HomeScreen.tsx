import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Button } from "../components/Button.tsx";
import { styleHomeScreen } from "../style/style.tsx";


// @ts-ignore
function HomeScreen({ navigation }): React.JSX.Element {
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
            navigation.navigate("Menu");
          }}
        >
          <Text style={styleHomeScreen.btnText}>MENU</Text>
        </Button>
        <Button
          style={styleHomeScreen.buttonsStyle}
          onPress={() => {
            navigation.navigate("OrderScreen");
          }}
        >
          <Text style={styleHomeScreen.btnText}>PEDIDOS</Text>
        </Button>
        <Button
          style={styleHomeScreen.buttonsStyle}
          onPress={() => {
            navigation.navigate("MyAccountScreen");
          }}
        >
          <Text style={styleHomeScreen.btnText}>MINHA CONTA</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
