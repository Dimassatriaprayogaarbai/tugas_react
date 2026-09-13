import React from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
} from "react-native";

export default function NilaiSiswa() {
  const dataNilai = [
    {
      title: "Mata Pelajaran Kejuruan",
      data: [
        { mapel: "Pemrograman Web", nilai: 90 },
        { mapel: "Basis Data", nilai: 88 },
        { mapel: "Pemrograman Mobile", nilai: 92 },
        { mapel: "UI/UX Design", nilai: 85 },
      ],
    },
    {
      title: "Mata Pelajaran Umum",
      data: [
        { mapel: "Bahasa Indonesia", nilai: 87 },
        { mapel: "Matematika", nilai: 89 },
        { mapel: "Bahasa Inggris", nilai: 91 },
        { mapel: "Pendidikan Pancasila", nilai: 86 },
      ],
    },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Dashboard Nilai Siswa
      </Text>

      <SectionList
        sections={dataNilai}
        keyExtractor={(item, index) =>
          item.mapel + index
        }
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {section.title}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.mapel}>
              {item.mapel}
            </Text>

            <Text style={styles.nilai}>
              {item.nilai}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },

  sectionHeader: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 5,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 4,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  mapel: {
    fontSize: 16,
    color: "#333",
  },

  nilai: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
  },
});