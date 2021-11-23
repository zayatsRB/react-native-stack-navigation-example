import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Navigators
import LoginNavigator from './loginNavigator';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={'Login'}
          component={LoginNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
