import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';

const chat ={
  id:"1",
  user:{
    image:
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
    name: "Lucy",
  },
  lastMessage:{
    text: "Hello",
    createAt: "07:31",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem  chat ={chat}/>
      {/* <ChatListItem /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
