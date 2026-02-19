
import { SafeAreaView } from 'react-native-safe-area-context';
import RootProvider from './src/app/providers/RootProvider';
import HomeScreen from './src/modules/HomeScreen';


function App() {


  return (

    <SafeAreaView style={{ flex: 1 }}>
      <RootProvider>
        <HomeScreen />
      </RootProvider>
    </SafeAreaView>

  );
}


export default App;
