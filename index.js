/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
import {name as appName} from './app.json';
import IntroComponent from './Component/IntroComponent'
import MainComponent from './Component/MainComponent'
import ListVatNoComponent from './Component/ListVatNoComponent'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Intro' };
        setTimeout(() => { this.setState({ currentScreen: 'Main' }) }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Intro' ? <IntroComponent /> : <MainComponent />
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => Main);
