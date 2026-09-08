import  React  from "react"
import { Text, View } from "react-native";

export default function Kondisi() {

// let nilaiUjian = 80;

// let hasil = nilaiUjian >= 75
//   ? "Selamat, Anda Lulus!"
//   : "Maaf, Anda Belum Lulus.";

// console.log("SOAL 1");
// console.log(hasil);

// return (
//   <View>
//     <Text style={{color: nilaiUjian >= 75 ? "green" : "red"}}>{hasil}</Text>
//   </View>
// );

// soal nomer 2
// let suhuUdara = 38

// let peringatan = suhuUdara > 35 &&
//   "peringatan cuaca sangat panas hari ini!";

// console.log("soal 2");
// console.log(peringatan);

// return(
//   <View>
//     {suhuUdara > 35 && (
//        <Text>peringata:  cuaca sangat panas hari ini!</Text>
//     )}
//   </View>
// )

// soal nomer 3
// let isLoggedIn = true;
// let namaUser = "Budi"; 

// let statusLogin = isLoggedIn ? `halo. ${namaUser}!`:"Silahkan login terlebih dahulu";

// console.log("Soal 3");
// console.log(statusLogin);

// return(
//   <View>
//     <Text> {statusLogin}</Text>
//   </View>
// )

// soal nomer 4
// let totalBelanja = 600000;

// let diskon = totalBelanja > 500000
// ? "anda mendapat Diskon 20%!"
// : totalBelanja >= 200000
// ? "Anda mendapat diskon 10%!"
// : "Belanja lebih banyak untuk dapat diskon!";

// console.log("Soal 4");
// console.log(diskon);

// return(
//   <View>
//     <Text>{diskon}</Text>
//   </View>
// )

// soal nomer 5
// let jamSekarang = 19;

// let statusToko = jamSekarang >= 8 && jamSekarang <= 17
// ? "Toko Buku"
// : "Toko tutup";

// console.log("Soal 5");
// console.log(statusToko);

// return(
//   <View>
//     <Text>{statusToko}</Text>
//   </View>
// );

// soal nomer 6
// let isDarkMode = true;

// let backgroundColor = isDarkMode
// ? "#121212"
// : "FFFFF";

// let textColor = isDarkMode 
// ? "white"
// : "Black";

// console.log("Soal 6")
// console.log("Dark Mode:", isDarkMode);

// return (
//   <View style = {{background : backgroundColor, padding: 20}}>
//     <Text style = {{color : textColor}}>Mode: {isDarkMode ? "Dark Mode" : "Light Mode"}</Text>
//   </View>
// );

// soal nomer 7
// let password = "123";

// let errorPassword = password.length < 6 && "Password terlalu pendek. Minimal 6 karakter";

// console.log("Soal 7");
// console.log(errorPassword);

// return(
//   <View>{password.length < 6 && (
//     <Text>Password terlalu pendek. Minimal 6 karakter</Text>
//   )}
//   </View>
// );

// soal nomer 8 
// let jenisKendaraan = "Mobil";

// let tarif = jenisKendaraan === "Mobil"
// ? "Tarif Parkir: Rp 5.000/jam" 
// : "Tarif parkir: Rp 2.000/jam";

// console.log("Soal 8");
// console.log(tarif);so
// return(
//   <View>
//     <Text>{tarif}</Text>
//   </View>
// );

// soal nomer 9
// let stokBarang = 5;

// let statusStok;
// let warnaStok;

// if (stokBarang > 10) {
//   statusStok = "Stok Tersedia";
//   warnaStok = "green";
// } else if (stokBarang >= 1) {
//   statusStok = "Stok Terbatas! Segera Beli";
//   warnaStok = "orange";
// } else {
//   statusStok = "Stok Habis";
//   warnaStok = "red";
// }

// console.log("SOAL 9");
// console.log(statusStok);

// return (
//   <View>
//     <Text style={{ color: warnaStok }}>{statusStok}</Text>
//   </View>
// );

// soal nomer 10
let usiaPenonton = 15;

let kategori;

if (usiaPenonton < 13) {
  kategori = "Kategori: Semua Umur (SU)";
} else if (usiaPenonton >= 13 && usiaPenonton <= 17) {
  kategori = "Kategori: Remaja (R)";
} else {
  kategori = "Kategori: Dewasa (D)";
}

console.log("SOAL 10");
console.log(kategori);

return (
  <View>
    <Text>{kategori}</Text>
  </View>
);
}