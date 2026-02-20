import RootProvider from './src/app/providers/RootProvider';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/app/navigation/AppNavigator';


function App() {


  return (


    <RootProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </RootProvider>


  );
}


export default App;
