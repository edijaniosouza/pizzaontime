import { Image, ImageSourcePropType, ImageURISource, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type BagItemCardProps = {
  productInTheBag: ProductInTheBag,
}

type ProductInTheBag = {
  image: ImageURISource,
  name: string,
  flavor: string,
  price: number,
  quantity: number,
}
const calculatePrice = (itemPrice: number, quantity: number) => {
  const result = quantity * itemPrice;
  return result.toFixed(2);
};
export const BagItemCard: React.FC<BagItemCardProps> = ({ productInTheBag }) => {
  return (
    <View>
      <TouchableOpacity style={style.card}>
        <Image style={style.cardImage} source={productInTheBag.image} />
        <View style={style.cardTextContainer}>
          <Text style={style.cardTextItemName}>
            {productInTheBag.name}
          </Text>
          <Text style={style.cardTextItemFlavor}>
            {productInTheBag.flavor}
          </Text>
          <Text style={style.cardTextItemPrice}>
            R$ {calculatePrice(productInTheBag.quantity, productInTheBag.price)}
          </Text>
        </View>

        <View style={style.cardQuantityContainer}>
          <TouchableOpacity style={style.cardQuantityTextContainer}>
            <Text style={style.cardQuantityText}>+</Text>
          </TouchableOpacity>
          <Text style={style.cardQuantityText}>{productInTheBag.quantity}</Text>
          <TouchableOpacity style={style.cardQuantityTextContainer}>
            <Text style={style.cardQuantityText}>-</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C83F3B",
    marginVertical: 10,
    height: 100,
    borderRadius: 10,
    elevation: 1
  },
  cardImage: {
    flex: 2,
    aspectRatio: 1,
    width: "100%",
    marginHorizontal: 10
  },
  cardTextContainer: {
    flex: 5
  },
  cardTextItemName: {
    color: "#FFF",
    fontWeight: "bold"
  },
  cardTextItemFlavor: {
    color: "#FFF"
  },
  cardTextItemPrice: {
    color: "#FFF",
    fontWeight: "500"
  },
  cardQuantityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardQuantityTextContainer: {
    aspectRatio: 1, alignItems: "center", backgroundColor: "rgba(255,255,255,0.25)"
  },
  cardQuantityText: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 16,
    margin: 2
  }
});
