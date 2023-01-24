import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatSreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreens';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Chats" component={ChatsScreen}/>
        <Stack.Screen name ="Chat" component={ChatSreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;