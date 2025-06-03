import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/rotas/index.js';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas/>
    </NavigationContainer>
  );
}