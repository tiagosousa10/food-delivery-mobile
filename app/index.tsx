import { Text, View } from "react-native";
import "./globals.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl text-center font-bold text-primary font-quicksand-bold">
        Welcome to Food App!
      </Text>
    </View>
  );
}
