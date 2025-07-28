import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>
            Invoice
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
