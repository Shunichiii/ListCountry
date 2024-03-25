import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppTab from './Bottom_TaB';
import Login from '../screen/Auth/Login';
import AuthRoute from './auth';

const STACK = createStackNavigator();

function AppRoute() {
  return (
    <STACK.Navigator screenOptions={{headerShown: false}}>
      <STACK.Screen name="AUTH" component={AuthRoute} />
      <STACK.Screen name="APP_TAB" component={AppTab} />
      <STACK.Screen name="HOME" component={Home} />
      <STACK.Screen name="PROFILE" component={Profile} />
      <STACK.Screen name="LOGIN" component={Login} />
    </STACK.Navigator>
  );
}

export default function Index() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppRoute />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
