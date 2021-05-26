import React from 'react'
import {View, Text, Image, TouchableOpacity } from 'react-native'

import {ChatRoom} from '../../types'
import Styles from './Styles'
import moment from 'moment'
import {useNavigation} from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props

    const navigation = useNavigation()

    const user = chatRoom.users[1]
    return [
        <TouchableOpacity key={1} style={Styles.container} onPress={() => navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
            imageUri: user.imageUri
        }
        )}>
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
        </TouchableOpacity>,
    ]
}

export default ChatListItem
