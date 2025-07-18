import { MenuItem } from "@/type";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

const MenuCard = ({ item: { name, price, image_url } }: { item: MenuItem }) => {
  console.log("🚀 ~ MenuCard ~ image_url:", image_url);

  return (
    <TouchableOpacity>
      {image_url && (
        <Image
          source={{ uri: image_url }}
          className="size-32 absolute -top-10"
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export default MenuCard;
