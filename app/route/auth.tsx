import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppTab from './Bottom_TaB';
import Login from '../screen/Auth/Login';
import Register from '../screen/Auth/Register';

const Auth = createStackNavigator();

function AuthRoute() {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name='LOGIN' component={Login} />
      <Auth.Screen name="REGISTER" component={Register} />
    </Auth.Navigator>
  );
}

export default AuthRoute;