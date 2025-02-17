import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Slider from '@react-native-community/slider';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { meditations } from '@/data';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function MeditationDetails(): JSX.Element {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const meditation = meditations.find((item) => item.id === Number(id));
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const loadAudio = async (): Promise<void> => {
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/meditations/audio1.mp3'),
      {
        shouldPlay: true,
        isLooping: false,
      },
      onPlaybackStatusUpdate
    );
    setSound(sound);
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus): void => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
      setDuration(status.durationMillis || 0);
      setPosition(status.positionMillis || 0);
    }
  };

  const handlePlayPause = async (): Promise<void> => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    } else {
      await loadAudio();
    }
  };

  const handleSliderValueChange = async (value: number): Promise<void> => {
    if (sound) {
      const seekPosition = value * duration;
      await sound.setPositionAsync(seekPosition);
    }
  };

  const formatTime = (millis: number): string => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!meditation) {
    return <Text>Meditation Not Found</Text>;
  }

  return (
    <SafeAreaView className="bg-orange-400 flex-1">
      <AnimatedBackground/>
      <View className="flex-1">
        <View className="flex-row justify-between items-center p-10">
          <Ionicons name="information-circle-outline" size={28} color="black" />
          <View className="bg-zinc-900 p-2 rounded-lg">
            <Text className="text-zinc-100 font-semibold">Today's Meditation</Text>
          </View>
          <Ionicons name="close" size={28} color="black" onPress={() => router.back()} />
        </View>
        <Text className="text-3xl mt-8 text-center font-semibold text-zinc-800">
          {meditation.title}
        </Text>
      </View>

      <Pressable
        onPress={handlePlayPause}
        className="bg-zinc-800 w-20 aspect-square self-center p-6 rounded-full items-center justify-center"
      >
        <FontAwesome6 name={isPlaying ? 'pause' : 'play'} size={24} color="snow" />
      </Pressable>

      <View className="flex-1">
        <View className="p-5 mt-auto gap-5">
          <View className="flex-row justify-between">
            <Feather name="airplay" size={24} color="black" />
            <MaterialCommunityIcons name="cog-outline" size={24} color="3A3937" />
          </View>

          <View>
            <Slider
              style={{ width: '100%', height: 40 }}
              value={position / duration || 0}
              onSlidingComplete={handleSliderValueChange}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#3A3937"
              maximumTrackTintColor="#3A393755"
              thumbTintColor="#3A3937"
            />
          </View>
          <View className="flex-row justify-between">
            <Text>{formatTime(position)}</Text>
            <Text>{formatTime(duration)}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
