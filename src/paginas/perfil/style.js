import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '30px',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 7 : 0
  },

  image: {
    width: '80px',
    height: '80px'
  },

  numeros: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    marginTop: '20px',
    fontSize: '20px'
  }
});

export default styles;