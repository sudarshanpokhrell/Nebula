import { Pressable, Text, View } from "react-native";
import { Meditation } from "@/types";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
export default function MeditationList({
  meditation,
}: {
  meditation: Meditation;
}) {
  return (
    <Link href={`/mediation/${meditation.id}`} asChild>
      <Pressable className="flex-row items-center gap-3">
        <View className="p-3 rounded-full bg-green-600">
          <FontAwesome name="check" size={12} color="white" />
        </View>
        <View className="flex-1 p-5 m-3 border-2 border-gray-300 rounded-2xl">
          <Text className="font-semibold text-2xl mb-2">
            {meditation.title}
          </Text>
          <View className="flex flex-row items-center gap-2">
            <FontAwesome6 name="clock" size={16} color="#6B7280" />
            <Text className="text-gray-600">{meditation.duration} min</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
