import React from "react";
import { View } from "react-native";

import Var from "./Var";
import Opacity from "./opacity";
import Array from "./Array";
import Kondisi from "./Kondisi";
import Fungsi from "./Fungsi";
import Loop from "./Loop";
import UserCard from "./components/Usercard";
import LoginForm from "./components/Loginform";
import ProductList from "./components/Productlist";
import KategoriScroll from "./components/Kategoriscroll";
import Button from "./components/Button";
import FetchData from "./components/Fetchdata";
import CustomImage from "./components/Customimage";
import NilaiSiswa from "./components/Nilaisiswa";
import ModePicker from "./components/Modepicker";
import PrivacyPolicy from "./components/Privacypolicy";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Var />
      <Opacity />
      <Array />
      <Kondisi />
      <Fungsi />
      <Loop />

      {/* <UserCard /> */}
      {/* <LoginForm /> */}
      {/* <ProductList/> */}
      {/* <KategoriScroll/> */}
      {/* <Button/> */}
      {/* <FetchData/> */}
      {/* <CustomImage/> */}
      {/* <NilaiSiswa/> */}
      {/* <ModePicker/> */}
      <PrivacyPolicy/>
    </View>
    
  );
}