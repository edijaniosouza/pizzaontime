import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import DatePicker from "react-native-date-picker";
import { textInputStyle } from "../style/style.tsx";

// @ts-ignore
function SignUpScreen({ navigation }): React.JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const getDateMonth = (month: number) => {
    return date.getMonth() + 1;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Nome e Sobrenome</Text>
      <TextInput placeholder={"Insira seu nome"}
                 placeholderTextColor={"black"}
                 value={name}
                 onChangeText={name =>
                   setName(name)
                 }
                 style={textInputStyle.textInputLayout} />

      <Text style={styles.text}>E-mail</Text>
      <TextInput placeholder={"Insira seu e-mail"}
                 keyboardType={"email-address"}
                 placeholderTextColor={"black"}
                 style={textInputStyle.textInputLayout}
                 value={email}
                 onChangeText={email => setEmail(email)}
      />

      <Text style={styles.text}>Telefone</Text>
      <TextInput placeholder={"Insira seu telefone para contato"}
                 keyboardType={"numeric"}
                 placeholderTextColor={"black"}
                 style={textInputStyle.textInputLayout}
                 value={phone}
                 onChangeText={phone => setPhone(phone)}
      />

      <Text style={styles.text}>Data de nascimento</Text>
      <TextInput placeholder={"DD/MM/AAAA"}
                 onFocus={() => setOpen(true)}
                 placeholderTextColor={"black"}
                 value={date.getDate().toString() + "/" + getDateMonth(date.getMonth()) + "/" + date.getFullYear()}
                 style={textInputStyle.textInputLayout}
      />
      <DatePicker
        modal
        mode={"date"}
        locale={"pt-br"}
        title={"Data de Nascimento"}
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <Text style={styles.text}>Senha</Text>

      <TextInput placeholder={"Insira sua senha"}
                 placeholderTextColor={"black"}
                 secureTextEntry={true}
                 style={textInputStyle.textInputLayout}
                 value={password}
                 onChangeText={newPassword => setPassword(newPassword)}
      />

      <Pressable style={styles.signInBtn} onPress={() => {
        navigation.navigate("Home", {
          name: name
        });
      }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Cadastrar</Text>
      </Pressable>

      {/*<Text style={{color: 'black'}}>Endereço</Text>*/}
      {/*<TextInput placeholder={'Insira seu endereço'} placeholderTextColor={'black'}/>*/}


      {/*<Text style={{color: 'black'}}>Complemento</Text>*/}
      {/*<TextInput placeholder={'Complemento'} placeholderTextColor={'black'} />*/}


      {/*<Text style={{color: 'black'}}>Número</Text>*/}
      {/*<TextInput placeholder={'Número'} placeholderTextColor={'black'} keyboardType={'numeric'}/>*/}


      {/*<Text style={{color: 'black'}}>CEP</Text>*/}
      {/*<TextInput placeholder={'CEP'} placeholderTextColor={'black'} keyboardType={'numeric'}/>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE0965F"
  },
  text: {
    fontSize: 18,
    marginBottom: 6,
    color: "black",
    alignSelf: "flex-start",
    marginStart: 50,
    fontWeight: "500"
  },
  signInBtn: {
    backgroundColor: "#C83F3B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "black"
  }
});

export default SignUpScreen;
