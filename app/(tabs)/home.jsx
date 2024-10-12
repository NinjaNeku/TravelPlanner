import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useCustomHeaderHeight } from "@/hooks/useHeaderHeight";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import CategoryButton from "../../components/CategoryButton";
import Listings from "../../components/Listings";
import ListingData from "../../data/destinations.json";
import GroupListings from "../../components/GroupListings";
import groupData from "../../data/groups.json";

export default function Home() {
  const headerHeight = useCustomHeaderHeight();
  const [category, setCategory] = useState("All");

  const onCatChanged = (category) => {
    setCategory(category);
  };

  return (
    <View
      className="flex-1 mt-2.5 ml-4 mr-5"
      style={{ paddingTop: headerHeight }}
    >
      <ScrollView showsVerticalScrollIndicator={false} className="mb-5">
        <Text
          style={{ color: Colors.black }}
          className="text-[30px] font-extrabold "
        >
          Explore the beautiful world!
        </Text>
        <View className="flex-row my-5 items-center">
          <View className="flex-1 flex-row bg-white p-4 rounded-lg items-center">
            <Ionicons name="search" size={18} style={{ marginRight: 20 }} />
            <TextInput placeholder="Search" />
          </View>
          <TouchableOpacity
            className="bg-primaryColor p-3 rounded-xl ml-3"
            onPress={() => {}}
          >
            <Ionicons
              style={{ color: Colors.white }}
              name="options"
              size={28}
            />
          </TouchableOpacity>
        </View>
        <CategoryButton onCatChanged={onCatChanged} />

        <Listings listings={ListingData} category={category} />

        <GroupListings listings={groupData} />
      </ScrollView>
    </View>
  );
}
