import {StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'

export default StyleSheet.create({
	container: {
		padding: 10
	},
	messageBox: {
		// marginRight: 50,
		borderRadius: 5,
		padding: 20,
		flex: 1
	},
	message: {

	},
	time: {
		alignSelf: 'flex-end',
		color: 'grey',
		marginTop: 5
	},
	name: {
		color: Colors.light.tint,
		fontWeight: 'bold',
		marginBottom: 5
	}
})
