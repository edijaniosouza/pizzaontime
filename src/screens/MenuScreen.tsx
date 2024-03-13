import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, SectionList, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "../components/Divider.tsx";
import { Button } from "../components/Button.tsx";
import { styleMenuScreen } from "../style/style.tsx";
import { MenuItem } from "../components/Menuitem.tsx";
import { Badge } from "react-native-paper";
import { bagList, pizzaData } from "../helpers/dataHelper.tsx";

// @ts-ignore
function MenuScreen({ navigation }): React.JSX.Element {
  const [data, setData] = useState<any>([]);
  const sectionListRef = React.useRef<SectionList>(null);

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
            {bagList.length}
          </Badge>
          <Image source={require("../images/sacola.png")} style={{ width: 24, height: 24 }} />

        </TouchableOpacity>
      )
    });
  }, []);

  const handleCategoryPress = (index: number) => {
    sectionListRef.current?.scrollToLocation({ sectionIndex: index, itemIndex: 0 });
  };

  const formattedData = pizzaData.map(section => ({
    title: section.name,
    data: section.values
  }));

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

      <SectionList
        ref={sectionListRef}
        sections={formattedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MenuItem navigation={() => {
            navigation.navigate("MenuItem", {
              item: item
            });
          }}
                    title={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.value} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TopicTitle name={title} />
        )}
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

export default MenuScreen;
