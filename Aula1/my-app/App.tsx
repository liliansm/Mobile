import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";

function Login() {
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
      />
      <Button
        title="Cadastre-se"
        buttonStyle={loginStyles.button}
        containerStyle={loginStyles.buttonContainer}
      />

      <Text style={loginStyles.text}>Esqueceu a Senha</Text>
    </View>
  );
}

function Cadastro() {
  return (
    <View style={cadastroStyles.container}>
      <View style={cadastroStyles.headerContainer}>
        <Text style={cadastroStyles.headerTitle}>Cadastro</Text>
      </View>

      <Input
        label="Nome"
        labelStyle={cadastroStyles.label}
        containerStyle={cadastroStyles.inputContainer}
        inputStyle={cadastroStyles.input}
      />
      <Input
        label="Email"
        labelStyle={cadastroStyles.label}
        containerStyle={cadastroStyles.inputContainer}
        inputStyle={cadastroStyles.input}
      />
      <Input
        label="Senha"
        labelStyle={cadastroStyles.label}
        containerStyle={cadastroStyles.inputContainer}
        inputStyle={cadastroStyles.input}
      />

      <Button
        title="Cadastrar"
        buttonStyle={cadastroStyles.button}
        containerStyle={cadastroStyles.buttonContainer}
      />
    </View>
  );
}

function EsqueceuSenha() {
  return (
    <View style={esqueceuSenhaStyles.container}>
      <View style={esqueceuSenhaStyles.headerContainer}>
        <Text style={esqueceuSenhaStyles.headerTitle}>Esqueceu a Senha</Text>
      </View>
      
      <Input
        label="Email"
        labelStyle={esqueceuSenhaStyles.label}
        containerStyle={esqueceuSenhaStyles.inputContainer}
        inputStyle={esqueceuSenhaStyles.input}
      />

      <Button
        title="Enviar"
        buttonStyle={esqueceuSenhaStyles.button}
        containerStyle={esqueceuSenhaStyles.buttonContainer}
      />
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


const cadastroStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#e3e1e1',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 130,
  },
  headerTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
   
  },
  input: {
    backgroundColor: "#e3e1e1",
    color: "black",
  },
  label: {
    color: "black",
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


const esqueceuSenhaStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#e3e1e1',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 130 ,
  },
  headerTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    marginTop: 40,
  },
  input: {
    backgroundColor: "#e3e1e1",
    color: "black",
  },
  label: {
    color: "black",
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