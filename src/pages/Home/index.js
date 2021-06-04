import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';
import Details from '../details';

const Stack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Info') {
            iconName = 'info';
          } else if (route.name === 'Market') {
            iconName = 'shopping-cart';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <HomeTabs.Screen name="Info" component={Info} />
      <HomeTabs.Screen name="Market" component={Market} />
    </HomeTabs.Navigator>
  );
};

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="homeStack">
      <Stack.Screen
        name='detailScreen'
        component={Details}
        options={({ navigation, route }) => ({
          title: 'Detail',
          headerStyle: {
          },
          headerTintColor: 'black',
          headerTitleStyle: {},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingHorizontal: 10 }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text>Back</Text>
            </TouchableOpacity>
          ),
        })} />
      <Stack.Screen
        name='homeStack'
        component={HomeTab}
        options={({ navigation, route }) => ({
          title: 'Choose a beam',
          headerStyle: {
          },
          headerShown: false,
        })} />
    </Stack.Navigator>)
}


export default Home;
