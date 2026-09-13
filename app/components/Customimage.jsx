import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

export default function CustomImage() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Galeri Kegiatan Sekolah
      </Text>

      <View style={styles.imageContainer}>

        {/* Indikator Loading */}
        {loading && (
          <ActivityIndicator
            size="large"
            color="#007AFF"
            style={styles.loading}
          />
        )}

        <Image
          source={{
            uri: "https://picsum.photos/300/200",
          }}
          style={styles.image}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />

      </View>

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
    marginBottom: 20,
    color: "#333",
  },

  imageContainer: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: 300,
    height: 200,
  },

  loading: {
    position: "absolute",
    zIndex: 1,
  },
});