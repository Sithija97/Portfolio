import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//navigation
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';

//components
import ExploreScreen from './components/Explore';
import SavedScreen from './components/Saved';
import TripsScreen from './components/Trips';
import InboxScreen from './components/Inbox';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}


const AppTabNavigator = createBottomTabNavigator({
  Explore:{
    screen:ExploreScreen
  },
  Saved:{
    screen:SavedScreen
  },
  Trips:{
    screen:TripsScreen
  },
  Inbox:{
    screen:InboxScreen
  }
},{
  initialRouteName:"Explore"
})

const AppContainer = createAppContainer(AppTabNavigator);

