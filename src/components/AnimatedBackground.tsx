import { useEffect } from "react";
import { useWindowDimensions, View } from "react-native";
import Animated, {
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedBackground() {
  const { height } = useWindowDimensions();

  const top1 = useSharedValue(0.3 * height);
  const top2 = useSharedValue(0.5 * height);
  const top3 = useSharedValue(0.7 * height);

  useEffect(() => {
    top1.value = withRepeat(
      withTiming(0.2 * height, { duration: 4000 }),
      -1,
      true
    );
    top2.value = withDelay(
      1000,
      withRepeat(withTiming(0.4 * height, { duration: 4000 }), -1, true)
    );
    top3.value = withDelay(
      2000,
      withRepeat(withTiming(0.6 * height, { duration: 4000 }), -1, true)
    );
  });

  return (
    <View className=" absolute top-0 bottom-0 left-0 right-0  items-center">
      <Animated.View
        className="bg-yellow-400 absolute w-[400%] rounded-full aspect-square "
        style={{ top: top1 }}
      />
      <Animated.View
        className="bg-yellow-300 absolute w-[400%] rounded-full aspect-square "
        style={{ top: top2 }}
      />
      <Animated.View
        className="bg-orange-500 absolute w-[400%] rounded-full aspect-square "
        style={{ top: top3 }}
      />
    </View>
  );
}
