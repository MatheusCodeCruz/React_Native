import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Account from "../screens/Account";
import Browse from "../screens/Browse";
import MyList from "../screens/MyList";
import Simulcasts from "../screens/Simulcasts";

import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
         tabBarActiveTintColor: '#FF7F00',
         tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#333333",
          borderTopWidth: 0,
          height: 50,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused }) => (
            <Feather name="home" 
            size={size} 
            color={focused ? '#FF7F00' : '#ffffff'} 
            style={{ backgroundColor: focused ? 'rgba(255, 127, 0, 0.2)' : 'transparent' }}
            />
          ),
        }}
      />
      <Tab.Screen 
      name="MyList" 
      component={MyList} 
      options={{
        tabBarIcon: ({ focused, size }) => (
            <Feather name="folder" 
            size={size} 
            color={focused ? '#FF7F00' : '#ffffff'} 
            style={{ backgroundColor: focused ? 'rgba(255, 127, 0, 0.2)' : 'transparent' }}
            />
        ),
      }}
    />
      <Tab.Screen 
      name="Browse" 
      component={Browse} 
      options={{
        tabBarIcon: ({ focused, size }) => (
            <Feather name="command" 
            size={size} 
            color={focused ? '#FF7F00' : '#ffffff'} 
            style={{ backgroundColor: focused ? 'rgba(255, 127, 0, 0.2)' : 'transparent' }}
            />
        ),
      }}
    />
      <Tab.Screen 
      name="Simulcasts" 
      component={Simulcasts} 
      options={{
        tabBarIcon: ({ focused, size }) => (
            <Feather name="airplay" 
            size={size} 
            color={focused ? '#FF7F00' : '#ffffff'} 
            style={{ backgroundColor: focused ? 'rgba(255, 127, 0, 0.2)' : 'transparent' }}
            />
        ),
      }}
    />
      <Tab.Screen 
      name="Account" 
      component={Account} 
      options={{
        tabBarIcon: ({ focused, size }) => (
            <Feather name="user" 
            size={size} 
            color={focused ? '#FF7F00' : '#ffffff'} 
            style={{ backgroundColor: focused ? 'rgba(255, 127, 0, 0.2)' : 'transparent' }}
            />
        ),
      }}
    />
    </Tab.Navigator>
  );
}

export default Routes;
