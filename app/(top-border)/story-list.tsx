import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>
            Story
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
