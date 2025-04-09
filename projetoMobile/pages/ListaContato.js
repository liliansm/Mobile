import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";


function ListaContato({ navigation }) {
    return (
      <View style={cadastroStyles.container}>
        <View style={cadastroStyles.headerContainer}>
          <Text style={cadastroStyles.headerTitle}>Cadastro</Text>
        </View>
        <View>
            <Avatar
                size="large"
                rounded
                icon={{ name: "user", type: "font-awesome", color: "black" }}
                source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
            />

        </View>
        <Input
          label="Nome"
          labelStyle={cadastroStyles.label}
          containerStyle={cadastroStyles.inputContainer}
          inputStyle={cadastroStyles.input}
        />
        <Input
          label="cpf"
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
          title="Salvar"
          buttonStyle={cadastroStyles.button}
          containerStyle={cadastroStyles.buttonContainer}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }

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

export default ListaContato;