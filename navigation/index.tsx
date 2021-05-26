/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, TouchableOpacity } from 'react-native';
import {View} from 'react-native'
import {MaterialCommunityIcons, Octicons, AntDesign, MaterialIcons, FontAwesome5} from '@expo/vector-icons'

import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

    // const navigation = useNavigation()

  return (
    <Stack.Navigator screenOptions={{
       headerStyle: {
           backgroundColor: Colors.light.tint,
           shadowOpacity:0, // ios specific
           elevation:0 // android specific
       },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle:{
           fontWeight: 'bold',
            marginHorizontal: 16
        }
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{title: "Let's chat!", headerRight: () => (
              <View style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', marginRight: 10 }}>
                  <Octicons name='search' size={22} color={Colors.light.background}/>
                  <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background}/>
              </View>
          )}}/>
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={({route, navigation}) => ({
          title: route.params.name,
          headerLeft: () => (
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="left" size={22} color={Colors.light.background} style={{marginTop: 4, marginLeft: 8}}/></TouchableOpacity>
               <Image source={{uri: route.params.imageUri}} style={{height: 30, width: 30, borderRadius: 15, marginLeft: 16}}/>
              </View>
              ),
          headerRight: () => (
              <View style={{flexDirection:'row', width: 100, justifyContent: 'space-between'}}>
                  <MaterialIcons name='call' size={22} color={Colors.light.background}/>
                  <FontAwesome5 name='video' size={22} color={Colors.light.background}/>
                  <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background}/>
              </View>
          )
      })}
      />
    </Stack.Navigator>
  );
}
