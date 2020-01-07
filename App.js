import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

//navigation
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';

//components
import ExploreScreen from './components/Explore';
import SavedScreen from './components/Saved';
import TripsScreen from './components/Trips';
import InboxScreen from './components/Inbox';
import ProfileScreen from './components/Profile';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}


const AppTabNavigator = createBottomTabNavigator({
  Explore:{
    screen:ExploreScreen,
    navigationOptions:{
      tabBarLabel:"EXPLORE",
      tabBarIcon:({tintColor}) =>(
        <Icon name="md-search" color={tintColor} size={24}/>
      )
    }
  },
  Saved:{
    screen:SavedScreen,
    navigationOptions:{
      tabBarLabel:"SAVED",
      tabBarIcon:({tintColor}) =>(
        <Icon name="md-heart-empty" color={tintColor} size={24}/>
      )
    }
  },
  Trips:{
    screen:TripsScreen,navigationOptions:{
      tabBarLabel:"TRIPS",
      tabBarIcon:({tintColor}) =>(
        <Icon name="md-car" color={tintColor} size={24}/>
      )
    }
  },
  Inbox:{
    screen:InboxScreen,
    navigationOptions:{
      tabBarLabel:"INBOX",
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-chatboxes" color={tintColor} size={24}/>
      )
    }
  },
  Profile:{
    screen:ProfileScreen,
    navigationOptions:{
      tabBarLabel:"PROFILE",
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-man" color={tintColor} size={24}/>
      )
    }
  }
},
{
  tabBarOptions:{
    activeTintColor:"red",
    inactiveTintColor:"grey",
    style:{
      elevation:5
    }
  }
})

const AppContainer = createAppContainer(AppTabNavigator);

