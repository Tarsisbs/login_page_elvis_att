import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage: {
    width: '460px',
    height: '1400px',
    marginTop: '-50px',
    zIndex: '-5'
  },

  form: {
    marginTop: '-1100px',
    marginLeft: '-20px'
  },

  inputGeral: {
    height: 70,
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: '500',
    color: '#222',
    borderBottomWidth: 1,
    borderColor: '#1D1C1C',
    borderStyle: 'solid'
  },

  input: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  icone: {
    marginLeft: '-30px'
  },

  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  }
});

export default styles;