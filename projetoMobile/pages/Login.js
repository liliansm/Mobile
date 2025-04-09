import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";
import CadastroUsuario from "./CadastroUsuario"

function Login({ navigation }) {
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.avatarContainer}>
        <Avatar
          size="large"
          rounded
          icon={{ name: "user", type: "font-awesome", color: "black" }}
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
        />
      </View>

      <Input
        label="Email"
        labelStyle={loginStyles.label}
        containerStyle={loginStyles.inputContainer}
        inputStyle={loginStyles.input}
      />
      <Input
        label="Senha"
        labelStyle={loginStyles.label}
        containerStyle={loginStyles.inputContainer}
        inputStyle={loginStyles.input}
      />

        <Button
        title="Logar"
        buttonStyle={loginStyles.button}
        containerStyle={loginStyles.buttonContainer}
        onPress={() => navigation.navigate('ListaContato')}
        />
        <Button
        title="Cadastre-se"
        buttonStyle={loginStyles.button}
        containerStyle={loginStyles.buttonContainer}
        onPress={() => navigation.navigate('CadastroUsuario')}
        />

      <Text style={loginStyles.text}>Esqueceu a Senha</Text>
    </View>
  );
}


const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 10,
    },
    avatarContainer: {
      marginBottom: 40,
      marginTop: 80,
    },
    inputContainer: {
      width: "80%",
      marginBottom: 15,
    },
    input: {
      backgroundColor: "#e3e1e1",
      color: "black",
    },
    label: {
      color: "black",
    },
    text: {
      color: "black",
      marginTop: 20,
    },
    button: {
      backgroundColor: "#149914",
      paddingHorizontal: 30,
      borderRadius: 20,
    },
    buttonContainer: {
      width: "80%",
      marginTop: 10,
    },
  });

export default Login;