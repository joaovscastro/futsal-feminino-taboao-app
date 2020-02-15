import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import Home from './pages/Home';
import News from './pages/News';
import Feed from './pages/Feed';
import Jogos from './pages/Jogos';
import More from './pages/More';
import NewsSingle from './pages/NewsSingle';
import JogosSingle from './pages/JogosSingle';
import Login from './pages/Login';
import Elenco from './pages/Elenco';
import ElencoSingle from './pages/ElencoSingle';
import Profile from './pages/Profile';
import Main from './pages/Main';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
        }),
        App: createBottomTabNavigator(
          {
            Home: {
              screen: createStackNavigator(
                {
                  Home,
                },
                {
                  headerMode: 'none',
                  navigationOptions: {
                    headerVisible: false,
                    tabBarIcon: ({ tintColor }) => (
                      <Icon name="home-outline" size={30} color={tintColor} />
                    ),
                  },
                }
              ),
            },
            News: {
              screen: createStackNavigator(
                {
                  News,
                  NewsSingle,
                },
                {
                  headerMode: 'none',
                  navigationOptions: {
                    headerVisible: false,
                    title: 'Notícias',
                    tabBarIcon: ({ tintColor }) => (
                      <Icon name="newspaper" size={30} color={tintColor} />
                    ),
                  },
                }
              ),
            },
            Feed,
            Jogos: {
              screen: createStackNavigator(
                {
                  Jogos,
                  JogosSingle,
                },
                {
                  headerMode: 'none',
                  navigationOptions: {
                    headerVisible: false,
                    tabBarIcon: ({ tintColor }) => (
                      <Icon name="soccer-field" size={30} color={tintColor} />
                    ),
                  },
                }
              ),
            },
            More: {
              screen: createStackNavigator(
                {
                  More,
                  Elenco,
                  ElencoSingle,
                  Profile,
                },
                {
                  headerMode: 'none',
                  navigationOptions: {
                    headerVisible: false,
                    title: 'Mais',
                    tabBarIcon: ({ tintColor }) => (
                      <Icon name="more" size={25} color={tintColor} />
                    ),
                  },
                }
              ),
            },
          },
          {
            tabBarOptions: {
              showLabel: true,
              keyboardHidesTabBar: true,
              activeTintColor: '#EC2840',
              inactiveTintColor: '#000000',
              style: {
                backgroundColor: '#ffffff',
                borderTopColor: '#f6f6f6',
                height: 60,
                paddingTop: 15,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
