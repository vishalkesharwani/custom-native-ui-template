import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Dimensions, Image, Text, View } from 'react-native';

const ACTIVE_BG = '#202634';
const BORDER_TOP = '#386BF6';

const { width } = Dimensions.get('window');

const TabIcon = ({
  name,
  color,
  label,
  focused,
  position = 'flex-start'
}: {
  name: string | any;
  color?: string;
  label: string;
  focused: boolean;
  position?: string | any;
}) => {
  if (focused) {
    return (
      <View
        style={{
          backgroundColor: ACTIVE_BG,
          // flexDirection: 'row',
          alignItems: 'center',
          // paddingHorizontal: 14,
          // paddingVertical: 9,
          // borderRadius: 30,
          width: width / 3,
          // height:58,
          borderTopWidth: 2, borderTopColor: BORDER_TOP,
          position: 'absolute', bottom: -17,
          // flex:1,
          padding: 7
        }}
      >
        {/* <IconSymbol size={24} name={name} color={BORDER_TOP} /> */}
        <Image source={name} style={{ width: 24, height: 24 }} />
        <Text style={{ color: BORDER_TOP, fontSize: 12, fontWeight: '600' }}>
          {label}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: '#0F0F0F',
        // flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 14,
        // paddingVertical: 9,
        // borderRadius: 30,
        width: width / 3,
        // height:50,
        borderTopWidth: 1, borderTopColor: '#0F0F0F',
        position: 'absolute', bottom: -17,
        // flex:1
        paddingHorizontal: 7,
        paddingVertical: 17
      }}
    >
      {/* <IconSymbol size={24} name={name} color="white" /> */}
      <Image source={name} style={{ width: 24, height: 24 }} />
      {/* <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>
        {label}
        </Text> */}
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingVertical: 8
        },
        // Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: 'absolute',
        //   },
        //   default: {},
        // }),
        tabBarLabel: () => null,
      }}>


      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={focused ? require('../../assets/images/icons/home-filled.png') : require('../../assets/images/icons/home-outline.png')} label="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="story-list"
        options={{
          title: 'list',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={focused ? require('../../assets/images/icons/list-filled.png') : require('../../assets/images/icons/list-outlined.png')} label="list" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name={focused ? require('../../assets/images/icons/profile-filled.png') : require('../../assets/images/icons/profile-outlined.png')} label="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>

    //     <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //     tabBarButton: HapticTab,
    //     tabBarBackground: TabBarBackground,
    //     tabBarShowLabel: false, // We'll handle label inside icon
    //     tabBarStyle: {
    //       backgroundColor: '#0D0D0D', // Or your dark base
    //       borderTopWidth: 0,
    //       height: 70,
    //       borderTopLeftRadius: 16,
    //       borderTopRightRadius: 16,
    //       // overflow: 'hidden',
    //     },
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color, focused }) => (
    //         <View
    //           style={{
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             backgroundColor: focused ? '#0C1321' : 'transparent', // Dark blue background
    //             borderTopWidth: focused ? 2 : 0,
    //             borderTopColor: focused ? '#007AFF' : 'transparent', // Bright blue
    //             paddingTop: 8,
    //             paddingBottom: 6,
    //             paddingHorizontal: 20,
    //             borderTopLeftRadius: 12,
    //             borderTopRightRadius: 0,
    //             width: '100%',
    //           }}
    //         >
    //           <IconSymbol size={20} name="house.fill" color={focused ? '#007AFF' : '#8E8E93'} />
    //           {focused && (
    //             <Text style={{ color: '#007AFF', fontSize: 12, fontWeight: '600', marginTop: 4 }}>Home</Text>
    //           )}
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //   name="profile"
    //   options={{
    //     title: 'Profile',
    //     tabBarIcon: ({ color, focused }) => (
    //       <View
    //         style={{
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //           backgroundColor: focused ? '#0C1321' : 'transparent',
    //           borderTopWidth: focused ? 2 : 0,
    //           borderTopColor: focused ? '#007AFF' : 'transparent',
    //           paddingTop: 8,
    //           paddingBottom: 6,
    //           paddingHorizontal: 20,
    //           borderTopLeftRadius: 0,
    //           borderTopRightRadius: 12,
    //           width: '100%',
    //         }}
    //       >
    //         <IconSymbol size={20} name="person.crop.circle" color={focused ? '#007AFF' : '#8E8E93'} />
    //         {focused && (
    //           <Text style={{ color: '#007AFF', fontSize: 12, fontWeight: '600', marginTop: 4 }}>Profile</Text>
    //         )}
    //       </View>
    //     ),
    //   }}
    // />

    // <Tabs.Screen
    //   name="explore"
    //   options={{
    //     title: 'Explore',
    //     tabBarIcon: ({ color, focused }) => (
    //       <View
    //         style={{
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //           backgroundColor: focused ? '#0C1321' : 'transparent',
    //           borderTopWidth: focused ? 2 : 0,
    //           borderTopColor: focused ? '#007AFF' : 'transparent',
    //           paddingTop: 8,
    //           paddingBottom: 6,
    //           paddingHorizontal: 20,
    //           borderTopLeftRadius: 0,
    //           borderTopRightRadius: 12,
    //           width: '100%',
    //         }}
    //       >
    //         <IconSymbol size={20} name="person.crop.circle" color={focused ? '#007AFF' : '#8E8E93'} />
    //         {focused && (
    //           <Text style={{ color: '#007AFF', fontSize: 12, fontWeight: '600', marginTop: 4 }}>Profile</Text>
    //         )}
    //       </View>
    //     ),
    //   }}
    // />
    // </Tabs>
  );
}
