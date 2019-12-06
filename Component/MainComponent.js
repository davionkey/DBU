
/**
 * @format
 */


import ListVatNoComponent from './ListVatNoComponent'
import SearchComponent from './SearchComponent'
import ChiTietVatNoComponent from './ChiTietVatNoComponent'
import * as React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
    {
      Home: SearchComponent ,
      Details: ListVatNoComponent,
      ChiTiet : ChiTietVatNoComponent,
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class MainComponent extends React.Component {
    render() {
      return <AppContainer />;
    }
  }