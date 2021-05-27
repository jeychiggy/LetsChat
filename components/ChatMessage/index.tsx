import React from 'react'
import {Text, View} from 'react-native'
import {Message} from '../../types'
import moment from 'moment'
import Styles from './Styles'

export type ChatMessageProps = {
    message: Message
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props

    const isMyMessage = () => {
        return message.user.id === 'u1'
    }

    return(
    <View style={[Styles.container]}>
        <View style={[Styles.messageBox, {backgroundColor: isMyMessage() ? '#DCF8C5': 'white', alignSelf: isMyMessage()?'flex-start': 'flex-end'}]}>
            {!isMyMessage() &&  <Text style={Styles.name}>{message.user.name}</Text>}
            <Text style={Styles.message}>
                {message.content}
            </Text>
            <Text style={Styles.time}>
                {moment(message.createdAt).fromNow()}
            </Text>
        </View>
    </View>
    )
}

export default ChatMessage
