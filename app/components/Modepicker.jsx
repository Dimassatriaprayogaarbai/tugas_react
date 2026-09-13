import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ModePicker() {
  const [selectedMode, setSelectedMode] = useState("System Default");

  const modes = [
    "Light Mode",
    "Dark Mode",
    "System Default",
  ];

  const isDark = selectedMode === "Dark Mode";

  return (
    <View
      style={[
        styles.container,
        isDark && styles.darkContainer,
      ]}
    >
      <Text
        style={[
          styles.title,
          isDark && styles.darkText,
        ]}
      >
        Pilih Mode Tampilan
      </Text>

      {modes.map((mode) => (
        <TouchableOpacity
          key={mode}
          style={[
            styles.item,
            isDark && styles.darkItem,
            selectedMode === mode && styles.activeItem,
          ]}
          onPress={() => setSelectedMode(mode)}
        >
          <Text
            style={[
              styles.itemText,
              isDark && styles.darkText,
              selectedMode === mode && styles.activeText,
            ]}
          >
            {mode}
          </Text>
        </TouchableOpacity>
      ))}

      <Text
        style={[
          styles.selectedText,
          isDark && styles.darkText,
        ]}
      >
        Mode dipilih: {selectedMode}
      </Text>
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

  darkContainer: {
    backgroundColor: "#121212",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#333",
  },

  darkText: {
    color: "#ffffff",
  },

  item: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  darkItem: {
    backgroundColor: "#1e1e1e",
    borderColor: "#444",
  },

  activeItem: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },

  itemText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },

  activeText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  selectedText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
});