import { Link, router, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { meditations } from "@/data";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams();
  const {top} = useSafeAreaInsets()
  const meditation = meditations.find((item) => item.id === Number(id));

  if (!meditation) {
    return <Text>Mediation Not Found</Text>;
  }
  return (
    <SafeAreaView >
      <Text className="text-2xl">{meditation?.title}, {top}</Text>

      <Ionicons
        onPress={() => router.back()}
        name="close"
        size={24}
        color="black"
        className="absolute right-4"
        style={{top: top + 10}}
      />

    </SafeAreaView>
  );
}
