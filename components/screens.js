import { Navigation } from 'react-native-navigation';

import App from './App';
//import screen2test from './screen2test';

import MoreCorp from './MoreCorp';
import MoreStart from './MoreStart';
import DetailsCorp from './DetailsCorp';
import DetailsStart from './DetailsStart';
import SideDrawer from './SideDrawer';

export function registerScreens(){
    Navigation.registerComponent('HomeScreen', () => App);
    //Navigation.registerComponent('Screen2', () => screen2test);
    Navigation.registerComponent('MoreCorp', () => MoreCorp);
    Navigation.registerComponent('MoreStart', () => MoreStart);
    Navigation.registerComponent('DetailsCorp', () => DetailsCorp);
    Navigation.registerComponent('DetailsStart', () => DetailsStart);
    Navigation.registerComponent('SideDrawer', () => SideDrawer);
}