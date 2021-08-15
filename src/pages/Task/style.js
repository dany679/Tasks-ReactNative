import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#fff',
    paddingTop: 20,
  },
  iconButton: {
    fontSize: 25,
    color: '#fff',
  },
  buttonNewTask: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#f96e6a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  Task: {
    padding: 10,
    backgroundColor: '#f29e6a',
    borderRadius: 7,
    margin: 5,
    color: '#fff',
    flex: 1,
    // justifyContent: 'left',
    alignItems: 'center',
    flexDirection: 'row',
  },
  deleteTask: {},
});
export default styles;
