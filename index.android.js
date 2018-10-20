/** @format */

import {Navigation} from 'react-native-navigation';
import { registerScreens } from './components/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'SideDrawer',
            passProps: {
              text: 'This is a left side menu screen'
            }
          }
        },
        center: {
          stack: {
            children: [{
              component: {
                name: 'HomeScreen'
              },
            }]
          }
        }
      }
    }
  });
});