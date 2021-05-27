import React from 'react'
import {View, Text, Image, TouchableOpacity } from 'react-native'

import {User} from '../../types'
import Styles from './Styles'
import {useNavigation} from '@react-navigation/native'

export type ContactListItemProps = {
    user: User
}

const ContactListItem = (props: ContactListItemProps) => {

    const {user} = props

    const navigation = useNavigation()

    const onPress = () => {
        // navigate to chat with user
    }


    return [
        <TouchableOpacity key={1} style={Styles.container} onPress={onPress}>
            <Image source={{uri: user.imageUri}} style={Styles.avatar}/>
            <View style={Styles.midContainer}>
            <Text style={Styles.username}>
                {user.name}
            </Text>
                <Text style={Styles.status}>
                {user.status}
            </Text>
            </View>
        </TouchableOpacity>,
    ]
}

export default ContactListItem
