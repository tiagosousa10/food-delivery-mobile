import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function _layout() {
  return (
    <SafeAreaView>
      <Text>Auth_layout</Text>
      <Slot />
    </SafeAreaView>
  );
}
