import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Svg, { Path, Rect } from 'react-native-svg';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import Home from './pages/Home';
import News from './pages/News';
import Feed from './pages/Feed';
import Jogos from './pages/Jogos';
import More from './pages/More';
import NewsSingle from './pages/NewsSingle';
import Login from './pages/Login';
import Elenco from './pages/Elenco';
import ElencoSingle from './pages/ElencoSingle';
import Profile from './pages/Profile';
import Main from './pages/Main';
import Comissao from './pages/Comissao';
import Projeto from './pages/Projeto';
import CompleteProfile from './pages/CompleteProfile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
        }),
        Completar: createSwitchNavigator({
          Home,
          CompleteProfile,
        }),
        App: createBottomTabNavigator(
          {
            Home: {
              screen: createStackNavigator(
                {
                  Main,
                  NewsSingle,
                },
                {
                  headerMode: 'none',
                  navigationOptions: {
                    headerVisible: false,
                    tabBarIcon: ({ tintColor }) => (
                      <Svg width="30" height="30" viewBox="0 0 48 48">
                        <Path
                          fill={tintColor}
                          d="M33 9c-3.219 0-6.983 3.65-9 6-2.017-2.35-5.781-6-9-6-5.698 0-9 4.444-9 10.1C6 28.5 24 39 24 39s18-10.5 18-19.5C42 13.844 38.698 9 33 9z"
                          opacity="0.3"
                        ></Path>
                        <Path
                          fill={tintColor}
                          fillRule="evenodd"
                          d="M24 15c-2.017-2.35-5.781-6-9-6-5.698 0-9 4.444-9 10.1C6 28.5 24 39 24 39V15z"
                          clipRule="evenodd"
                        ></Path>
                      </Svg>
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
                      <View style={{ marginBottom: 8 }}>
                        <Svg width="30" height="30" viewBox="0 0 48 48">
                          <Path
                            fill={tintColor}
                            fillRule="evenodd"
                            d="M22 41.523c0 .742.962 1.033 1.374.416l13.849-20.773A.75.75 0 0036.599 20H26V6.477c0-.742-.962-1.033-1.374-.416L10.777 26.834A.75.75 0 0011.401 28H22v13.523z"
                            clipRule="evenodd"
                          ></Path>
                        </Svg>
                      </View>
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
                },
                {
                  headerMode: 'none',
                  navigationOptions: {
                    headerVisible: false,
                    tabBarIcon: ({ tintColor }) => (
                      <View style={{ marginBottom: 6 }}>
                        <Svg width="30" height="30" viewBox="0 0 48 48">
                          <Rect
                            width="6"
                            height="32"
                            x="26"
                            y="8"
                            fill={tintColor}
                            opacity="0.3"
                            rx="2"
                          ></Rect>
                          <Rect
                            width="6"
                            height="22"
                            x="16"
                            y="18"
                            fill={tintColor}
                            rx="2"
                          ></Rect>
                          <Rect
                            width="6"
                            height="18"
                            x="36"
                            y="22"
                            fill={tintColor}
                            rx="2"
                          ></Rect>
                          <Rect
                            width="6"
                            height="14"
                            x="6"
                            y="26"
                            fill={tintColor}
                            rx="2"
                          ></Rect>
                        </Svg>
                      </View>
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
                  Comissao,
                  Projeto,
                },
                {
                  headerMode: 'none',
                  navigationOptions: {
                    headerVisible: false,
                    title: 'Mais',
                    tabBarIcon: ({ tintColor }) => (
                      <Svg width="30" height="30" viewBox="0 0 48 48">
                        <Path
                          fill={tintColor}
                          fillRule="evenodd"
                          d="M10 28a4 4 0 100-8 4 4 0 000 8zM24 28a4 4 0 100-8 4 4 0 000 8zM38 28a4 4 0 100-8 4 4 0 000 8z"
                          clipRule="evenodd"
                        ></Path>
                      </Svg>
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
              activeTintColor: '#fc1936',
              inactiveTintColor: '#000000',
              style: {
                backgroundColor: '#ffffff',
                borderTopColor: '#ffffff',
                height: 60,
                paddingTop: 10,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'Completar' : 'Sign',
      }
    )
  );
