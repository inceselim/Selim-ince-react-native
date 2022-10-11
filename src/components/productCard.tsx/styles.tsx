import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const screenHeight = windowHeight / 4
const screenWidth = windowWidth / 2

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderWidth: 2,
        borderColor: "#FF8A65",
        shadowColor: "#000",
        borderRadius: 10,
        marginBottom: 15,
        height: screenHeight,
        width: screenWidth - 30,
    },
    image: {
        height: screenHeight - 60,
        width: screenWidth - 50,
        padding: 5,
        marginTop: 2,
        borderRadius: 10,
        alignSelf: 'center'
    },
    text: {
        color: "#000",
        backgroundColor: "#FF8A65",
        height: 54,
        marginTop:1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 13,
        paddingLeft: 3,
        paddingTop: 5,
    }
})
export default styles;