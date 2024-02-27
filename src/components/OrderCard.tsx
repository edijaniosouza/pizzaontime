import React from "react";
import { Card } from "react-native-paper";
import { StyleProp, Text, View } from "react-native";

type OrderCardProps = {
  orderNumer: string,
  dateTime: string,
  order: string,
  orderStatus: string,
  cardStyle?: StyleProp<any>,
  cardTitleRowStyle?: StyleProp<any>,
  cardTitleStyle? : StyleProp<any>,
  cardtextStyle? : StyleProp<any>
}
export function OrderCard(props: OrderCardProps): React.JSX.Element {
  return (
    <Card style={props.cardStyle} elevation={0}>
      <View style={props.cardTitleRowStyle}>
        <Text style={props.cardTitleStyle}>Pedido: {props.orderNumer}</Text>
        <Text style={props.cardTitleStyle}>{props.dateTime}</Text>
      </View>
      <Text style={props.cardtextStyle}>{props.order}</Text>
      <Text style={props.cardtextStyle}>{props.orderStatus}</Text>
    </Card>
  );
}
