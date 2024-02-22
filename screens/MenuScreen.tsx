import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Divider } from "../components/Divider.tsx";
import { Button } from "../components/Button.tsx";
import { styleMenuScreen } from "../style/style.tsx";
import { MenuItem } from "../components/Menuitem.tsx";

// @ts-ignore
function MenuScreen({ navigation }): React.JSX.Element {
  return (
    <SafeAreaView style={styleMenuScreen.container}>
      <View style={styleMenuScreen.menuRow}>
        <Button
          style={styleMenuScreen.menuButton}
          onPress={() => {
          }}
        >
          <Text style={styleMenuScreen.menuButtonText}>Pizza Grande</Text>
        </Button>
        <Button
          style={styleMenuScreen.menuButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styleMenuScreen.menuButtonText}>Pizza Broto</Text>
        </Button>
        <Button
          style={styleMenuScreen.menuButton}
          onPress={() => {
          }}
        >
          <Text style={styleMenuScreen.menuButtonText}>Sobremesa</Text>
        </Button>

        <Button
          style={styleMenuScreen.menuButton}
          onPress={() => {
          }}
        >
          <Text style={styleMenuScreen.menuButtonText}>Bebidas</Text>
        </Button>
      </View>

      <Text style={styleMenuScreen.topicText}>Pizza Grande</Text>
      <Divider />
      <ScrollView>
        <MenuItem
          title={"Pizza 8 pedaços"}
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
          }}
          description={
            "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          }
          navigation={() => {
            navigation.navigate("MenuItem", {
              title: "Pizza 8 pedaços",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
              description:
                "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
            });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MenuScreen;

