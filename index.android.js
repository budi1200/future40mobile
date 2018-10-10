/** @format */
import {Navigation} from 'react-native-navigation';
import { registerScreens } from './components/screens';

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'Screen1',
        icon: require('./components/img/icon1.png'),
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'Screen2',
        icon: require('./components/img/icon2.png'),
        title: 'Screen Two'
      }
    ]
});