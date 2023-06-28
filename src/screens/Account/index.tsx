import { StyleSheet, Text, View } from "react-native";

function Account () {
    return (
        <View style={styles.container}>
            <Text>Account</Text>
        </View>
    );
}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }   
});