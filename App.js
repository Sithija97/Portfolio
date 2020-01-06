import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//navigation
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const AppContainer = createAppContainer(AppTabNavigator);
const AppTabNavigator = createBottomTabNavigator({
  Explore:{

  },
  Svaed:{

  },
  Trips:{

  },
  Inbox:{
    
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
