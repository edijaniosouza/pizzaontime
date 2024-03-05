import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "../components/Divider.tsx";
import { Button } from "../components/Button.tsx";
import { styleMenuScreen } from "../style/style.tsx";
import { MenuItem } from "../components/Menuitem.tsx";
import { Badge } from "react-native-paper";
import { pizzaData } from "../helpers/dataHelper.tsx";

// @ts-ignore
function MenuScreen({ navigation }): React.JSX.Element {
  const [data, setData] = useState<any>([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const flatListRef = React.useRef<FlatList>(null);

  useEffect(() => {
    setData(pizzaData);

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          navigation.navigate("BagScreen");
        }} style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
          <Badge style={{
            position: "absolute",
            top: 4
          }}>
            3
          </Badge>
          <Image source={require("../images/sacola.png")} style={{ width: 24, height: 24 }} />

        </TouchableOpacity>
      )
    });
  }, []);

  const handleCategoryPress = (index: number) => {
    setSelectedCategoryIndex(index);
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  return (
    <SafeAreaView style={styleMenuScreen.container}>

      <View style={styleMenuScreen.menuRow}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item, index }) =>
            <Button
              style={styleMenuScreen.menuButton}
              onPress={() => handleCategoryPress(index)}
            >
              <Text style={styleMenuScreen.menuButtonText}>{item.name}</Text>
            </Button>
          }
        />
      </View>

      <FlatList
        ref={flatListRef}
        data={data}
        horizontal={false}
        renderItem={({ item: itemCategory }) =>
          <View>
            {/*{verificarValor(data, itemCategory.name) ? <TopicTitle name={itemCategory.name} /> : null}*/}
            <TopicTitle name={itemCategory.name} />

            <FlatList
              data={itemCategory.values}
              keyExtractor={itemCategory.values.id}
              renderItem={({ item: item }) =>
                <MenuItem navigation={() => {
                  navigation.navigate("MenuItem", {
                    item: item
                  });
                }}
                          title={item.name}
                          description={item.description}
                          image={item.image}
                          price={item.value} />
              } />
          </View>
        }
      />

    </SafeAreaView>
  );
}

type TopicTitleProps = {
  name: string
}

function TopicTitle(itemName: TopicTitleProps) {
  return (
    <View>
      <Text style={styleMenuScreen.topicText}>{itemName.name}</Text>
      <Divider />
    </View>
  );
}

function verificarValor(category: any, valor: string) {
  for (let i = 0; i < category.length; i++) {
    if (category[i].categories.name === valor) {
      return true;
    }
  }
  return false;
}


export default MenuScreen;
