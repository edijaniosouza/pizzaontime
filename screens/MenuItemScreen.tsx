import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: image}}
          width={width}
          height={250}
          resizeMethod={'scale'}
        />

        <Text style={styles.text}>{description}</Text>
        <Text style={styles.textSubtitle}>Sabores</Text>

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

        <Button title={'Adicionar à Sacola'} color={'#C83F3B'} />
      </ScrollView>
    </SafeAreaView>
  );
}

type OptionsItemsProps = {
  value: string;
  checked: string;
  setChecked: () => any;
  itemName: string;
};

function OptionsItems(props: OptionsItemsProps): React.JSX.Element {
  return (
    <View style={styles.itemOptions}>
      <Text style={styles.itemOptionsText}>{props.itemName}</Text>
      <RadioButton
        value={props.value}
        status={props.checked === props.value ? 'checked' : 'unchecked'}
        onPress={props.setChecked}
        color={'black'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 15,
    margin: 10,
  },
  textSubtitle: {
    color: '#C83F3B',
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold',
  },
  itemOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor: '#FFE0965F',
    borderRadius: 5,
    marginBottom: 2,
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  itemOptionsText: {
    color: 'black',
    fontSize: 16,
  },
});

export default MenuItemScreen;
