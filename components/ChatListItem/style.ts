import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%'
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
    maxWidth: 220,
  },
  leftContainer: {
    flexDirection: 'row'
  },
  midContainer: {
    justifyContent: 'space-around'
  },
  time: {
    fontSize: 14,
    color: 'grey'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default styles;
