import { Text, View, StyleSheet, Image } from "react-native"
import { PrimaryButton, SecondaryButton } from "../components/button"

export default function Landing() {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image
                    style={styles.image}
                    source={require("../assets/water.png")}
                />
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.heading}>The best app to monitor water consumption</Text>
                <Text style={styles.paragraph}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </Text>
                <View style={styles.buttons}>
                    <PrimaryButton text="Log In" />
                    <SecondaryButton text="Sign Up" />

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0081C9',
        justifyContent: 'center',
    },
    topView: {
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "25%"
    },
    image: {
        height: 400,
        width: 380
    },
    bottomView: {
        height: "50%",
    },
    heading: {
        color: "white",
        fontSize: 40,
        fontWeight: "600",
        marginLeft: 20,
        marginTop: 20
    },
    paragraph: {
        color: "white",
        marginHorizontal: 22,
        marginTop: 18,
        fontSize: 20,
        fontWeight: "300"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
        marginHorizontal: 20
    }

})