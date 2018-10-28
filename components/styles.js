import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  inner: {
    flex: 1,
    alignSelf: 'stretch',
    alignContent: 'center',
    justifyContent: 'center',
    height: Math.floor(Dimensions.get('window').height) - 179 // TODO: Dirty implementation
  },
  cardWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dadce0',
    borderRadius: 8,
    margin: 6
  },
  cardTextWrapper: {
    padding: 12
  },
  cardTitle: {
    fontSize: 16,
    paddingBottom: 5
  },
  cardDesc: {
    color: '#818181',
    paddingLeft: 4
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    marginRight: 8,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
  },
  buttonIcon: {
    paddingLeft: 16,
    paddingRight: 32
  },
  buttonText: {
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    color: 'black',
    fontWeight: '400'
  },
  active: {
    backgroundColor: 'rgba(236, 57, 139, 0.24)'
  },
  listCardWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
    marginBottom: 3,
    borderColor: '#dadce0',
    borderWidth: 1,
    borderRadius: 8
  },
  listCardImage: {
    height: 96,
    width: 96,
    marginRight: 16,
    resizeMode: 'contain',
    borderRadius: 200
  },
  listCardText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black'
  },
  aboutWrapper: {
    margin: 4,
    padding: 12
  }
})