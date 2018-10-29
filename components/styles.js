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

  scheduleWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#dadce0',
    borderBottomWidth: 1,
    marginLeft: 8,
    marginRight: 8
  },
  scheduleBigTimeWrapper: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'center'
  },
  scheduleBigTimeText: {
    fontSize: 18,
    color: '#ff72bb',
    fontWeight: 'bold'
  },
  scheduleInfoWrapper: {
    paddingLeft: 6,
    paddingTop: 13,
    paddingBottom: 13
  },
  scheduleInfoText: {
    color: '#606060',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 100
  },
  scheduleInfoDesc: {
    fontSize: 15,
    paddingTop: 2,
    color: '#979797'
  },
  scheduleInfoRoom: {
    color: '#6dcac1',
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
    borderRadius: 150
  },
  listCardText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black'
  },

  aboutWrapper: {
    margin: 4,
    padding: 12
  },

  stakeholdersCardWrapper: {
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
  stakeholdersTypeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#554bb9',
    paddingTop: 8,
    padding: 6,
    marginLeft: 8
  },
  stakeholdersCardImage: {
    height: 106,
    width: 106,
    marginRight: 16,
    borderRadius: 150,
    resizeMode: 'contain'
  },
  stakeholdersCardText: {
    margin: 4,
    padding: 12,
    marginRight: 100
  },

  detailsWrapper: {
    paddingLeft: 16
  },
  detailsTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#554bb9'
  },
  detailsDesc: {
    paddingLeft: 4,
    paddingRight: 24,
    paddingBottom: 12,
    fontSize: 14,
    color: '#818181',
  },
  detailsWebsiteWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
    marginBottom: 16,
    padding: 8,
    alignSelf: 'flex-start',
  },
  detailsWebsiteText: {
    color: '#554bb9',
    fontSize: 16,
    fontWeight: 'bold',
  }
})