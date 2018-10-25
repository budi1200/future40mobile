import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  inner: {
    flex: 1,
    alignSelf: 'stretch',
    alignContent: 'center',
    justifyContent: 'center',
    height: Math.floor(Dimensions.get('window').height) - 179 // TODO: Dirty implementation
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    height: 42,
    alignItems: 'center'
  }
})