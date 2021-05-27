import React from 'react'
import { FlatList} from 'react-native'
import ChatMessage from '../components/ChatMessage'
import InputBox from '../components/InputBox'
import chatRoomData from '../data/Chats'

import {useRoute} from '@react-navigation/native'

const ChatRoomScreen = () => {

    const route = useRoute()
    console.log(route.params)

    return (
      <>
          <FlatList inverted data={chatRoomData.messages} renderItem={({item}) => <ChatMessage message={item}/>}/>
          <InputBox/>
          </>
    )
}

export default ChatRoomScreen
