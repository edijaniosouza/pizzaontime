import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen.tsx";
import HomeScreen from "../screens/HomeScreen.tsx";
import MenuScreen from "../screens/MenuScreen.tsx";
import MenuItemScreen from "../screens/MenuItemScreen.tsx";
import OrderScreen from "../screens/OrderScreen.tsx";
import SignUpScreen from "../screens/SignUpScreen.tsx";
import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import MyAccountScreen from "../screens/MyAccountScreen.tsx";
import BagScreen from "../screens/BagScreen.tsx";
import PaymentScreen from "../screens/PaymentScreen.tsx";

export type RootStackParamList = {
  Home: undefined,
  Login: undefined,
  Menu: undefined,
  MenuItem: undefined,
  OrderScreen: undefined,
  SignUpScreen: undefined,
  MyAccountScreen: undefined,
  BagScreen: undefined,
  PaymentScreen: undefined,
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen
          name={"Login"}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Home"}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Menu"}
          component={MenuScreen}
          options={{
            title: 'Menu',
            headerStyle: {
              backgroundColor: "#FFE096"
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25
            },

          }}
        />

        <Stack.Screen
          name={"MenuItem"}
          component={MenuItemScreen}
          options={navOptions('Item')}
        />
        <Stack.Screen name={"OrderScreen"} component={OrderScreen} options={navOptions('Pedidos')} />
        <Stack.Screen name={"SignUpScreen"} component={SignUpScreen} options={navOptions('Cadastrar')} />
        <Stack.Screen name={'MyAccountScreen'} component={MyAccountScreen} options={navOptions('Minha Conta')}/>
        <Stack.Screen name={'BagScreen'} component={BagScreen} options={navOptions('Pedido')}/>
        <Stack.Screen name={'PaymentScreen'} component={PaymentScreen} options={navOptions('Forma de Pagamento')}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function navOptions(title: string): NativeStackNavigationOptions {
  return ({
      title: title,
      headerStyle: {
        backgroundColor: "#FFE096"
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25
      },
    }
  );
}
