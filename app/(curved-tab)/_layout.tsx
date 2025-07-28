import CurvedTabBar from '@/components/CurvedTabBar';
import { Tabs } from 'expo-router';


export default function Layout() {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CurvedTabBar {...props} />}
        />
    );
}

