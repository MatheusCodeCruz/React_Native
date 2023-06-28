import { StyleSheet, Text, View } from "react-native";

function Browse () {
    return (
        <View style={styles.container}>
            <Text>Account</Text>
        </View>
    );
}

export default Browse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }   
});