import { StyleSheet, Dimensions } from 'react-native';

const app = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4527a0'
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    todoText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "#ffb300"
    },
    todoCount: {
        fontSize: 35,
        color: "#ffb300"
    },
    emptyComponent: {
        color: '#ede7f6',
        textAlign: 'center'
    }
})

const todo_input = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#ede7f6',
        margin: 10,
        borderRadius: 10,
    },
    container: {
        backgroundColor: '#9575cd',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: '#5e35b1',
        padding: 10,
        margin: 10,
        width: Dimensions.get('window').width / 2.5,
        alignSelf: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

const todo_card = StyleSheet.create({
    container: {
        backgroundColor: '#5e35b1',
        padding: 8,
        margin: 5,
        borderRadius: 7,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textBox: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    image: {
        width: 15, 
        height: 15, 
        margin: 5,
    }
})

export { app, todo_input, todo_card };