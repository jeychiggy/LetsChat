import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    avatar: {
       width: 50,
       height: 50,
       borderRadius: 25,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 16,
        // paddingHorizontal: 12
    },
    border: {
        width: '100%',
        height: 1,
        backgroundColor: 'grey',
        marginVertical: 24
    },
    midContainer: {
        justifyContent: 'space-around',
        width: '60%',
        marginHorizontal: 12
    },
    username: {
        fontWeight: 'bold',
        fontSize: 18
    },
    status: {
        color: 'grey'
    }

})
