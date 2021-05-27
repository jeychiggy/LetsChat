import React, {useState} from 'react'
import {View, TextInput, TouchableOpacity} from 'react-native'
import Styles from './Styles'
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons'

const InputBox = () => {
	const [message, setMessage] = useState('')

	const onSend = () => {
		console.warn(`sending: ${message}`)
		setMessage('')
	}

	const onRecord = () => {
		console.warn('recording')
	}

	const onPress = () => {
		if(message)onSend()
		else{
			onRecord()
		}
	}

	return (
		<View style={Styles.container}>
			<View style={Styles.mainContainer}>
				<FontAwesome5 name='laugh-beam' size={24} color='grey' style={Styles.icon}/>
				<TextInput
					multiline
					placeholder='Type a message'
					style={Styles.textInput}
					value={message}
					onChangeText={setMessage}
				/>
				<Entypo name='attachment' size={24} color='grey' style={Styles.icon}/>
				{!message && <Fontisto name='camera' size={24} color='grey' style={Styles.icon}/>}
			</View>
			<View style={Styles.buttonContainer}>
				<TouchableOpacity onPress={onPress}>
					<MaterialCommunityIcons name={message ? "send" : "microphone" } size={24} color={'white'}/>
				</TouchableOpacity>
			</View>
		</View>

	)
}

export default InputBox
