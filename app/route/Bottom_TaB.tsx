import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import TabBar, { TAB_DATA } from '../conponents/TabBar';


const Tab = createBottomTabNavigator();

function AppTab() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={props => <TabBar {...props}/>}>
        <Tab.Screen name={TAB_DATA.HOME.name} component={Home} />
        <Tab.Screen name={TAB_DATA.PROFILE.name} component={Profile} />
      </Tab.Navigator></>
  );
}

export default AppTab;
