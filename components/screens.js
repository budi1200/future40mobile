import { Navigation } from 'react-native-navigation';

import App from './App';
import screen2test from './screen2test';

export function registerScreens(){
    Navigation.registerComponent('App', () => App);
    Navigation.registerComponent('Screen2', () => screen2test);
}