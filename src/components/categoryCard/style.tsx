//import liraries
import { StyleSheet } from 'react-native';

const styleCard = StyleSheet.create({
    container: {
        height: 60,
        width: 120,
        borderRadius: 80,
        marginTop: 15,
        marginBottom: 20,
        margin: 1,
        justifyContent: 'center',
    },
    containerText: {
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: 12,
        padding: 1,
        paddingBottom: 15,
        paddingTop: 15,
    }
});

export const darkStyle = StyleSheet.create({
    ...styleCard,
    container: {
        ...styleCard.container,
        backgroundColor: "#fff",
        borderColor:"#af4",
        borderWidth:3,
    },
    containerText: {
        ...styleCard.containerText,
        color: "#000"
    }
})

export const lightStyle = StyleSheet.create({
    ...styleCard,
    container: {
        ...styleCard.container,
        backgroundColor: "#033",
        borderColor:"#af4",
        borderWidth:3
    },
    containerText: {
        ...styleCard.containerText,
        color: "#fff"
    }
})