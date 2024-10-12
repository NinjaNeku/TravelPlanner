import { View, Text, Image } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import ListingData from "../../data/destinations.json";
import { TouchableOpacity, ScrollView } from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const listing = ListingData.find((item) => item.id == id);

  const router = useRouter();

  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollOffset.value, [0, 300], [0, -300]),
        },
      ],
    };
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View className="bg-white p-[6px] rounded-[10px]">
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View className="bg-white p-[6px] rounded-[10px]">
                <Ionicons name="bookmark-outline" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View className="bg-white flex-1">
        <Animated.ScrollView
          ref={scrollRef}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <Animated.Image
            source={{ uri: listing.image }}
            className="w-full h-[300px]"
            style={[imageAnimatedStyle]}
          />
          <View className="p-[10px] bg-white">
            <Text className="text-2xl font-medium text-black tracking-wider">
              {listing.name}
            </Text>
            <View className="flex-row mt-1 mb-5 items-center">
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color={Colors.primaryColor}
              />
              <Text className="text-sm ml-2 text-black">
                {listing.location}
              </Text>
            </View>
            <View className="my-[20px] px-2">
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <View className="bg-[#f4f4f4] p-2 rounded-lg mr-2">
                    <Ionicons
                      name="time"
                      size={20}
                      color={Colors.primaryColor}
                    />
                  </View>
                  <View>
                    <Text className="text-xs text-[#999]">Duration</Text>
                    <Text className="text-sm font-semibold">
                      {listing.duration} days
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center">
                  <View className="bg-[#f4f4f4] p-2 rounded-lg mr-2">
                    <Ionicons
                      name="star"
                      size={20}
                      color={Colors.primaryColor}
                    />
                  </View>
                  <View>
                    <Text className="text-xs text-[#999]">Rating</Text>
                    <Text className="text-sm font-semibold">
                      {listing.rating} / 5
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center">
                  <View className="bg-[#f4f4f4] p-2 rounded-lg mr-2">
                    <Ionicons
                      name="person"
                      size={20}
                      color={Colors.primaryColor}
                    />
                  </View>
                  <View>
                    <Text className="text-xs text-[#999]">Person</Text>
                    <Text className="text-sm font-semibold">
                      {listing.duration}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text className="text-[16px] leading-[23.5px] text-black tracking-[0.5px]">
              {listing.description}
            </Text>
          </View>
        </Animated.ScrollView>
      </View>
      <View className="absolute bottom-0 p-[20px] pb-[30px] w-full flex-row ">
        <TouchableOpacity
          onPress={() => {}}
          className="p-[20px] rounded-[10px] items-center bg-primaryColor flex-1 mr-6"
        >
          <Text className="text-white text-[16px] font-semibold uppercase">
            Book Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          className="p-[20px] rounded-[10px] items-center bg-black flex-2"
        >
          <Text className="text-white text-[16px] font-semibold uppercase">
            ${listing.price}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListingDetails;
