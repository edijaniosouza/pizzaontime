import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { Divider } from "../components/Divider.tsx";
import { Button } from "../components/Button.tsx";
import { styleMenuScreen } from "../style/style.tsx";
import { MenuItem } from "../components/Menuitem.tsx";
import { getCategories, getProducts } from "../api/ProductsRepository.tsx";

// @ts-ignore
function MenuScreen({ navigation }): React.JSX.Element {
  const [categories, setCategories] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const flatListRef = React.useRef<FlatList>(null);

  useEffect(() => {
    getCategories().then(data => {
      if (data["error"]) console.warn(data["error"]); else setCategories(data["data"]);
    });
    getProducts().then((data) => {
      if (data["error"]) console.warn(data["error"]); else setData(data["data"]);
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
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) =>
            <Button
              style={styleMenuScreen.menuButton}
              onPress={() => handleCategoryPress(index)}
            >
              <Text style={styleMenuScreen.menuButtonText}>{item.name}</Text>
            </Button>
          }
          keyExtractor={item => item.id}
        />
      </View>

      <FlatList
        ref={flatListRef}
        data={categories}
        horizontal={false}
        renderItem={({ item: itemCategory }) =>
          <View>
            {verificarValor(data, itemCategory.name) ? <TopicTitle name={itemCategory.name} /> : null}

            <FlatList data={data} keyExtractor={data.id} renderItem={({ item: item }) =>
              itemCategory.name === item.categories.name ?
                <MenuItem navigation={() => {
                  navigation.navigate('MenuItem', {
                    id: item.id,
                    title: item.name,
                    description: item.description,
                    image: require('../images/logo_pizza_on_time.png'),
                  })
                }} title={item.name} description={item.description} image={require("../images/logo_pizza_on_time.png")} /> : null
            } />
          </View>
        }
        keyExtractor={item => item.id}
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
