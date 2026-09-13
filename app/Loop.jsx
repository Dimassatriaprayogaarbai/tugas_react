import React from "react";
import { Text, View } from "react-native";

export default function Loop() {

      // SOAL LOOP NO 1 
   //  for (let Tiket = 1; Tiket <= 8; Tiket++) {
   //      console.log("Tiket Antrean No: " + Tiket);
   //  }
     
  // SOAL LOOP NO 2
    // const hitungMundur = [];
    // for (let i = 5; i >= 1; i--) {
    //     console.log("Hitung Mundur: " + i);
    //     hitungMundur.push(
    //         <Text key={i}>Hitung Mundur: {i}</Text>
    //     );
    // }

    // console.log("Roket Meluncur!");

    // return (
    //     <View>
    //         {hitungMundur}
    //         <Text style={{ color: 'red' }}>
    //             Roket Meluncur!
    //         </Text>
    //     </View>
    // );
  
  // SOAL LOOP NO 3
    // let jumlah = 0;
    // const daftarAkumulasi = [];

    // for (let deret = 5; deret > 0; deret--) {
    //     jumlah += deret;
    //     console.log(`Nilai kupon: ${deret} | Total Poin Saat Ini: ${jumlah}`);
        
    //     daftarAkumulasi.push(
    //         <Text key={deret}>
    //             Tambah {deret} poin. Total Saat Ini: {jumlah}
    //         </Text>
    //     );
    // }

    // return (
    //     <View>
    //         <Text>Log Akumulasi Kasir:</Text>
    //         {daftarAkumulasi}
            
    //         <Text style={{color: 'blue' }}>
    //             Total Poin Harian Akhir: {jumlah}
    //         </Text>
    //     </View>
    // );
  
 // SOAL LOOP NO 4
    // const daftarMejaVIP = [];

    // for (let deret = 2; deret < 10; deret +=2) {
    //     console.log('Meja Vip Nomor: ${deret}');
    //     daftarMejaVIP.push(
    //         <Text key ={deret}>Meja Vip Nomor: {deret}</Text>
    //     );
    // }

    // return (
    //     <View>
    //         <Text>Daftar Meja VIP yang Disiapkan: </Text>
    //         {daftarMejaVIP}
    //     </View>
    // );
   
  // SOAL LOOP NO 5
    // const logPemantauan = [];
    
    // for (let i = 0; i <= 6; i++) {
    //     if (i === 3) {
    //         console.log("Peringatan: Suhu Mesin Stabil!");
    //         logPemantauan.push(
    //             <Text key={i} style={{ color: 'orange'}}>
    //                 Peringatan: Suhu Mesin Stabil!
    //             </Text>
    //         );
    //     } else {
    //         console.log(`Indeks: ${i}`);
        
    //         logPemantauan.push(
    //             <Text key={i}>Indeks: {i}</Text>
    //         );
    //     }
    // } 
    
    // return (
    //     <View style={{ padding: 20 }}>
    //         <Text>
    //             Log Sistem Pemantau Suhu:
    //         </Text>
    //         {logPemantauan}
    //     </View>
    // );
  
 // SOAL LOOP NO 6
    // let flag = 1;
    // const daftarAntrean = [];
    
    // while (flag < 10) {
    //     console.log ('Memanggil nasabah antrean ke-${flag}');
    //     daftarAntrean.push(
    //         <Text key={flag}>Memanggil nasabah antrean ke-{flag}</Text>
    //     );
    //     flag++;
    // }

    // return (
    //     <View>
    //         <Text>Sistem Antrean Bank: </Text>
    //         {daftarAntrean}
    //     </View>
    // );
   
 // SOAL LOOP NO 7
    // let deret = 4;
    // let jumlah = 0;
    // const logTabungan = [];

    // while (deret > 0) {
    //     jumlah += deret;

    //     console.log (`Menabung: ${deret} | Total Tabungan Saat Ini: ${jumlah}`)

    //     logTabungan.push (
    //         <Text key={deret}>Menabung: {deret}. Total: {jumlah}</Text>
    //     );
    //     deret--;
    // }

    // return (
    //     <View>
    //         <Text>Catatan Celengan Siswa: </Text>
    //         {logTabungan}
    //     </View>
    // );
   
 // SOAL LOOP NO 8
    // let i = 0;
    // const logSensor = [];

    // while (i < 5) {
    //     if (i === 3) {
    //         console.log("Awas Halangan Dekat!");
    //         logSensor.push(
    //             <Text key={i} style={{ color: 'red'}}>
    //                 Awas Halangan Dekat!
    //             </Text>
    //         );
    //     } else {
    //         console.log(`Jarak aman. Posisi iterasi: ${i}`);
    //         logSensor.push(
    //             <Text key={i}>Jarak aman. Posisi iterasi: {i}</Text>
    //         );
    //     }
    //     i++;
    // }

    // return (
    //     <View style={{ padding: 20 }}>
    //         <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 16 }}>
    //             Status Sensor Parkir Ultrasonik:
    //         </Text>
    //         {logSensor}
    //     </View>
    // );
   
 // SOAL LOOP NO 9
    // let flag = 1;
    // const logAbsensi = [];

    // while (flag < 10) {
    //     console.log('Iterasi ke-' + flag);

    //     logAbsensi.push(
    //         <Text key={flag}>Sistem absensi memproses data ke-{flag}</Text>
    //     );
    //     flag++;
    // }

    // return (
    //     <View>
    //         <Text style={{ fontWeight: 'bold'}}>
    //             Perbaikan Bug Loading Absensi:
    //         </Text>
    //         {logAbsensi}
    //     </View>
    // );
    // ALASAN INFINITE LOOP: Terjadi karena tidak ada increment (flag++). Akibatnya, nilai flag terus mematung di angka 1. Kondisi (flag < 10) menjadi TRUE selamanya sehingga loop tidak memiliki jalan keluar untuk berhenti.

  // SOAL LOOP NO 10
    // const hasilUndian = [];

    // for (let i = 1; i <= 10; i++) {
    //     let kategori = "";

    //     if (i % 2 === 0) {
    //         kategori = "Kupon Genap";
    //     } else {
    //         kategori = "Kupon Ganjil";
    //     }
        
    //     console.log(`Nomor ${i}: ${kategori}`);

    //     hasilUndian.push (
    //         <Text key={i}>Nomor {i}: {kategori}</Text>
    //     )
    // }

    // return (
    //     <View style={{ padding: 20 }}>
    //         <Text style={{ fontWeight: 'bold'}}>
    //             Undian Pemenang Jalan Sehat:
    //         </Text>
    //         {hasilUndian}
    //     </View>
    // );
}