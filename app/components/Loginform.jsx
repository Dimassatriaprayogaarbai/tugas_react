import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View>
      <Text>Email</Text>

      <TextInput
        placeholder="Masukkan email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text>Password</Text>

      <TextInput
        placeholder="Masukkan password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Pressable onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}