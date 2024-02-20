import React from "react";
import {
  Image,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

type ButtonsProps = {
  name: string;
  style: StyleProp<any>;
  navigator: () => void;
};

function ButtonsDetails(props: ButtonsProps) {
  return (
    <TouchableOpacity style={props.style} onPress={props.navigator}>
      <Text style={style.btnText}>{props.name}</Text>
    </TouchableOpacity>
  );
}

// @ts-ignore
function HomeScreen({ navigation }): React.JSX.Element {
  return (
    <SafeAreaView style={style.container}>
      <Image
        source={require("../images/logo_pizza_on_time.png")}
        accessibilityLabel={"Logo Pizza on time"}
        style={{ width: 300, height: 300 }}
      />
      <View>
        <ButtonsDetails
          name={"MENU"}
          style={style.buttonsStyle}
          navigator={() => {
            navigation.navigate("Menu");
          }}
        />
        <ButtonsDetails
          name={"PEDIDOS"}
          style={style.buttonsStyle}
          navigator={() => {
            navigation.navigate("OrderScreen");
          }}
        />
        <ButtonsDetails
          name={"MINHA CONTA"}
          style={style.buttonsStyle}
          navigator={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 5,
    backgroundColor: "#FFE0965F"
  },
  buttonsStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE096",
    paddingHorizontal: 100, // Ajustar
    marginVertical: 5,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FF902C60',
    elevation: 10
  },
  btnText: {
    color: "#C83F3B",
    fontWeight: "bold",
    fontSize: 18,
  }
});
export default HomeScreen;
