import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

// Screens
import firstScreen from './screens/firstScreen';
import secondScreen from './screens/secondScreen';

const LoginStack = createStackNavigator();
const LoginNavigator = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        options={{headerShown: false}}
        name={'firstScreen'}
        component={firstScreen}
      />
      <LoginStack.Screen
        options={{headerShown: false}}
        name={'secondScreen'}
        component={secondScreen}
      />
    </LoginStack.Navigator>
  );
};

export default LoginNavigator;
