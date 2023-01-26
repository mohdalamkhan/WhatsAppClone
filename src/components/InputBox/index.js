import {SafeAreaView,StyleSheet, TextInput } from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import {useState} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';


const InputBox = () => {
// State creating for input
const [newMessage, setNewMessage]= useState();


    const onSend =()=>{
        console.warn('sending a new message',newMessage)
    }
  return (
    <SafeAreaView   style={styles.container}>
     {/* Icon */}
        <AntDesign name="plus" size={20} color="royalblue"/>
     {/* Text Input */}
     <TextInput value={newMessage}
     onChangeText={setNewMessage}
      style={styles.input} placeholder='Type a message'/>

     {/* Icon */}
     <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="#fff"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal:10,
        alignItems: 'center',
    },
    input:{
        flex: 1,
        backgroundColor:'white',
        padding: 5,
        paddingHorizontal:10,
        paddingVertical:10,

        borderRadius:50,
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,

    },
    send:{
        backgroundColor:'royalblue',
        padding: 7,
        borderRadius:15,
        overflow: 'hidden',
    },

});
export default InputBox