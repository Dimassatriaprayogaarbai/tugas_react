import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function KategoriScrol() {
  const kategori = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Laravel",
    "Database",
  ];

  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.title}>
        Pembelajaran Interaktif
      </Text>

      {/* Kategori Materi */}
      <Text style={styles.categoryTitle}>
        Kategori Materi
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {kategori.map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <Text style={styles.categoryText}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Konten Artikel */}
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.articleScroll}
      >
        <Text style={styles.articleTitle}>
          Belajar Pemrograman Web
        </Text>

        <Text style={styles.articleText}>
          Pemrograman web adalah proses membuat dan mengembangkan
          aplikasi atau halaman yang dapat diakses melalui internet.
          Dalam pembelajaran ini, kita akan mempelajari beberapa
          teknologi dasar yang sering digunakan dalam pengembangan web.
        </Text>

        <Text style={styles.articleSubtitle}>
          HTML
        </Text>

        <Text style={styles.articleText}>
          HTML digunakan untuk membuat struktur halaman web.
          Dengan HTML, kita dapat membuat judul, paragraf, gambar,
          tombol, tabel, dan berbagai elemen lainnya.
        </Text>

        <Text style={styles.articleSubtitle}>
          CSS
        </Text>

        <Text style={styles.articleText}>
          CSS digunakan untuk mengatur tampilan halaman web.
          CSS dapat digunakan untuk mengatur warna, ukuran teks,
          jarak, posisi, dan tata letak halaman.
        </Text>

        <Text style={styles.articleSubtitle}>
          JavaScript
        </Text>

        <Text style={styles.articleText}>
          JavaScript digunakan untuk membuat halaman web menjadi
          lebih interaktif. Dengan JavaScript, kita dapat memberikan
          aksi ketika pengguna menekan tombol atau melakukan interaksi
          lainnya.
        </Text>

        <Text style={styles.articleSubtitle}>
          React
        </Text>

        <Text style={styles.articleText}>
          React merupakan library JavaScript yang digunakan untuk
          membuat antarmuka pengguna. React menggunakan konsep
          component sehingga tampilan dapat dibuat menjadi bagian-bagian
          yang lebih mudah digunakan kembali.
        </Text>

        <Text style={styles.articleSubtitle}>
          Kesimpulan
        </Text>

        <Text style={styles.articleText}>
          Dengan memahami HTML, CSS, JavaScript, dan React, kita dapat
          mulai membuat aplikasi web yang interaktif dan terstruktur.
          Pembelajaran dapat dilakukan secara bertahap dengan membuat
          berbagai proyek sederhana.
        </Text>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  categoryScroll: {
    maxHeight: 50,
    marginBottom: 20,
  },

  categoryItem: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 10,
  },

  categoryText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  articleScroll: {
    flex: 1,
  },

  articleTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  articleSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },

  articleText: {
    fontSize: 16,
    lineHeight: 25,
    color: "#444444",
    marginBottom: 10,
    textAlign: "justify",
  },
});