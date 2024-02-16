import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useState} from 'react';

// @ts-ignore
const LoginScreen = ({navigation}) => {
  const isDarkMode: boolean = useColorScheme() === 'dark';
  const backgrountStyle = {
    // backgroundColor: isDarkMode ? Colors.dark : Colors.light,
    backgroundColor: 'white',
  };

  const placeHolderColor = 'white';
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgrountStyle.backgroundColor}
      />

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../images/logo_pizza_on_time.png')}
          accessibilityLabel={'Logo Pizza on time'}
          style={{width: 200, height: 200}}
        />
      </View>

      <View style={{flex: 2, justifyContent: 'flex-start', marginTop: 70}}>
        <TextInput
          value={userLogin}
          onChangeText={setUserLogin}
          placeholderTextColor={placeHolderColor}
          placeholder={'Insira seu usúario'}
          keyboardType={'default'}
          style={styles.textInputLayout}
        />
        <TextInput
          value={userPassword}
          onChangeText={setUserPassword}
          secureTextEntry={true}
          placeholderTextColor={placeHolderColor}
          placeholder={'Insira sua senha'}
          style={styles.textInputLayout}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Start');
            }}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Start');
            }}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {}}
          style={{alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              color: 'white',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}>
            Entrar sem cadastro
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'grey',
  },
  textInputLayout: {
    color: 'white',
    textAlign: 'left',
    width: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 16,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
  },
});

export default LoginScreen;
