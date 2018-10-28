import { Navigation } from 'react-native-navigation';

import App from './App';
//import screen2test from './screen2test';

import Schedule from './Schedule';
import Schedule2 from './Schedule2';
import Corporations from './Corporations';
import Startups from './Startups';
import AboutSasa from './AboutSasa';
import AboutFuture from './AboutFuture';
import Stakeholders from './Stakeholders';
import Interact from './Interact';
import SideDrawer from './SideDrawer';
import Details from './Details';

export function registerScreens(){
    Navigation.registerComponent('HomeScreen', () => App);
    Navigation.registerComponent('Schedule', () => Schedule);
    Navigation.registerComponent('Schedule2', () => Schedule2);
    Navigation.registerComponent('Corporations', () => Corporations);
    Navigation.registerComponent('Startups', () => Startups);
    Navigation.registerComponent('AboutSasa', () => AboutSasa);
    Navigation.registerComponent('AboutFuture', () => AboutFuture);
    Navigation.registerComponent('Stakeholders', () => Stakeholders);
    Navigation.registerComponent('Interact', () => Interact);
    Navigation.registerComponent('SideDrawer', () => SideDrawer);
    Navigation.registerComponent('Details', () => Details);

    //Navigation.registerComponent('DetailsCorp', () => DetailsCorp);
    //Navigation.registerComponent('DetailsStart', () => DetailsStart);
}