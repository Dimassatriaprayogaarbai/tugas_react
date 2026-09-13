import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

export default function FetchData() {
  const [loading, setLoading] = useState(false);

  const handleFetchData = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Status Koneksi
      </Text>

      <Pressable
        style={styles.button}
        onPress={handleFetchData}
      >
        <Text style={styles.buttonText}>
          Fetch Data
        </Text>
      </Pressable>

      {/* Modal Loading */}
      <Modal
        visible={loading}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>

            <ActivityIndicator
              size="large"
              color="#007AFF"
            />

            <Text style={styles.loadingText}>
              Memuat data...
            </Text>

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#333",
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContainer: {
    width: 220,
    padding: 25,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: "#333",
  },
});