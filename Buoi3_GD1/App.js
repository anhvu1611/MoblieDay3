import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import first from "../Buoi3_GD1/screens/first"
import manHinh1b from ".././Buoi3_GD1/screens/manHinh1b"
import manHinh1c from ".././Buoi3_GD1/screens/manHinh1c"
import manHinh1d from ".././Buoi3_GD1/screens/manHinh1d"
import manHinh1e from ".././Buoi3_GD1/screens/manHinh1e"
import manHinh2a from ".././Buoi3_GD1/screens/manHinh2a"
import manHinh2b from ".././Buoi3_GD1/screens/manHinh2b"

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='manHinh2b' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="first" component={first} />
        <Stack.Screen name="manHinh1b" component={manHinh1b} />
        <Stack.Screen name="manHinh1c" component={manHinh1c} />
        <Stack.Screen name="manHinh1d" component={manHinh1d} />
        <Stack.Screen name="manHinh1e" component={manHinh1e} />
        <Stack.Screen name="manHinh2a" component={manHinh2a} />
        <Stack.Screen name="manHinh2b" component={manHinh2b} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}