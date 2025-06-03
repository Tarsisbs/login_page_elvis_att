import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage: {
    
    maxWidth: '100vw',
    maxHeight: '100vh',
    position: 'absolute',
    zIndex: '-2'
  },

  form: {
    marginLeft: '-60px',
    marginTop: '-170px'
  },

  inputGeral: {
    height: 70,
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  },

  input: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  icone: {
    marginLeft: '-30px',
    color: 'black'
  },

  asterisco: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '-78px'
  },

  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },

  btn_login: {
    backgroundColor: '#af69cd',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
  },

  text_btn: {
    color: '#fff',
    fontSize: 15
  }
});

export default styles;