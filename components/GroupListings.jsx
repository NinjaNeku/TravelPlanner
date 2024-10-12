import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const GroupListings = ({ listings }) => {
  const renderItem = ({ item }) => {
    return (
      <View className="bg-white p-[10px] rounded-[10px] mr-5 flex-row items-center">
        <Image
          source={{ uri: item.image }}
          className="w-20 h-24 rounded-[10px] mr-[10px]"
        />
        <View>
          <Text className="text-[14px] font-semibold text-black mb-[8px]">
            {item.name}
          </Text>
          <View className="flex-row items-center">
            <Ionicons name="star" size={20} color={Colors.primaryColor} />
            <Text className="text-[14px] font-semibold text-black ml-[5px]">
              {item.rating}
            </Text>
            <Text className="text-[14px] text-[#999]">({item.reviews})</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View className="my-[20px]">
      <Text className="text-[22px] font-semibold text-black mb-[10px]">
        Top Travel Groups
      </Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListings;
