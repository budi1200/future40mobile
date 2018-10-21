import { Navigation } from 'react-native-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function addIconTopBar(screen){
    Promise.all([
        MaterialIcons.getImageSource('menu', 20, 'black')
      ]).then((sources) => {
        Navigation.mergeOptions(screen, {
          topBar: {
            leftButtons: {
              id: 'DrawerButton',
              icon: sources[0],
            }
          }
        })
      });
}

export function handleButtonPress(buttonID){
  if(buttonID === "DrawerButton"){
    Navigation.mergeOptions( 'SideMenu', {
      sideMenu: {
          left: {
              visible: true
          }
      }
    })
  }
}