import { Text, View, FlatList } from 'react-native';
import { meditations } from '@/data';
import MeditationList from '@/components/MeditationList';

export default function HomeScreen() {
  return (
    <FlatList
      data={meditations}
      keyExtractor={(item) => item.id.toString()}
      className="bg-gray-100"
      contentContainerClassName="gap-4 p-4"
      renderItem={({ item }) => <MeditationList meditation={item} />}
      ListHeaderComponent={() => (
        <View className=" p-2 border-b border-gray-200">
          <Text className="text-xl font-semibold text-gray-700">Good Morning ☀️, Sudarshan</Text>
          <Text className="text-sm text-gray-500 mt-2">Ready for your meditation journey today?</Text>
        
        </View>
      )}
    />
  );
}
