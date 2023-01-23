import { View, Text, StyleSheet,Image,} from 'react-native'
import React from 'react'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({chat}) => {
  // console.log(props)
  return (
    <View style={styles.container}>
      <Image source={{uri: chat.user.image}}

        style={styles.image}
        />
          <View style={styles.content}>
              <View style={styles.row}>
                  <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
                      <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>   
              </View>
              <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
          </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginHorizontal:10,
    marginVertical:5,
    height:70,
    // backgroundColor:'red',
  },
  image:{
  width:60,
  height:60,
  borderRadius:30,
  marginRight:10,
  
  // height: 70,
  },
  row:{
    flexDirection:'row',
    marginBottom:5,
  },
  content:{
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
    
  },
  name:{
    flex: 1,
    fontWeight:'bold',
  },
  subTitle:{
    color:'gray',
    marginBottom:2,
  },




});

export default ChatListItem