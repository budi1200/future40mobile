/** @format */

import {Navigation} from 'react-native-navigation';
import { registerScreens } from './components/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'SideMenu',
        left: {
          component: {
            id: 'SideDrawer',
            name: 'SideDrawer',
            passProps: {
              text: 'This is a left side menu screen'
            }
          }
        },
        center: {
          stack: {
            id: 'MainStack',
            children: [{
              component: {
                id: 'HomeScreen',
                name: 'HomeScreen'
              }
            }]
          }
        }
      }
    }
  });
});