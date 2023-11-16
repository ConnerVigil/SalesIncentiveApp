import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './components/welcome-page';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LeaderBoard from './components/LeaderBoard';
import Settings from './components/Settings';
import Stats from './components/Stats';
import Enthusiasm from './components/Enthusiasm';

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Leaderboard" component={LeaderBoard} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Welcome Page" component={WelcomePage} />
        <Stack.Screen name="Enthusiasm" component={Enthusiasm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
