// @flow
import React from 'react';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Settings from './src/screens/Settings';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
        header: false,
        gesturesEnabled:false
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
        header: false,
        gesturesEnabled:false
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
        header: false,
        headerLeft: true
    }
  }
});
