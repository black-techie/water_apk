import {Pressable, Text, StyleSheet } from "react-native";

interface prop {
    text: string
}
function PrimaryButton(props: prop) {
    return (
        <Pressable
            style={styles.primary}
            onPress={() => { window.alert(props.text) }}
        >
            <Text style={styles.primaryText}> Log In </Text>
        </Pressable>
    )
}

function SecondaryButton(props: prop) {
    return (
        <Pressable
            style={styles.secondary}
            onPress={() => { window.alert(props.text) }}
        >
            <Text style={styles.secondaryText}> Sign Up </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    primary: {
        backgroundColor: "#fff",
        height: 60,
        width: 170,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    primaryText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: '600',
        letterSpacing: 0.25,
        color: '#0081C9',
    },
    secondary: {
        backgroundColor: "#0081C9",
        height: 60,
        width: 170,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white"
    },
    secondaryText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: '600',
        letterSpacing: 0.25,
        color: '#fff',
    }
})

export {
    PrimaryButton,
    SecondaryButton
}