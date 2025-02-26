import { Pressable, Text, View, Image } from 'react-native';
import { Meditation } from '@/types';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

export default function MeditationList({ meditation }: { meditation: Meditation }) {
  return (
    <Link href={`/mediation/${meditation.id}`} asChild>
      <Pressable className="flex-row items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
        {/* Image section */}
        <View className="w-24 h-24 overflow-hidden rounded-xl">
          <Image
            source={{ uri: meditation.image }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </View>

        {/* Meditation Info */}
        <View className="flex-1">
          <Text className="font-semibold text-xl text-gray-800 mb-1">{meditation.title}</Text>
          <View className="flex flex-row items-center gap-2">
            <FontAwesome6 name="clock" size={16} color="#6B7280" />
            <Text className="text-gray-600">{meditation.duration} min</Text>
          </View>
        </View>

        {/* Pro Badge */}
        {meditation.pro && (
          <View className="w-20 h-8 flex items-center justify-center bg-green-500 rounded-xl">
            <Text className="text-white text-xs font-semibold">Pro</Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}
