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
  const placeHolderColor = 'grey';
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Image
          source={require('../images/logo_pizza_on_time.png')}
          accessibilityLabel={'Logo Pizza on time'}
          style={{width: 300, height: 300}}
        />
      </View>

      <View style={{flex: 2, justifyContent: 'flex-start' }}>
        <TextInput
          value={userLogin}
          onChangeText={setUserLogin}
          placeholderTextColor={placeHolderColor}
          placeholder={'Insira seu usúario'}
          keyboardType={'default'}
          style={textInputStyle.textInputLayout}
        />
        <TextInput
          value={userPassword}
          onChangeText={setUserPassword}
          secureTextEntry={true}
          placeholderTextColor={placeHolderColor}
          placeholder={'Insira sua senha'}
          style={textInputStyle.textInputLayout}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCadastrar}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {navigation.navigate('Home')}}
          style={{alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              color: 'black',
              textDecorationLine: 'underline',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Entrar sem cadastro
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const textInputStyle = StyleSheet.create({
  textInputLayout: {
    color: 'black',
    textAlign: 'left',
    backgroundColor: '#FFE096',
    width: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 5,
    padding: 16,
    marginBottom: 10,
  },
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0965F',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFE096',
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 10,
    elevation: 10,
  },
  buttonCadastrar: {
    alignItems: 'center',
    backgroundColor: '#C83F3B',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
