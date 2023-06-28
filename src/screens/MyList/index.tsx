import { StyleSheet, Text, View } from "react-native";
import { ColoredText } from "../Register/styles";

function MyList () {
    return (
        <View style={styles.container}>
            <Text>Account</Text>
        </View>
    );
}

export default MyList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }, 

    Text: {
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

});