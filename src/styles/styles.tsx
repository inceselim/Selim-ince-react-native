import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    containerCategory: {
        paddingLeft: 3,
        paddingRight: 3,
        marginTop: 10,
        margin: 7,
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
    container: {
        flex: 9,
    },
    buttonActive: {
        backgroundColor: "#113",
        color: "#ffaf",
    },
    buttonDeactive: {
        backgroundColor: "#cdcd",
        color: "#003",
    },
    imageDetail: {
        height: (windowHeight / 2),
        width: (windowWidth) - 10, padding: 10, marginTop: 2,
    },
    detailContent: {
        paddingLeft: 3,
        paddingRight: 12,
        marginTop: 10,
        margin: 7,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        paddingRight: 10,
    },
    priceText: { fontSize: 18 },
    detailText: { fontSize: 17, margin: 3, padding: 10 },
    input: {
        height: 40,
        margin: 12,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
})