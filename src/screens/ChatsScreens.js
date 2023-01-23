import {FlatList } from 'react-native';
import chats from "../../assets/data/chats.json";
import ChatListItem from "../components/ChatListItem";

const ChatsScreen = ()=>{
  return <FlatList 
  data ={chats}
  renderItem={({item}) => <ChatListItem chat={item}/>}
  // style={{backgroundColor:'red'}}
  />
}

// const ChatScreens = () => 
//   return <FlatList data={chats}
//   renderItems={({ item })=><ChatListItem chat={item}/>}

export default ChatsScreen