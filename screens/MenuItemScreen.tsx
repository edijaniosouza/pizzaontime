import React, { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, Text } from "react-native";
import { OptionsItems } from "../components/OptionsItems.tsx";
import { styleMenuItemScreen } from "../style/style.tsx";
import { Button } from "../components/Button.tsx";

// @ts-ignore

function MenuItemScreen({route, navigation}): React.JSX.Element {
  const {title, image, description} = route.params;
  const {width} = Dimensions.get('window');
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, []);

  const [checked, setChecked] = useState('first');

  // @ts-ignore
  return (
    <SafeAreaView style={styleMenuItemScreen.container}>
      <ScrollView>
        <Image
          source={{uri: image}}
          width={width}
          height={250}
          resizeMethod={'scale'}
        />

        <Text style={styleMenuItemScreen.text}>{description}</Text>
        <Text style={styleMenuItemScreen.textSubtitle}>Sabores</Text>

        <OptionsItems
          value={'first'}
          checked={checked}
          setChecked={() => setChecked('first')}
          itemName={'Mussarela'}
        />
        <OptionsItems
          value={'second'}
          checked={checked}
          setChecked={() => setChecked('second')}
          itemName={'Calabresa'}
        />
        <OptionsItems
          value={'third'}
          checked={checked}
          setChecked={() => setChecked('third')}
          itemName={'Frango'}
        />
        <OptionsItems
          value={'forth'}
          checked={checked}
          setChecked={() => setChecked('forth')}
          itemName={'Portuguesa'}
        />
        <OptionsItems
          value={'fifth'}
          checked={checked}
          setChecked={() => setChecked('fifth')}
          itemName={'Toscana'}
        />

        <Button style={styleMenuItemScreen.btnAdd} onPress={()=>{}} >
          <Text style={styleMenuItemScreen.btnAddText}>Adicionar à sacola</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}


export default MenuItemScreen;
