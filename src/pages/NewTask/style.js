import { StyleSheet } from 'react-native';
const ML = 15;
const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    paddingTop: 20,
    backgroundColor: '#f96e6a',
    flex: 1,
  },
  label: {
    color: '#fff',
    fontSize: 20,
    marginLeft: ML,
    marginBottom: 5,
  },
  View: {
    flex: 1,
    justifyContent: 'left',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: ML,
    backgroundColor: '#fff',
    maxHeight: 50,
    borderRadius: 13,
  },
  TextInput: {
    fontSize: 20,
    height: 25,
    color: '#000',
    width: '80%',
    borderBottomWidth: 1,
    borderColor: 'transparent',
  },
  buttonNewTask: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});
export default styles;
