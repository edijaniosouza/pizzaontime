import React from "react";
import {
  Image,
  ImageSourcePropType,
  SafeAreaView, ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// @ts-ignore
function MenuScreen({ navigation }): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuRow}>
        <MenuButtons
          style={styles.menuButton}
          textStyle={styles.menuButtonText}
          title={"Pizza Grande"}
          onPress={() => {
          }}
        />
        <MenuButtons
          style={styles.menuButton}
          textStyle={styles.menuButtonText}
          title={"Pizza Broto"}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <MenuButtons
          style={styles.menuButton}
          textStyle={styles.menuButtonText}
          title={"Sobremesa"}
          onPress={() => {
          }}
        />
        <MenuButtons
          style={styles.menuButton}
          textStyle={styles.menuButtonText}
          title={"Bebidas"}
          onPress={() => {
          }}
        />
      </View>

      <Text style={styles.topicText}>Pizza Grande</Text>
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
            navigation.navigate("Menu_item", {
              title: "Pizza 8 pedaços",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
              description:
                "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
            });
          }}
        />

        <MenuItem
          title={"Pizza 8 pedaços"}
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
          }}
          description={
            "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          }
          navigation={() => {
            navigation.navigate("Menu_item", {
              title: "Pizza 8 pedaços",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
              description:
                "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
            });
          }}
        />

        <MenuItem
          title={"Pizza 8 pedaços"}
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
          }}
          description={
            "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          }
          navigation={() => {
            navigation.navigate("Menu_item", {
              title: "Pizza 8 pedaços",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
              description:
                "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
            });
          }}
        />

        <MenuItem
          title={"Pizza 8 pedaços"}
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
          }}
          description={
            "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          }
          navigation={() => {
            navigation.navigate("Menu_item", {
              title: "Pizza 8 pedaços",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
              description:
                "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
            });
          }}
        />

        <MenuItem
          title={"Pizza 8 pedaços"}
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
          }}
          description={
            "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          }
          navigation={() => {
            navigation.navigate("Menu_item", {
              title: "Pizza 8 pedaços",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
              description:
                "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
            });
          }}
        />

        <MenuItem
          title={"Pizza 8 pedaços"}
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
          }}
          description={
            "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          }
          navigation={() => {
            navigation.navigate("Menu_item", {
              title: "Pizza 8 pedaços",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
              description:
                "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
            });
          }}
        /><MenuItem
        title={"Pizza 8 pedaços"}
        image={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
        }}
        description={
          "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
        }
        navigation={() => {
          navigation.navigate("Menu_item", {
            title: "Pizza 8 pedaços",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
            description:
              "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          });
        }}
      />
        <MenuItem
          title={"Pizza 8 pedaços"}
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
          }}
          description={
            "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          }
          navigation={() => {
            navigation.navigate("Menu_item", {
              title: "Pizza 8 pedaços",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU",
              description:
                "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
            });
          }}
        />
        <MenuItem
          title={"Pizza 8 pedaços"}
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ov1z6b_gq6aoF1zVVr0OYA0rJevsw3Z80w&usqp=CAU"
          }}
          description={
            "Pizza completa, alimenta 4 pessoas DHASOUIDHBASUIOFBADOIUFAHDOIFJASDJHASIODJAIASOIJhbdasnfjianfoisadasdasdasasnfioafnaiodfjasiopdjasoipdjaio aa"
          }
          navigation={() => {
            navigation.navigate("Menu_item", {
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

type MenuItemProps = {
  title: string;
  description?: string;
  image: ImageSourcePropType;
  navigation: () => any;
};

function MenuItem(props: MenuItemProps): React.JSX.Element {
  return (
    <TouchableOpacity style={styleMenuItem.menuItem} onPress={props.navigation}>
      <View style={{ flex: 3 }}>
        <Text style={styleMenuItem.title}>{props.title}</Text>
        <Text
          style={styleMenuItem.description}
          numberOfLines={2}
          lineBreakMode={"clip"}>
          {props.description}{" "}
        </Text>
      </View>
      <Image source={props.image} style={styleMenuItem.image} />
    </TouchableOpacity>
  );
}

const styleMenuItem = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#C83F3B",
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    color: "white",
    marginHorizontal: 10
  },
  description: {
    fontSize: 12,
    color: "white",
    marginHorizontal: 10
  },
  image: {
    width: 70,
    height: 70,
    flex: 1,
    marginStart: 10,
    marginEnd: 5,
    marginVertical: 5
  }
});

type MenuProps = {
  title: string;
  onPress: () => any;
  style?: StyleProp<any>;
  textStyle?: StyleProp<any>;
  checked?: boolean;
};

function MenuButtons(props: MenuProps): React.JSX.Element {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.menuButton}>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFE0965F"
  },
  menuRow: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  menuButton: {
    padding: 7,
    alignItems: "center",
    backgroundColor: "#C83F3B",
    borderRadius: 8,
    elevation: 5
  },
  menuButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  menuButtonChecked: {
    padding: 7,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5
  },
  topicText: {
    color: "black",
    marginVertical: 6,
    marginHorizontal: 10,
    fontSize: 25
  },
  divider: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    marginHorizontal: 10
  }
});

export default MenuScreen;

