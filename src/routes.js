import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from "react-native-vector-icons/Ionicons";
Icon.loadFont()

import Home from "./pages/Home";
import News from "./pages/News";
import Feed from "./pages/Feed";
import Jogos from "./pages/Jogos";
import More from "./pages/More";

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      Home
    }),
    App: createBottomTabNavigator({
      Home: {
        screen: createStackNavigator({
          Home,
        }, {
          headerMode: 'none',
          navigationOptions: {
            headerVisible: false,
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" size={30} color={tintColor} />)
          }
        })
      },
      News,
      Feed,
      Jogos,
      More
    },
    {
      tabBarOptions: {
        showLabel: true,
        keyboardHidesTabBar: true,
        activeTintColor: '#D3004C',
        inactiveTintColor: '#000000',
        style: {
          backgroundColor: '#ffffff',
          borderTopColor: '#f6f6f6',
          height: 60,
          paddingTop: 15
        }
      }
    }
    )
  }, {
    initialRouteName: 'App',
  })
)

export default Routes;
