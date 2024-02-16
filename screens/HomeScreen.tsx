import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ButtonsProps = {
  name: string;
  style: StyleProp<any>;
  navigator: () => void;
};

function ButtonsDetails(props: ButtonsProps) {
  return (
    <TouchableOpacity style={props.style} onPress={props.navigator}>
      <Text style={{color: 'black', fontWeight: 'bold'}}>{props.name}</Text>
    </TouchableOpacity>
  );
}

// @ts-ignore
function HomeScreen({navigation}): React.JSX.Element {
  return (
    <SafeAreaView style={style.container}>
      <Image
        source={require('../images/logo_pizza_on_time.png')}
        accessibilityLabel={'Logo Pizza on time'}
        style={{width: 200, height: 200}}
      />
      <View>
        <ButtonsDetails
          name={'MENU'}
          style={style.buttonsStyle}
          navigator={() => {
            navigation.navigate('Menu');
          }}
        />
        <ButtonsDetails
          name={'PEDIDOS'}
          style={style.buttonsStyle}
          navigator={() => {
            navigation.navigate('Login');
          }}
        />
        <ButtonsDetails
          name={'MINHA CONTA'}
          style={style.buttonsStyle}
          navigator={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: 5,
    backgroundColor: 'black',
  },
  buttonsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 10,
    margin: 5,
    width: 350,
    height: 100,
    borderRadius: 10,
    elevation: 10,
  },
});
export default HomeScreen;
