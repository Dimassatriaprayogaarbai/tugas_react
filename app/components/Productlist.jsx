import React from "react";
import { View, Text, FlatList } from "react-native";

const products = [
  {
    id: "1",
    nama: "Laptop",
    harga: 7500000,
  },
  {
    id: "2",
    nama: "Mouse",
    harga: 150000,
  },
  {
    id: "3",
    nama: "Keyboard",
    harga: 300000,
  },
  {
    id: "4",
    nama: "Headset",
    harga: 250000,
  },
  {
    id: "5",
    nama: "Monitor",
    harga: 2000000,
  },
];

const ProductItem = ({ nama, harga }) => {
  return (
    <View>
      <Text>Nama Produk: {nama}</Text>
      <Text>Harga: Rp{harga}</Text>
    </View>
  );
};

export default function ProductList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem
          nama={item.nama}
          harga={item.harga}
        />
      )}
    />
  );
}