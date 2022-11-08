import React, {useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './components/Signup';
import Splash from './components/Splash';
import StaffRecord from './components/StaffRecord';
import EmployeeRecord from './components/EmployeeRecord';
import Login from './components/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
let Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarLabel: 'Register',
          tabBarIcon: ({color}) => (
            <Icon name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({color}) => (
            <Icon name="navigate-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="StaffRecord"
        component={StaffRecord}
        options={{
          tabBarLabel: 'S-Record',
          tabBarIcon: ({color}) => (
            <Icon name="information-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="EmployeeRecord"
        component={EmployeeRecord}
        options={{
          tabBarLabel: 'E-Record',
          tabBarIcon: ({color}) => (
            <Icon name="man-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const DrawarScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerLabelStyle: {marginLeft: -15}}}>
      <Drawer.Screen
        name="Home"
        component={HomeTabs}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="md-home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
              style={{marginLeft: 10}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Signup"
        component={Signup}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="information-circle-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
              style={{marginLeft: 10}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={StaffRecord}
        options={{
          title: 'Setting',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="rocket"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
              style={{marginLeft: 10}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Record"
        component={EmployeeRecord}
        options={{
          title: 'Record',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="man-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
              style={{marginLeft: 10}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  //Splach loadings
  const [isLoad, setisLoad] = useState(true);
  setTimeout(() => {
    setisLoad(false);
  }, 1000);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {isLoad ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : (
          <Stack.Screen name="Drawer" component={DrawarScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
