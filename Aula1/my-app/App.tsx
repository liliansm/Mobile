import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Avatar} from "react-native-elements";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";

function Login() {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
      />

      <Input
        label="Email"
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
        <Input
        label="Senha"
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />

      <Button
      title="Logar"
      buttonStyle={styles.button}
      containerStyle={styles.buttonContainer}
      />
      <Button
      title="Cadastre-se"
      buttonStyle={styles.button}
      containerStyle={styles.buttonContainer}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#adacaa",
  },
  button: {
    backgroundColor: "#149914",
    paddingHorizontal: 30,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 10,
  },

});

export default Login;
