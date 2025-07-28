import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ACTIVE_COLOR = 'red'; // Red from your image
const INACTIVE_COLOR = 'red';
const ACTIVE_BG = 'red';

const TabIcon = ({
  name,
  color,
  label,
  focused,
}: {
  name: string | any;
  color: string;
  label: string;
  focused: boolean;
  position?: string | any;
}) => {
  if (focused) {
    return (
      <View
        style={{
          backgroundColor: ACTIVE_BG,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 14,
          paddingVertical: 9,
          borderRadius: 30,
          width: 98,
          height: 40
        }}
      >
        {/* <IconSymbol size={16} name={name} color="white" /> */}
        <Image source={name} style={{ width: 21, height: 21 }} />
        <Text style={{ color: 'white', marginLeft: 6, fontSize: 10, fontWeight: '600' }}>
          {label}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 40, }}>
      {/* <IconSymbol size={22} name={name} color={color} /> */}
      <Image source={name} style={{ width: 21, height: 21 }} />
    </View>
  );
};

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: 'absolute',
          bottom: insets.bottom + 10,
          left: 15,
          right: 15,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: '#eee',
          backgroundColor: 'white',
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          height: 55,
          marginHorizontal: 10,
          paddingHorizontal: 15,
          paddingTop: 18,

        },
        tabBarItemStyle: {
          paddingHorizontal: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'My Lots',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={focused ? require(`../../assets/images/icons/lots-filled.png`) : require(`../../assets/images/icons/lots.png`)} label="My Lots" color={INACTIVE_COLOR} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="invoice"
        options={{
          title: 'Invoice',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={focused ? require(`../../assets/images/icons/invoice-filled.png`) : require(`../../assets/images/icons/invoice.png`)} label="Invoice" color={INACTIVE_COLOR} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="bale"
        options={{
          title: 'Bale',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={focused ? require(`../../assets/images/icons/bale-filled.png`) : require(`../../assets/images/icons/bale.png`)} label="Bale" color={INACTIVE_COLOR} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={focused ? require(`../../assets/images/icons/profile-filled.png`) : require(`../../assets/images/icons/profile.png`)} label="Profile" color={INACTIVE_COLOR} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
