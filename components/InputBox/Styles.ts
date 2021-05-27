import {StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'

export default StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	mainContainer: {
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 10,
		margin: 10,
		borderRadius: 50,
		flex: 1
	},
	textInput: {
		flex: 1,
		marginHorizontal: 20
	},
	buttonContainer: {
		backgroundColor: Colors.light.tint,
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: 50,
		borderRadius: 50,
		margin: 10
	},
	icon: {
		margin: 5
	}
})
