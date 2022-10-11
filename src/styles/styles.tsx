import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerCategory: {
        paddingLeft: 4,
        paddingRight: 4,
        marginTop: 5,
        flex: 0.1,
        minHeight: 30,
        maxHeight:30,
    },
    containerContent: {
        flex: 13,
    },
    btn: {
        backgroundColor: "#114",
        margin: 3,
        borderRadius: 20, 
        marginLeft: 5,
        marginRight: 5,
        height: 30
    },
    btnText: {
        fontSize: 16,
        textAlign: "center",
        color: "#fff",
        padding: 5
    },
    buttonActive: {
        backgroundColor: "#113",
        color: "#ffaf",
        padding: 2,
        paddingLeft: 7,
        paddingRight: 7,
        fontSize: 15,
    },
    buttonDeactive: {
        backgroundColor: "#dd5",
        color: "#003",
        padding: 2,
        paddingLeft: 7,
        paddingRight: 7,
        fontSize: 15,
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
        fontSize: 17,
        fontWeight: "bold",
        paddingRight: 10,
    },
    priceText: { fontSize: 15 },
    detailText: { fontSize: 15, margin: 3, padding: 10 },
    input: {
        height: 40,
        margin: 12,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
})