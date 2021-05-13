import React from 'react'
import {View, Text, Image } from 'react-native'

import {ChatRoom} from '../../types'
import Styles from './Styles'
import moment from 'moment'

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props

    const user = chatRoom.users[1]
    return [
        <View key={1} style={Styles.container}>
            <Image source={{uri: user.imageUri}} style={Styles.avatar}/>
            <View style={Styles.midContainer}>
            <Text style={Styles.username}>
                {user.name}
            </Text>
            <Text numberOfLines={1} style={Styles.lastMessage}>
                {chatRoom.lastMessage.content}
            </Text>
            </View>
            <Text style={Styles.date}>
                {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
            </Text>
        </View>,
    ]
}

export default ChatListItem
