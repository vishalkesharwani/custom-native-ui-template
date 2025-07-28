import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>
            Profile
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
