import { MenuItem } from "@/type";
import React from "react";
import { Image, Platform, Text, TouchableOpacity } from "react-native";

const MenuCard = ({ item: { name, price, image_url } }: { item: MenuItem }) => {
  //   console.log("🚀 ~ MenuCard ~ image_url:", image_url);

  return (
    <TouchableOpacity
      className="menu-card"
      style={
        Platform.OS === "android"
          ? { elevation: 10, shadowColor: "#878787" }
          : {}
      }
    >
      {image_url && (
        <Image
          source={{ uri: image_url }}
          className="size-32 absolute -top-10"
          resizeMode="contain"
        />
      )}
      <Text
        className="text-center base-bold text-dark-100 mb-2"
        numberOfLines={2}
      >
        {name}
      </Text>
      <Text className="body-regular text-gray-200 mb-4">From ${price}</Text>
      <TouchableOpacity>
        <Text className="paragraph-bold text-primary">Add to Cart +</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MenuCard;
