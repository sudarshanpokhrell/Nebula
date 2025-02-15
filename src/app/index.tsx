import { Text, View, FlatList } from "react-native";
import { meditations } from "@/data";
import MeditationList from "@/components/MeditationList";

export default function HomeScreen() {
  return (
    <FlatList
      data={meditations}
      className="bg-white"
      contentContainerClassName="gap-2 p-3 "
      renderItem={({ item }) => <MeditationList meditation={item} />}
    />
  );
}
