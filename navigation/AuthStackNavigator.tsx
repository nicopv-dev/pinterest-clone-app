import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Sign in"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Sign up"
        component={SignUpScreen}
        options={{
          title: "Sign Up",
          headerTitleAlign: 'center',
        }}
      /> 
    </Stack.Navigator>
  )
}