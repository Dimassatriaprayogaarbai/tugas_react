import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PrivacyPolicy() {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Kebijakan Privasi
      </Text>

      <View style={styles.agreement}>
        <Switch
          value={agreed}
          onValueChange={setAgreed}
        />

        <Text style={styles.text}>
          Saya menyetujui Syarat & Ketentuan
          dan Kebijakan Privasi.
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          !agreed && styles.disabledButton,
        ]}
        disabled={!agreed}
        onPress={() => console.log("Registrasi berhasil")}
      >
        <Text style={styles.buttonText}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  agreement: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  disabledButton: {
    backgroundColor: "#999",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});