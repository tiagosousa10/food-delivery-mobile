import { CustomInputProps } from "@/type";
import React from "react";
import { Text, View } from "react-native";

const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntsry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  return (
    <View>
      <Text>CustomInput</Text>
    </View>
  );
};

export default CustomInput;
