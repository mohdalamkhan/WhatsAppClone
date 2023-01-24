import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatSreen from '../screens/ChatScreen';
// import ChatsScreen from '../screens/ChatsScreens';
import MainTabNavigation from './MainTabNavigation';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions =
      {{headerStyle:{backgroundColor:'whitesmoke'}}}>
        <Stack.Screen name="Home" component={MainTabNavigation} options={{headerShown: false}}/>
        {/*  This is not needed here <Stack.Screen name ="Chats" component={ChatsScreen}/> */}
        <Stack.Screen name ="Chat" component={ChatSreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;