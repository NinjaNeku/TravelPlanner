import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { Link } from "expo-router";

const Listings = ({ listings, category }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Update Listing");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderItems = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View className="bg-white p-2 mr-5 rounded-lg w-[220px] ">
            <View className="items-center">
              <Image
                source={{ uri: item.image }}
                className="h-[200px] w-[200px] rounded-lg mb-7 items-center"
              />
            </View>
            <View className="absolute top-[185px] right-[30px] bg-primaryColor rounded-full p-2 border-2 border-white">
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.white}
              />
            </View>
            <Text
              className="text-[16px] font-semibold text-black mb-2.5"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <View className="flex-row justify-between">
              <View className="flex-row items-center">
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text className="text-[12px] ml-1.5">{item.location}</Text>
              </View>
              <Text className="text-[12px] font-semibold text-primaryColor">
                ${item.price}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;
