import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TargetScreen from './Components/TargetScreen/TargetScreen';
import Home from './Components/Home/Home';

const AppStack = createStackNavigator(
  {
    Home:{
      screen:Home,
      navigationOptions:()=>{return {headerShown:false}}
    },

  TargetScreen: {
   screen: TargetScreen
  }},
  {
    initialRouteName: 'Home'
  }
);

const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  );
};
const AppContainer = ()=>{return createAppContainer(createRootNavigator())}
export default AppContainer;
