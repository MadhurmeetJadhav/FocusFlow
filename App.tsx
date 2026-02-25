import RootProvider from './src/app/providers/RootProvider';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/app/navigation/RootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function App() {
,

  return (



    <RootProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </RootProvider>



  );
}


export default App;
