import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        justifyContent: 'center',
        // alignItems: 'center',
        flex: 1
    },
    textInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: 'black'
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    img:{
        width: 200,
        height: 200,
        marginBottom: 40,
        borderRadius: 20,
        alignSelf: 'center'
    },
    label:{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent:'space-between'

    },
    register:{
        textDecorationLine: 'underline',
        color: 'blue'
    },
    signIn:{
        marginLeft: 10,
        color: 'blue',
        padding: 5,

    }
})