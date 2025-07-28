import { router } from "expo-router";
import { Button, StatusBar, Text, View } from "react-native";

export default function Screen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 15, gap: 20 }}>
            <Text>
                feed
            </Text>

            <Button title="floating-tabs" onPress={() => router.push('/(floating-tabs)')} />
            <Button title="Border Top" onPress={() => router.push('/(top-border)')} />
        </View>
    );
}
