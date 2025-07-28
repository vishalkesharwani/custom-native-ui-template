import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Ionicons, } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const { width } = Dimensions.get('window');
const height = 70;

const CurvedTabBar = ({ state, descriptors, navigation }: any) => {
  // const icons: any = {
  //   feed: 'apps',
  //   menu: 'menu',
  //   search: 'magnify',
  //   profile: 'account-outline',
  // };

  // const icons: any = {
  //   feed: { focused: 'apps', unfocused: 'apps-box' },
  //   search: { focused: 'magnify', unfocused: 'magnify' },
  //   profile: { focused: 'account', unfocused: 'account-outline' },
  //   menu: { focused: 'menu-open', unfocused: 'menu' },
  // };

  const icons: any = {
    feed: { unfocused: require('../assets/images/icons/feed.png'), focused: require('../assets/images/icons/feedfilled.png'), width: 20, height: 20 },
    search: { unfocused: require('../assets/images/icons/search.png'), focused: require('../assets/images/icons/searchfilled.png'), height: 19, width: 19 },
    profile: { unfocused: require('../assets/images/icons/user.png'), focused: require('../assets/images/icons/userfilled.png'), height: 20, width: 20 },
    menu: { focused: require('../assets/images/icons/userfilled.png'), unfocused: require('../assets/images/icons/user.png'), height: 20, width: 20 },
  };

  const orderedRoutes = ['feed', 'search', 'profile', 'menu'];

  const [user, setUser] = React.useState<any>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const insets = useSafeAreaInsets();


  return (
    <View style={[styles.container, { bottom: insets.bottom - 9.5 }]}>

      <Svg
        width={width}
        height={height + 42} // more height to account for shadow
        style={StyleSheet.absoluteFill}
        viewBox={`0 0 ${width} ${height + 40}`}
      >

        <Path
          d={`M0,25 
        H${(width - 100) / 2}
        C${width / 2 - 25},25 ${width / 2 - 25},0 ${width / 2},0
        C${width / 2 + 25},0 ${width / 2 + 25},25 ${(width + 100) / 2},25
        H${width}
        V${height + 20}
        H0
        Z`}
          fill="#966CE5"
          opacity={0.08}
          transform="translate(0, -1)"
        />
        <Path
          d={`M0,25 
        H${(width - 100) / 2}
        C${width / 2 - 25},25 ${width / 2 - 25},0 ${width / 2},0
        C${width / 2 + 25},0 ${width / 2 + 25},25 ${(width + 100) / 2},25
        H${width}
        V${height + 20}
        H0
        Z`}
          fill="#966CE5"
          opacity={0.1}
          transform="translate(0, -1)"
        />

        {/* Main white shape on top */}
        <Path
          fill="#fff"
          d={`M0,25 
      H${(width - 100) / 2}
      C${width / 2 - 25},25 ${width / 2 - 25},0 ${width / 2},0
      C${width / 2 + 25},0 ${width / 2 + 25},25 ${(width + 100) / 2},25
      H${width}
      V${height + 20}
      H0
      Z`}
        />
      </Svg>

      {/* Floating FAB */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          navigation.navigate('post')
        }}
      >
        {/* <Ionicons name="add" size={30} color="#fff" /> */}
        <Image source={require('../assets/images/icons/post.png')} style={{ width: 60, height: 60 }} />
      </TouchableOpacity>

      <View style={styles.tabItems}>
        {orderedRoutes.map((routeName) => {
          const route = state.routes.find((r: any) => r.name === routeName);
          if (!route) return null;

          const index = state.routes.findIndex((r: any) => r.key === route.key);
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tabButton}
            >

              <Image source={isFocused ? icons[route.name].focused : icons[route.name].unfocused} style={{ width: icons[route.name].width, height: icons[route.name].height }} />
              <Text style={[styles.label, isFocused && styles.activeLabel]}>
                {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // bottom: 39,
    // bottom:insets.bottom,
    // bottom: -10,
    width: '100%',
    height: height + 30,
  },
  fab: {
    position: 'absolute',
    top: 0,
    left: width / 2 - 30,
    // width: 40,
    // height: 40,
    borderRadius: 35,
    // backgroundColor: '#1A73E8',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 5,
    // shadowColor: '#000',
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
  },
  tabItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height,
    marginTop: 35,
    backgroundColor: 'transparent',
  },
  tabButton: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 11,
    color: '#999',
  },
  activeLabel: {
    color: '#1A73E8',
  },
});

export default CurvedTabBar;
