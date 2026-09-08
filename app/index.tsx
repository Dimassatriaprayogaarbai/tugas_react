import React from "react";
import { Text, View } from "react-native";

import Var from "./Var";
import Opacity from "./opacity";
import Array from "./Array";
import Kondisi from "./Kondisi"

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <Var/>
     <Opacity/>
     <Array/>
     <Kondisi/>

    </View>
  );
}
